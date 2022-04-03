import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
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