import { Router } from '@angular/router';
import { SportService } from './../services/sport.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  contentData: any;


  ngOnInit(): void {
      console.log('lazy load children init');

      this.getContentByID();
  }


  constructor(private SportService : SportService , private route : Router){}


  getContentByID(){
   let id = this.SportService.contentID ;
    this.SportService.getContentById(id).subscribe(
      (res:any)=>{
            console.log(res , 'hy');

            this.contentData = res ;
      } );
  }

  movetoList(){
    this.route.navigate(['list']);
  }

}
