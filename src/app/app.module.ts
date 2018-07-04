import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddContactComponent } from './CustomComponent/add-contact/add-contact.component';
import { ContactListComponent } from './CustomComponent/contact-list/contact-list.component';
import { EditContactComponent } from './CustomComponent/edit-contact/edit-contact.component';
import { CustomFormsModule } from 'ng4-validators';

/* ROUTNING DETAILS WHICH WILL SPECIFY THE PATHS TO ACCESS DIFFERENT COMPONENT. */
const appRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'add', component: AddContactComponent },
  { path: 'list',      component: ContactListComponent },
  { path: 'update/:id',      component: EditContactComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactListComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
