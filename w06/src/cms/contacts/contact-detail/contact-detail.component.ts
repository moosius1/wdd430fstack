import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WindRefService } from 'src/cms/wind-ref.service';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  Contact: Contact;
  nativeWindow:any;
  id: string;

  constructor( private ContactService: ContactService,
               private windowRefService: WindRefService,
               private router: Router,
               private route: ActivatedRoute,
               ) {this.nativeWindow = windowRefService.getNativeWindow() };

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params)=>{
        this.id = params ['id'];
        this.Contact = this.ContactService.getContact(this.id);
      }
    );
    this.nativeWindow = this.windowRefService.getNativeWindow();
  }

  onEditContact(){
    this.router.navigate(['edit'], {relativeTo:this.route});
  }

  onDelete(){
    this.ContactService.deleteContact(this.Contact);
    this.router.navigate(['...']);
  }

}
