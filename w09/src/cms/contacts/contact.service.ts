import { Injectable, } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactSelectedEvent = new Subject<Contact[]>();
  contactChangedEvent = new Subject<Contact[]>();

  contacts: Contact[]=[];
  maxContactID: number;

  constructor(private http:HttpClient) { 
    this.contacts = MOCKCONTACTS;
    this.maxContactID = this.getMaxId();
  }



getContacts(): Contact[] {
  this.http.get<Contact[]>('https://wdd430-d8661-default-rtdb.firebaseio.com/contacts.json')
  .subscribe(
    (contacts: Contact[]) =>{
      this.contacts = contacts
      this.maxContactID = this.getMaxId();
      this.contacts.sort();
      this.contactChangedEvent.next(this.contacts.slice());
    },
    (error: any) =>{
      console.log(error.message);
    }
  )
  return this.contacts.slice();
}

storeContacts(){
  const json = JSON.stringify(this.contacts);
  this.http.put(
    'https://wdd430-d8661-default-rtdb.firebaseio.com/contacts.json',
    json,
    {
      headers: new HttpHeaders({'Content-Type':'application/json'})

    }
  ).subscribe(() =>{
    this.contactChangedEvent.next(this.contacts.slice());
  })
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
  this.storeContacts()
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
  originalContact.name = newContact.name;
  originalContact.email = newContact.email;
  originalContact.phone = newContact.phone;
  originalContact.imageUrl = newContact.imageUrl;
  const contactListClone = this.contacts.slice();
  this.storeContacts()

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
  
  this.storeContacts()
}

}

