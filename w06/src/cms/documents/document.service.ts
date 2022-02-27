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





getMaxId(): number {
  
  let maxId = 0;
  //loop through the array of documents
  for (const document of this.documents) {
    //make current id a number
    const currentId = +document.id;
    
    if (currentId > maxId) {
      //if true current id becomes maxID if false maxId stays the same. 
      maxId = currentId;
    }
  }
 
  return maxId;

}


  //method to add a document when user press add button
  addDocument(newDocument: Document) {
    //if null or undef...
    if (newDocument === null || newDocument === undefined) {
      //exit function
      return;
    }

    //if document exists..
    //increment id number and assign to new document (as string)
    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
    //push unto list
    this.documents.push(newDocument);
    //create copy of list and emit/signal a change passing the copy
    const documentListClone = this.documents.slice();
    this.documentListChanged.next(documentListClone);
  }

  //method to update/replace an existing document
  updateDocument(originalDocument: Document, newDocument: Document) {
    //check if document exists...
    if (originalDocument === null || originalDocument === undefined || newDocument === null || newDocument === undefined) {
      //if not, exit function
      return;
    }

    //find position/index of original document
    const pos = this.documents.indexOf(originalDocument);
    //if the position is less than 0 (meaning it is not in the list)...
    if (pos < 0) {
      //exit
      return;
    }

    //set the id of new document to be tht of the original
    newDocument.id = originalDocument.id;
    //set the document in the list to be the new document
    document[pos] = newDocument;
    //create copy
    const documentListClone = this.documents.slice();
    //emit/signal a change passing the copy
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
