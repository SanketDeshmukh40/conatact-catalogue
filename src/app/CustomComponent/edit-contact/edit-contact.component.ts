import { Component, OnInit } from '@angular/core';
import { ContactList, Contact } from '../../StaticContent/Contacts';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contacts = ContactList;
  selectedContact: any;
  selectedId: any;
  phoneNo = '';
  firstName = '';
  lastName = '';
  emailAddress = '';
  isSuccess = null;
  alertMsg = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
 /* GETS CONTACT ID FROM URL PARAMS AND BIND CONTACT DETAILS TO THE FORM CONTROLS. */
  bindContactDetail() {
    // tslint:disable-next-line:no-debugger
    this.selectedId = this.route.snapshot.paramMap.get('id');
    if (this.selectedId !== null && this.selectedId !== undefined && this.selectedId !== '') {
      this.selectedContact = ContactList[this.selectedId - 1];
      if (this.selectedContact != null && this.selectedContact !== undefined ) {
        this.firstName = this.selectedContact.firstName;
        this.lastName = this.selectedContact.lastName;
        this.emailAddress = this.selectedContact.email;
        this.phoneNo = this.selectedContact.phone;
      } else {
        this.firstName = '';
        this.lastName = '';
        this.emailAddress = '';
        this.phoneNo = '';
      }
      }
    }
    /* UPDATES CHNAGED VALUES TO SELECTED CONTACT. */
  updateContact() {
    const context = this;
        if (this.selectedId != null && this.selectedId !== undefined && this.selectedId !== '') {
    if (this.selectedContact != null && this.selectedId !== undefined && this.selectedId !== '' ) {
      this.selectedContact.firstName = this.firstName;
      this.selectedContact.lastName = this.lastName;
      this.selectedContact.email = this.emailAddress;
      this.selectedContact.phone = this.phoneNo;
      ContactList[this.selectedId - 1] = this.selectedContact;
      this.alertMsg = 'Contact updated successfully.';
      this.isSuccess = true;
    } else {
      this.alertMsg = 'Unable to update contact.Please try again.';
      this.isSuccess = false;
    }
    } else {
      this.alertMsg = 'Unable to update contact.Please try again.';
      this.isSuccess = false;
    }
    setTimeout(function() { context.clearForm(); }, 1000);
  }
  /* CLEARS AND RESET FORMS TO CHANGE. */
  clearForm() {
    this.isSuccess = null;
    this.alertMsg = '';
    this.phoneNo = '';
    this.firstName = '';
    this.lastName = '';
    this.emailAddress = '';
  }
  /*CALL BIND METHOD ONES VIEW GET LOADED COMPLETELY.*/
  ngOnInit() {
    this.bindContactDetail();
  }

}
