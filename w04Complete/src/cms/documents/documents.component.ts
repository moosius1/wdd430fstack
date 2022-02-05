import { Component, OnInit, Input } from '@angular/core';
import { Document } from './document.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  @Input() documents: Document;
  selectedDocument: Document;

 

  constructor() { }

  ngOnInit(): void {
  }

}
