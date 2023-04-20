import { Component, Input, OnInit } from '@angular/core';

import { Content } from '../helper-files/content-interface';
import { SportService } from '../services/sport.service';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent  {

  constructor(private sportService : SportService){}
 @Input() items:any ;
// public Onclick(content:any)
// {
//   console.log("Id="+content.id +"  Title="+content.title );
// }

getContentId(content:any){
  console.log("Id="+content.id +"  Title="+content.title );

  this.sportService.contentID = content.id ;
}

}