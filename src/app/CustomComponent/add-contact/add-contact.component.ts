import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactList, Contact } from '../../StaticContent/Contacts';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

/* Initialization of the values which will associated with [(ngModel)] */
  phoneNo = '';
  firstName = '';
  lastName = '';
  emailAddress = '';
  isSuccess = null;
  alertMsg = '';
  constructor(private router: Router) { }

  /*Save method to save contact details to contact list.*/
  saveContact() {
    const context = this;
    // tslint:disable-next-line:no-debugger
    debugger;
    const nxtID = ContactList.length + 1;
    const currContact = new Contact();
    currContact.id = nxtID;
    currContact.firstName = this.firstName;
    currContact.lastName = this.lastName;
    currContact.email = this.emailAddress;
    currContact.phone  = this.phoneNo;
    currContact.status  = 'ACT';

    if (currContact !== null) {
      ContactList.push(currContact);
      this.isSuccess = true;
      this.alertMsg = 'Record saved successfully.';
    } else {
      this.isSuccess = false;
      this.alertMsg = 'Unable to add record please try again later.';
    }
    setTimeout(function() { context.clearForm(); }, 1000);
  }
  /* Clears and updates forms fields.*/
  clearForm() {
    this.isSuccess = null;
    this.alertMsg = '';
    this.phoneNo = '';
    this.firstName = '';
    this.lastName = '';
    this.emailAddress = '';
  }

  ngOnInit() {
  }

}
