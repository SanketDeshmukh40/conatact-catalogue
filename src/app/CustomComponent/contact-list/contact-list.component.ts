import { Component, OnInit } from '@angular/core';
import { ContactList } from '../../StaticContent/Contacts'; /* IMPORTED DUMMY CONTACT LIST TO BIND TO TABLE. */
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  /* INITIALIZATION OF DEFALUT VALUES. */
 contacts = ContactList;
 isSuccess = null;
 alertMsg = '';
 constructor(private router: Router) { }
 /* REDIRECT TO ADD NEW CONTACT WITHOUT USING ROUTE-LINK METHOD. */
  addNewContact() {
    this.router.navigate(['/add']);
  }
  /* CHANGE STATUS OF RECORD TO ACTIVE.*/
  activateContact(idx) {
    const context = this;
    if (idx != null && idx !== undefined && idx !== '') {
      if (ContactList[idx] != null && ContactList[idx] !== undefined) {
        ContactList[idx].status = 'ACT';
        this.isSuccess = true;
        this.alertMsg = 'Contact successfully activated.';
        setTimeout(function() {
          context.isSuccess = null;
          context.alertMsg = '';
        }, 1000);
      } else {
        this.isSuccess = false;
        this.alertMsg = 'Unable to activate contact details. Please try again later.';
      }
    } else {
      this.isSuccess = false;
      this.alertMsg = 'Unable to activate contact details. Please try again later.';
    }
  }
  /* CHANGE STATUS OF RECORD TO IN-ACTIVE.*/
  deactivateContact(idx) {
    const context = this;
    if (idx != null && idx !== undefined && idx !== '') {
      if (ContactList[idx] != null && ContactList[idx] !== undefined) {
        ContactList[idx].status = 'IN_ACT';
        this.isSuccess = true;
        this.alertMsg = 'Contact successfully deactivated.';
        setTimeout(function() {
          context.isSuccess = null;
          context.alertMsg = '';
        }, 1000);
      } else {
        this.isSuccess = false;
        this.alertMsg = 'Unable to activate contact details. Please try again later.';
      }
    } else {
      this.isSuccess = false;
      this.alertMsg = 'Unable to activate contact details. Please try again later.';
    }
  }
  ngOnInit() {
  }

}
