import { Injectable, } from '@angular/core';
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
  maxContactID: number;

  constructor() { 
    this.contacts = MOCKCONTACTS;
    this.maxContactID = this.getMaxId();
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

getMaxId(): number {
  let maxId =0;
  for(const contact of this.contacts){
    const currentId = + contact.id;

    if (currentId > maxId) {
      maxId = currentId;
    }
  }
  return maxId;
}

addContact(newContact: Contact) {
  if (newContact === null || newContact === undefined){
    return;
  }

  this.maxContactID++;
  newContact.id = this.maxContactID.toString();
  this.contacts.push(newContact);
  const contactListClone = this.contacts.slice();
  this.contactChangedEvent.next(contactListClone);
}

updateContact(originalContact: Contact, newContact: Contact){
  if (originalContact === null || originalContact === undefined || newContact ===null || newContact===undefined){
    return;
  }
  const pos = this.contacts.indexOf(originalContact);
  if(pos< 0) {
    return;
  }

  newContact.id = originalContact.id;
  document[pos] = newContact;
  const contactListClone = this.contacts.slice();
  this.contactChangedEvent.next(contactListClone);

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

