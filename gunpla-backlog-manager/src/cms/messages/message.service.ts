import { Injectable, EventEmitter } from '@angular/core';


import { Contact } from '../contacts/contact.model';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageChangedEvent = new Subject<Message[]>();

  messages: Message[]=[];
  maxMessageId: number;

  constructor(private http: HttpClient) { 

    // this.messages= MOCKMESSAGES;

  }

  getMessages(): Message[] {
    this.http.get('http://localhost:3000/messages')
    .subscribe(
      (messages: Message[]) => {
        this.messages = messages
        this.maxMessageId = this.getMaxId();
        this.messages.sort();
        this.messageChangedEvent.next(this.messages.slice());
      }, 
      (error: any) => {
        console.log(error.message);
      }
    )
    return this.messages.slice();
  }

storeMessages(){
  const json = JSON.stringify(this.messages);
  this.http.put(
    'https://wdd430-d8661-default-rtdb.firebaseio.com/messages.json',
    json,
    {
      headers: new HttpHeaders({'Content-Type':'application/json'})

    }
  ).subscribe(() =>{
    this.messageChangedEvent.next(this.messages.slice());
  })
}

getMessage(id:string): Message{
  for(let message of this.messages){
    if(message.id===id){
      return message;
    }
    

  }
  return null;
}

getMaxId(): number {
  
  let maxId = 0;
  for (const message of this.messages) {
    
    const currentId = +message.id;
    //comparison between current id and preset max id (which will only change if current is greater)
    if (currentId > maxId) {
   
      maxId = currentId;
    }
  }
 
  return maxId;

}


addMessage(message: Message) {
  if (!message) {
    return;
  }

  // make sure id of the new Document is empty
  message.id = '';

  const headers = new HttpHeaders({'Content-Type': 'application/json'});

  // add to database
  this.http.post<{ message: string, newMessage: Message }>('http://localhost:3000/messages',
    message, { headers: headers })
    .subscribe(
      (responseData) => {
        console.log(responseData.message);
        // add new document to documents
        this.messages.push(responseData.newMessage);
        this.messages.sort();
        this.messageChangedEvent.next(this.messages.slice());
      }
    );
}

deleteMessage(message: Message) {
  if (!message) {
    return;
  }

  const pos = this.messages.findIndex(d => d.id === message.id);
  if (pos < 0) {
    return;
  }

  // delete from database
  this.http.delete('http://localhost:3000/messages/' + message.id)
    .subscribe(
      (response: Response) => {
        this.messages.splice(pos, 1);
        this.messages.sort();
        this.messageChangedEvent.next(this.messages.slice());
      }
    );
}



}
