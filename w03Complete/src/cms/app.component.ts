import { Component, Input } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'w02Contacts';
  selectedFeature:string = "documents"

  switchView(selectedFeature:string){
    this.selectedFeature = selectedFeature;
  }

  @Input() messages: Message[] = [
    new Message(1,'Testing Message','Hello the message is working','J. Doe'),
    new Message(2,'This is another test','Hello the message is working','J. Doe'),
    new Message(3,'One more','Hello the message is working','J. Doe'),
  ]

}
