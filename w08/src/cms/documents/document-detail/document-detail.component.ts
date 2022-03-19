import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WindRefService } from 'src/cms/wind-ref.service';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {

  documents: Document;
  nativeWindow: any;
  id: string;

  constructor(private DocumentService: DocumentService,
              private windowRefService: WindRefService ,
              private router: Router,
              private route: ActivatedRoute,

              
              ) {this.nativeWindow = windowRefService.getNativeWindow() };

  ngOnInit(): void {
   this.route.params
   .subscribe(
     (params: Params)=>{
       this.id = params ['id'];
       this.documents = this.DocumentService.getDocument(this.id);
     }
   );
  this.nativeWindow= this.windowRefService.getNativeWindow();
  }

  onView() {
    if (this.documents.url) {
      this.nativeWindow.open(this.documents.url);
    }
  }

  onEditDocument(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete(){
    this.DocumentService.deleteDocument(this.documents);
    this.router.navigate([''], {relativeTo: this.route});
  }
  

}
