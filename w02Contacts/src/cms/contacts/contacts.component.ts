import { Component, OnInit,Input,Output } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  selectedContent:Contact;
  

  constructor() { }

  ngOnInit(): void {
  }

}
