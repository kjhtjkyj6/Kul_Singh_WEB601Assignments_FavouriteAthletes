import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';
import {MatDialog} from '@angular/material/dialog';
import { ModifyContentComponent } from '../modify-content/modify-content.component';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
 
  searchTitle:string | undefined;
  exist=false;
  message:string | undefined;

  
  contentItem: any;
  
  
  


constructor(  private contentService: ContentService , public dialog: MatDialog) { 
 
}


ngOnInit(): void {

   this.getContents();

   


}

openDialog() {
  const dialogRef = this.dialog.open(ModifyContentComponent, {
   
    width: '60%',
    height : '50%'
});

    dialogRef.afterClosed().subscribe(result => {
      this.getContents();
    });
  }



  getContents(): void {
    this.contentService.getContents().subscribe(
      (res:any)=>{
       
  
        this.contentItem =res;
      }
    )
       
  }
  
 

}
