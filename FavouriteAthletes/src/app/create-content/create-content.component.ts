<<<<<<< HEAD
import { Component, EventEmitter, Output } from '@angular/core';
=======
import { Component, EventEmitter, Output } from "@angular/core";
>>>>>>> e3fc8b2bf32bb9ddbd01769c7651a536fbcc18bd

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
<<<<<<< HEAD
  @Output() OnContentAdded = new EventEmitter<any>();
  newContent: any = {};
  errorMessage: string="";
  SendContent() {
    debugger
    // send new content item up to ContentList using promise pattern
    this.sendContentUp().then(
    (result) => {
    // success function
    // console.log(Addition is successful for ${result.title});
    this.newContent = {}; // clear input fields
    this.OnContentAdded.emit(result); // emit event with new content
    },
    (error) => {
    // error function
=======

  @Output() contentAddon= new EventEmitter<any>();
  newcontentaddon: any = {};
  errorMessage: string="";
  onSubmit() {
    debugger
   
    this.sendContent().then(
    (result) => {
  
    this.newcontentaddon = {}; 
    this.contentAddon.emit(result); 
    },
    (error) => {
    
>>>>>>> e3fc8b2bf32bb9ddbd01769c7651a536fbcc18bd
    console.error(error);
    }
    );
    }
<<<<<<< HEAD
    sendContentUp(): Promise<any> {
      // simulate API call
      debugger
      return new Promise((resolve, reject) => {
         // Check for required fields
      if (!this.newContent.title ||!this.newContent.id || !this.newContent.description || !this.newContent.creator || !this.newContent.type    ) {
        const errorMessage = 'Please fill all fields';
        console.error(errorMessage);
        this.errorMessage = 'Please fill all fields';
=======
    sendContent(): Promise<any> {
      
      debugger
      return new Promise((resolve, reject) => {
         // Check for required fields
      if (!this.newcontentaddon.title) {
        const errorMessage = 'Please fill in all required fields.';
        console.error(errorMessage);
        this.errorMessage = 'Please fill in all required fields.';
>>>>>>> e3fc8b2bf32bb9ddbd01769c7651a536fbcc18bd
        reject(errorMessage);
        return;
      }
        setTimeout(() => {
<<<<<<< HEAD
          const clonedContent = Object.assign({}, this.newContent);
=======
          const clonedContent = Object.assign({}, this.newcontentaddon);
>>>>>>> e3fc8b2bf32bb9ddbd01769c7651a536fbcc18bd
          // add new content to ContentList using resolved promise
          resolve(clonedContent);
        }, 2000);
      });
    }
}
