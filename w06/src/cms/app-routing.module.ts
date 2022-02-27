import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ContactDetailComponent } from "./contacts/contact-detail/contact-detail.component";
import { ContactEditComponent } from "./contacts/contact-edit/contact-edit.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { DocumentDetailComponent } from "./documents/document-detail/document-detail.component";
import { DocumentEditComponent } from "./documents/document-edit/document-edit.component";
import { DocumentsStartComponentComponent } from "./documents/documents-start-component/documents-start-component.component";
import { DocumentsComponent } from "./documents/documents.component";
import { MessageListComponent } from "./messages/message-list/message-list.component";

const appRoutes: Routes = [
    {path:'', redirectTo: '/documents', pathMatch: 'full'},
    {path:'documents', component: DocumentsComponent, children:[
        {path:'', component: DocumentsStartComponentComponent},
        {path:'new', component: DocumentEditComponent},
        {path:':id/edit', component: DocumentEditComponent},
        {path:':id', component: DocumentDetailComponent},
        
    ]},
    {path:'messages', component: MessageListComponent},
    {path:'contacts', component: ContactsComponent, children:[
        
        {path:'new', component: ContactEditComponent},
        {path:':id/edit', component: ContactEditComponent},
        {path:':id', component: ContactDetailComponent},
        
    ]},


]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

export class AppRoutingModule {

}