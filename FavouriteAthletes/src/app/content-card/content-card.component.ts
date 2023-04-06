import { Component, Input, OnInit } from '@angular/core';

import { Content } from '../helper-files/content-interface';
import { ModifyContentComponent } from '../modify-content/modify-content.component';
import { MatDialog } from '@angular/material/dialog';
import { ContentService } from '../services/content.service';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent  implements  OnInit  {

  default:string="/assets/imgs/photo.jpg"

  @Input() items:any ;
  items1: any;


  constructor(private contentService: ContentService , public dialog: MatDialog){}

  ngOnInit(): void {
    
    
  }

  

public Onclick(content:any)
{
  console.log("Id="+content.id +"  Title="+content.title );
}


updateContent(data:any){
 


  const dialogRef = this.dialog.open(ModifyContentComponent, {
    data: { formBtn: 'Update Content',
    formData : data
   },
    width: '60%',
    height : '50%'
});

    dialogRef.afterClosed().subscribe(result => {
       this.items = result;
       console.log(this.items , 'on close');
    });
}



getContents(): void {
  this.contentService.getContents().subscribe(
    (res:any)=>{
     

      this.items =res;
      console.log(this.items  , 'data');
    }
  )
     
}

}