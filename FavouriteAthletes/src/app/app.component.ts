import { Component } from '@angular/core';
import { FavouriteAthletService } from './services/favourite-athlet.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FavouriteAthletes';

  contentCard: any;
  errorMessage: any;
  id: any;
 

  constructor(private contentService:  FavouriteAthletService ,
    private messageService: MessageService) { }



  onRetrieveContentCard(): void {
    // Reset the error message
    this.errorMessage = '';

    // Attempt to parse the ID as a number
    const idNumber = parseInt(this.id);

    // Check if the parsed ID is a number and within the bounds of the content array
    if (isNaN(idNumber) || idNumber < 1) {
      this.errorMessage = 'Invalid ID number entered';
      this.messageService.addMessage(this.errorMessage);
      return;
    }
    debugger
    this.contentService.getContent().subscribe(content => {
      if (idNumber > content.length) {
        this.errorMessage = 'Invalid ID number entered';
        this.messageService.addMessage(this.errorMessage);
       
      }
      else{
        this.contentService.getContentById(idNumber).subscribe(
          (contentCard: any) => {
            this.contentCard = contentCard;
            this.messageService.addMessage(`Content Card at ID ${idNumber} retrieved`);
          },
          (error: any) => {
            this.errorMessage = 'Error retrieving content card';
            this.messageService.addMessage(this.errorMessage);
          }
        );
      }
    });

    // Use the content service to retrieve the content card with the given ID
    
  }


}
