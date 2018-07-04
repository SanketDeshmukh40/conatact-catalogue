 /* USED AS A BASED CLASS FOR OUR CONTACT DETAILS */
 export class Contact {
    id: number;
    firstName: string;
    lastName: string;
   email: string;
   phone: string;
   status: string;
}

/* lIST OF DUMMY CONTACT WHICH WILL BE DISPLAYED ON CONTACT LIST SCREEN AT THE FIRST TIME. */
export const ContactList: Contact[] = [
    { id: 1, firstName: 'Sanket', lastName: 'Deshmukh', email: 'sanket@xyz.in', phone: '9545096655', status : 'ACT' },
    { id: 2, firstName: 'Gopi', lastName: 'Deshmukh', email: 'gopi@xyz.in', phone: '9545096655', status : 'IN_ACT' },
    { id: 3, firstName: 'Mahesh', lastName: 'Chavan', email: 'maheshChavan@xyz.in', phone: '9028900973', status : 'ACT' },
    { id: 4, firstName: 'Saurabh', lastName: 'Deshmukh', email: 'saurabh@xyz.in', phone: '9762008944', status : 'ACT' },
    { id: 5, firstName: 'Snehal', lastName: 'Deshmukh', email: 'snehal@xyz.in', phone: '9028279409', status : 'ACT' }
];
