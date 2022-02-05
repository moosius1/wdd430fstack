import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document('1','Test Document','A dummy document', 'https://www.google.com/','',),
    new Document('2','w02','Week 2 Notes', 'https://www.google.com/','',),
    new Document('3','w03','Week 3 Notes', 'https://www.google.com/','',),
    new Document('4','w04','Week 4 Notes', 'https://www.google.com/','',),
    
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  onSelectedDocument(document:Document){
    this.selectedDocumentEvent.emit(document);
  }

}
