// import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

// import { Document } from '../document.model';
// import { DocumentService } from '../document.service';

// @Component({
//   selector: 'app-document-list',
//   templateUrl: './document-list.component.html',
//   styleUrls: ['./document-list.component.css']
// })
// export class DocumentListComponent implements OnInit {
 

//   documents: Document[] = [];

//   constructor(private DocumentService: DocumentService) { }

//   ngOnInit() {
//     this.documents = this.DocumentService.getDocuments();

//     this.DocumentService.documentChangedEvent
//       .subscribe(
//         (documents: Document) =>{
//           documents = documents;
//         }
//       )
//   }
  


// }


import { Component, OnInit, OnDestroy, } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
 
  private subscription: Subscription;

  documents: Document[] = [];

  constructor(private DocumentService: DocumentService) { }

  ngOnInit() {

    this.documents = this.DocumentService.getDocuments();
    this.subscription = this.DocumentService.documentListChanged
    .subscribe(
      (documents: Document[]) =>{
        this.documents = documents;
      }
    )
        
      
    
    
    
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  
  

  // ngOnInit(): void {
  //   this.route.params
  //   .subscribe(
  //     (params: Params)=>{
  //       this.id = params ['id'];
  //       this.documents = this.DocumentService.getDocument(this.id);
  //     }
  //   );
  //  this.nativeWindow= this.windowRefService.getNativeWindow();
  //  }

}