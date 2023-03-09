import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FavouriteAthletService } from '../services/favourite-athlet.service';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentItem:Content[]=[];
  content: Content[] | undefined;
  ngOnInit(): void {
    this.contentService.getContent().subscribe((content: Content[]) => {
      this.content = content;
    });
  }
 
  constructor(private contentService:  FavouriteAthletService )
  {
    
  }
  searchTitle:string | undefined;
  exist=false;
  message:string | undefined
 
  find()
  {
   const Search= this.contentItem.find(search=>search.title.toLowerCase()==this.searchTitle?.toLowerCase());
   this.exist=!!Search;
   this.message=this.exist? `Content with tilte "${this.searchTitle}"  exist`: `Content with tilte "${this.searchTitle}"  does not exist`
  }

}
