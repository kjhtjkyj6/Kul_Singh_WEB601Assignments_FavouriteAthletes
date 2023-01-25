import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent  {

  contentItem:Content = {
    id:1,
    title:"Javelin",
    description:"Javelin is one of the favourite games",
    creator:"Kuljinder Singh",
    type:"Athetics"
  }
  contentItem2:Content = {
    id:2,
    title:"Track Races",
    description:"Track Race is one of the favourite games",
    creator:"Kuljinder Singh",
    type:"Athletics"
  }
  contentItem3:Content = {
    id:3,
    title:"Jumps",
    description:"Jumps are one of the favourite games ",
    creator:"Kuljinder Singh",
    type:"Athletics"
  }
  myContent = new ContentList(this.contentItem)
  contentList = this.myContent.getContent();
  
  constructor() {
    this.myContent.add(this.contentItem);
    this.myContent.add(this.contentItem2);
    this.myContent.add(this.contentItem3);
   

}
}
