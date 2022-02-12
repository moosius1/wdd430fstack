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



}
