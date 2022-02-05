import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Message } from '../message.model';


@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {

  currentSender:string='Ian Moes';

  @ViewChild('subject') subject: ElementRef;
  @ViewChild('msgText') msgText: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  constructor() { }

  ngOnInit(): void {
  }

  getRandomInt(max){
    return Math.floor(Math.random()*max);
  }

  SendMessage(){
    const msgSub = this.subject.nativeElement.value;
    const msgText = this.msgText.nativeElement.value;
    const msgId = this.getRandomInt(100);
    const sender = this.currentSender;
    const newMsg = new Message(msgId,msgSub,msgText,sender,)
    this.addMessageEvent.emit(newMsg);

  }

  onClear() {
    this.subject.nativeElement.value = "";
    
    this.msgText.nativeElement.value ="";
   
    return

  }


}
