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
import { KitsComponent } from "./kits/kits.component";
import { KitDetailComponent } from "./kits/kit-detail/kit-detail.component";
import { KitEditComponent } from "./kits/kit-edit/kit-edit.component";
import { KitItemComponent } from "./kits/kit-item/kit-item.component";
import { KitListComponent } from "./kits/kit-list/kit-list.component";


const appRoutes: Routes = [
    {path:'', redirectTo: '/kits', pathMatch: 'full'},
  
        
    
    
    {path:'...', redirectTo: '/kits', pathMatch: 'full'},
   
    {path:'kits', component: KitsComponent, children:[

        {path:'new',component: KitEditComponent},
        {path: ':id/edit', component: KitEditComponent},
        {path: ':id', component: KitDetailComponent}
    ]}


]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

export class AppRoutingModule {

}