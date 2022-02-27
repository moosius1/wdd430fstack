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
  maxDocumentId: number;

 

  constructor() { 

    this.documents = MOCKDOCUMENTS;

    this.maxDocumentId = this.getMaxId();
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




//gets max value of number by comparing document id against the currently looped one. 
getMaxId(): number {
  
  let maxId = 0;
  for (const document of this.documents) {
    
    const currentId = +document.id;
    //comparison between current id and preset max id (which will only change if current is greater)
    if (currentId > maxId) {
   
      maxId = currentId;
    }
  }
 
  return maxId;

}


  
  addDocument(newDocument: Document) {
//checking to see if the document is valid
    if (newDocument === null || newDocument === undefined) {
    
      return;
    }

   //creats new id for document which is one number higher then the last loop
    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
  
    this.documents.push(newDocument);
    //creates copy of the document list with the newly added document added
    const documentListClone = this.documents.slice();
    //emits new list out to other components
    this.documentListChanged.next(documentListClone);
  }


  updateDocument(originalDocument: Document, newDocument: Document) {
   
    if (originalDocument === null || originalDocument === undefined || newDocument === null || newDocument === undefined) {
      //checks to see if document is valid
      return;
    }

   
    const pos = this.documents.indexOf(originalDocument);
   
    if (pos < 0) {
      
      return;
    }

    
    newDocument.id = originalDocument.id;
    
    document[pos] = newDocument;
   
    const documentListClone = this.documents.slice();
   
    this.documentListChanged.next(documentListClone);
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
    
  }

  

}
