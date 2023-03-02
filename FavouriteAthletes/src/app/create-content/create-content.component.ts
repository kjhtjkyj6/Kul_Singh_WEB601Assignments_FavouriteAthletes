import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  @Output() contentAddon = new EventEmitter<any>();
  newcontentaddon: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.newcontentaddon = this.fb.group({
       id:  ['', Validators.required],
      title: '',
    
      type: '',
     
     
    });
  }

  onSubmit() {
    if (this.newcontentaddon.valid) {
      const newcontentaddon = this.newcontentaddon.value;
      this.sendContent(newcontentaddon).then(
        (result) => {
          this.newcontentaddon.reset();
          this.contentAddon.emit(result);
        },
        (error) => {
          console.error(error);
          this.errorMessage = 'Failed to add content.';
        }
      );
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }

  sendContent(content: any): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const clonedContent = Object.assign({}, content);
        resolve(clonedContent);
      }, 2000);
    });
  }
}

