import { Component, Input, OnInit } from '@angular/core';

import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent  {

  default:string="/assets/imgs/photo.jpg"

 @Input() items:any ;
public Onclick(content:any)
{
  console.log("Id="+content.id +"  Title="+content.title );
}

}