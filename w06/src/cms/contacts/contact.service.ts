import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactSelectedEvent = new Subject<Contact[]>();
  contactChangedEvent = new Subject<Contact[]>();

  contacts: Contact[]=[];

  constructor() { 
    this.contacts = MOCKCONTACTS;
  }



getContacts(): Contact[] {
  return this.contacts.slice();
}

getContact(id:string): Contact {
  for(let contact of this.contacts){
    if (contact.id=== id){
      return contact;
    }
   
  }
  return null;
}


deleteContact(contacts: Contact) {

  if (Contact === null || Contact === undefined) {
    return;
  }

  const pos = this.contacts.indexOf(contacts);

  
  if (pos < 0) {
    return;
  }
 
  this.contacts.splice(pos, 1);
  
  this.contactChangedEvent.next(this.contacts.slice());
}

}
