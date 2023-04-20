
import { Component, EventEmitter, Output } from "@angular/core";


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})

export class CreateContentComponent {


  id:any ;
  title:any ;
  description:any ;
  creator:any ;
  type:any ;



  @Output() OnContentAdded = new EventEmitter<any>();
  newContent: any = {};
  errorMessage: string="";
 
  @Output()   contentAddon= new EventEmitter<any>();




  
  





  // SendContent() {
   
  //   // send new content item up to ContentList using promise pattern
  //   this.SendContent().then(
  //   (result: any) => {
  //   // success function
  //   // console.log(Addition is successful for ${result.title});
  //   this.newContent = {}; // clear input fields
  //   this.OnContentAdded.emit(result); // emit event with new content
  //   },
  //   () => {
  //   // error function


    

    newcontentaddon: any = {};
   

  onsubmit() {
 
   
    this.SendContent().then(
    (result: any) => {
  
    this.newContent = {}; 
    this.contentAddon.emit(result); 
    },
    (error: any) => {
    
    console.error(error);
    } )
   
  }

    sendContentUp(): Promise<any> {
  
      return new Promise((_resolve, reject) => {
         // Check for required fields
      if (!this.newContent.title ||!this.newContent.id || !this.newContent.description || !this.newContent.creator || !this.newContent.type    ) {
        const errorMessage = 'Please fill all fields';
        console.error(errorMessage);
        this.errorMessage = 'Please fill all fields';
      }}
      );
    }

    SendContent(): Promise<any> {
      
     
      return new Promise((resolve, reject) => {
       
      if (!this.newContent.title) {
        const errorMessage = 'Please fill in all required fields.';
        console.error(errorMessage);
        this.errorMessage = 'Please fill in all required fields.';

        reject(errorMessage);
        return;
      }
        setTimeout(() => {
          let clonedContent = Object.assign({}, this.newContent);

             clonedContent = Object.assign({}, this.newContent);
             console.log(clonedContent);
         
          resolve(clonedContent);
        }, 2000);
      });
    }

    

     


  }