import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { KitsComponent } from './kits/kits.component';
import { KitDetailComponent } from './kits/kit-detail/kit-detail.component';
import { KitEditComponent } from './kits/kit-edit/kit-edit.component';
import { KitItemComponent } from './kits/kit-item/kit-item.component';
import { KitListComponent } from './kits/kit-list/kit-list.component';
import { KitsFilterPipe } from './kits/kits-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  
    DropdownDirective,

    KitsComponent,
    KitDetailComponent,
    KitEditComponent,
    KitItemComponent,
    KitListComponent,
    KitsFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
