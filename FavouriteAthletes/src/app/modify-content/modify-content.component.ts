import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements  OnInit {

  content: Content[] = [];
  
  constructor(private contentService: ContentService) { }

ngOnInit(): void {
  

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
  
  let newContent: Content = { id: 8, title, description, creator, imgURL, type, tags };
 
 

  this.contentService.addContent(newContent).subscribe(content => {
      this.content.push(content);

      this.getContents();
       
      newContent = []
    });
    console.log(this.content);
}


}
