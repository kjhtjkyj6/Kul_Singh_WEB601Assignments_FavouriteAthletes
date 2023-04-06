import { Component, OnInit ,Inject } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements  OnInit {

  content: Content[] = [];
  formBtn:string ='Add Content' ;

  title!: string    ;
  description!: string    ;
  creator!: string   ;
  imgURL!: string   ;
  type!: string   ;
  tags!: string    ;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(private contentService: ContentService ,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private _snackBar: MatSnackBar ,
    public dialogRef: MatDialogRef<ModifyContentComponent>
    ) { }

ngOnInit(): void {
  
  console.log(this.data) ;
   if(this.data){
    this.formBtn  = this.data.formBtn ;
    this.title = this.data.formData.title   ;
    this.description = this.data.formData.description    ;
    this.creator = this.data.formData.creator   ;
    this.imgURL  = this.data.formData.imgURL  ;
    this.type   = this.data.formData.type ;
    this.tags  = this.data.formData.tags   ;

   }
   

  this.getContents();

}


getContents(): void {
  this.contentService.getContents().subscribe(
    (res:any)=>{
     

      this.content =res;
    }
  )
     
}

add(title: string, description: string, creator: string, imgURL?: string, type?: string, tags?: any): void {
  
  
    const contents = this.content;
     let id = contents.length > 0 ? Math.max(...contents.map(contents => contents.id)) + 1 : 1;
   
     

  let newContent: Content = {
    id : id , title, description, creator, imgURL, type, tags,
    
  } as Content;
 
 
   if(this.data ){
    let newContent: Content = { id: this.data.formData.id, title, description, creator, imgURL, type, tags };
       
     console.log(newContent);
    this.contentService.updateContent(newContent).subscribe(
      (res:any)=>{
        this.getContents();
        this._snackBar.open('  Data updated', 'Splash', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.dialogRef.close( this.content);
        
      })

   } else {
    this.contentService.addContent(newContent).subscribe(content => {
      this.content.push(content);
      this._snackBar.open('New Data added', 'Splash', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    
      this.dialogRef.close();
       
       
    });

   }
  
     
}


}
