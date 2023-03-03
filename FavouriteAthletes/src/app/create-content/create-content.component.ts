import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
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
    console.error(error);
    }
    );
    }
    sendContentUp(): Promise<any> {
      // simulate API call
      debugger
      return new Promise((resolve, reject) => {
         // Check for required fields
      if (!this.newContent.title ||!this.newContent.id || !this.newContent.description || !this.newContent.creator || !this.newContent.type    ) {
        const errorMessage = 'Please fill all fields';
        console.error(errorMessage);
        this.errorMessage = 'Please fill all fields';
        reject(errorMessage);
        return;
      }
        setTimeout(() => {
          const clonedContent = Object.assign({}, this.newContent);
          // add new content to ContentList using resolved promise
          resolve(clonedContent);
        }, 2000);
      });
    }
}
