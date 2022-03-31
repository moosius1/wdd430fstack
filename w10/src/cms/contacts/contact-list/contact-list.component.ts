import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Subscription } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  term: string;
  
  collapsed=false;
   contacts: Contact[] = [];
  constructor(private ContactService: ContactService) { }


    search(value: string) {
    this.term = value;
  }

  ngOnInit() {

    this.contacts = this.ContactService.getContacts();
    this.subscription = this.ContactService.contactChangedEvent
    .subscribe(
      (contacts: Contact[]) =>{
        this.contacts = contacts;
      }
    )
        
      
    
    
    
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }



}
