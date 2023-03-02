import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addNewContent(contentItem: any): void {
    debugger
    // add the new content to the contents array
    this.contentItem.push(contentItem);

    // log a success message
    console.log(`Added ${contentItem.title} successfully`);

    // clone the contents array to trigger change detection
    this.contentItem = this.contentItem.slice();

  
  // searchTitle:string | undefined;
  // exist=false;
  // message:string | undefined
  
  // find()
  // {
  //  const Search= this.contentItem.find(search=>search.title.toLowerCase()==this.searchTitle?.toLowerCase());
  //  this.exist=!!Search;
  //  this.message=this.exist? `Content with tilte "${this.searchTitle}"  exist`: `Content with tilte "${this.searchTitle}"  does not exist`
  
  }

  contentItem:Content[] = [{
    id:0,
    title:"Javelin",
    description:"Javelin is one of the favourite games",
    creator:"Kuljinder Singh",
    type:"Athetics",
    imgURL:""  },
 {
    id:1,
    title:"Track Races",
    description:"Track Race is one of the favourite games",
    creator:"Kuljinder Singh",
    type:"race",
    imgURL:"https://th.bing.com/th/id/R.b2b264385f8cfc10c8b5cfd91ed46026?rik=Yful9fnwpLdriw&riu=http%3a%2f%2fcdn.fansided.com%2fwp-content%2fblogs.dir%2f229%2ffiles%2f2016%2f08%2f9463583-justin-gatlin-yohan-blake-olympics-track-and-field-850x520.jpg&ehk=xXMw23XhZg60fJmmQDq3Jdcok9QPEV9%2f7r5RZdigX9I%3d&risl=&pid=ImgRaw&r=0"  }
 , {
    id:2,
    title:"Jumps",
    description:"Jumps are one of the favourite games ",
    creator:"Kuljinder Singh",
    type:"swiimming",
    imgURL:"https://th.bing.com/th/id/R.3f6055aa4b71481878aae9cb20d3cdd8?rik=CQNeo90zOmXl1Q&riu=http%3a%2f%2fathletics.ca%2fwp-content%2fuploads%2f2015%2f01%2fDerek-Drouin-CAN-001-HJ_28_07_14CA-e1422911700750.jpg&ehk=T1gtHTj9dXRV2Te83%2bT9GulBDA5zRyLLyQxqi8PAGuo%3d&risl=&pid=ImgRaw&r=0"  }
  , {
    id:3,
    title:"Swimming",
    description:"Swimming is one of the favourite games ",
    creator:"Kuljinder Singh",
    type:"",
    imgURL:""  }
  ,{
    id:4,
    title:"Races",
    description:"Racing events are one of the favourite games ",
    creator:"Kuljinder Singh",
    type:"",
    imgURL:"https://th.bing.com/th/id/R.275881e63d97053aa1d7b8a3b6329815?rik=eymTBmrD4FumNQ&riu=http%3a%2f%2fwww.abudhabi2.com%2fwp-content%2fuploads%2f2016%2f08%2fmaxresdefault1.jpg&ehk=Ow6wnnSIIafRj1TEfGZeXnPBC2nfxm%2bLeIR96I68wSc%3d&risl=&pid=ImgRaw&r=0"  },

    {
      id:5,
      title:"Throwing Events",
      description:"Throwing events are one of the favourite games ",
      creator:"Kuljinder Singh",
      type:"Athletics",

      imgURL:"https://i1.wp.com/thesportslite.com/wp-content/uploads/2021/08/discus-throw-2.jpg?w=1247&ssl=1"  },
      
    {
      id:6,
      title:"Throwing Events",
      description:"Throwing events are one of the favourite games ",
      creator:"Kuljinder Singh",
      type:"home",

      imgURL:"https://i1.wp.com/thesportslite.com/wp-content/uploads/2021/08/discus-throw-2.jpg?w=1247&ssl=1"  },
      {
        id:7,
        title:"Throwing Events",
        description:"Throwing events are one of the favourite games ",
        creator:"Kuljinder Singh",
        type:"run",
  
        imgURL:"https://i1.wp.com/thesportslite.com/wp-content/uploads/2021/08/discus-throw-2.jpg?w=1247&ssl=1"  }
      
  ];


constructor() { 

}




}
