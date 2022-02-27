import { Injectable,EventEmitter, } from '@angular/core';
import {Subject} from 'rxjs';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  
 documentListChanged = new Subject<Document[]>();
 documentSelectedEvent = new Subject<Document[]>();

  documents: Document[];

 

  constructor() { 

    this.documents = MOCKDOCUMENTS;
  }

getDocuments(): Document[]{
  return this.documents.slice();
}

getDocument(id:string): Document{
  for(let document of this.documents){
    if (document.id === id){
      return document;
    }
    
  }
  return null;
}


deleteDocument(documents: Document) {
 
  if (document === null || document === undefined) {
    return;
  }
  
  const pos = this.documents.indexOf(documents);

  if (pos < 0) {
    return;
  }
  
  this.documents.splice(pos, 1);
  this.documentListChanged.next(this.documents.slice());
  
  



}}
