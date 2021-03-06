import { Injectable,EventEmitter } from '@angular/core';

import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documentSelectedEvent = new EventEmitter<Document>();

  documents: Document[]=[];

 

  constructor() { 

    this.documents = MOCKDOCUMENTS;
  }

getDocuments(): Document[]{
  return this.documents.slice();
}

getDocument(id:string): Document{
  for(let document of this.documents){
    if (document.id = id){
      return document;
    }
    else() =>{
      return null;
    }
  }
  return null;
}


}
