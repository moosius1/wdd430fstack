// import { Component, OnInit, Input } from '@angular/core';
// import { Document } from './document.model';
// import { DocumentService } from './document.service';

// @Component({
//   selector: 'app-documents',
//   templateUrl: './documents.component.html',
//   styleUrls: ['./documents.component.css'],
//   providers: [DocumentService]
// })
// export class DocumentsComponent implements OnInit {
//   @Input() documents: Document;
//   selectedDocument: Document;

 

//   constructor(private documentService: DocumentService) { }

//   ngOnInit(): void {

//     this.documentService.documentSelectedEvent
//       .subscribe(
//         (document:Document)=>{
//           this.selectedDocument = document;
//         }
//       )
//   }

// }


import { Component, OnInit, Input } from '@angular/core';
import { Document } from './document.model';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers: [DocumentService]
})
export class DocumentsComponent implements OnInit {
  @Input() documents: Document;
  selectedDocument: Document;

 

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {

    this.documentService.documentSelectedEvent
      .subscribe(
        (documents:Document[])=>{
          documents = documents;
        }
      )
  }

}