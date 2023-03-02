import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {

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
    
    console.error(error);
    }
    );
    }
    sendContent(): Promise<any> {
      
      debugger
      return new Promise((resolve, reject) => {
         // Check for required fields
      if (!this.newcontentaddon.title) {
        const errorMessage = 'Please fill in all required fields.';
        console.error(errorMessage);
        this.errorMessage = 'Please fill in all required fields.';
        reject(errorMessage);
        return;
      }
        setTimeout(() => {
          const clonedContent = Object.assign({}, this.newcontentaddon);
          // add new content to ContentList using resolved promise
          resolve(clonedContent);
        }, 2000);
      });
    }
}
