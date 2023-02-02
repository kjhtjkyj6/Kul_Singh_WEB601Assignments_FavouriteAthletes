import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentItem:Content[] = [{
    id:1,
    title:"Javelin",
    description:"Javelin is one of the favourite games",
    creator:"Kuljinder Singh",
    type:"Athetics"
  },
 {
    id:2,
    title:"Track Races",
    description:"Track Race is one of the favourite games",
    creator:"Kuljinder Singh",
    type:"Athletics"
  }
 , {
    id:3,
    title:"Jumps",
    description:"Jumps are one of the favourite games ",
    creator:"Kuljinder Singh",
    type:"Athletics"
  }
  , {
    id:4,
    title:"Swimming",
    description:"Swimming is one of the favourite games ",
    creator:"Kuljinder Singh",
    type:"Athletics"
  }
  ,{
    id:5,
    title:"Races",
    description:"Racing events are one of the favourite games ",
    creator:"Kuljinder Singh",
    type:"Athletics"
  }
];


constructor() { 

}


ngOnInit(): void {

}

}
