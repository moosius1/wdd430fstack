import { Component, OnInit, Output, Input } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input() messages: Message[] = [
    new Message(1,'About Saturday','I want you to know I am almost done','J. Doe'),
    new Message(2,'Have you seen the new episode of Boba Fett?','*SPOILERS-------------','J. Doe'),
    new Message(3,'One more','Hello the message is working','J. Doe'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(messages:Message) {
    this.messages.push(messages);
  }

}
