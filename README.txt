######
Candidate name : Sanket S Deshmukh.
Contact No : 9545096655.
Position : UI developer  (Angular + JavaScript)
######

###### IMPORTANT :: RUNNING THE APPLICATION #####
To run we need to check/Install Node.js. We can download it from 
https://nodejs.org/en/download/

Ones Node.js is installed We need to Install Angular CLI by running following command in node.js command prompt window.

npm install -g @angular/cli

this will install angular CLI globally.

Ones this is done next step is to download code from github repository to local folder.

Ones Download is done. Open node.js Command Prompt and open the project directory by running following command.

cd <COMPLETE PATH TO THE PROJECT DIRECTORY i.e. Contact-Catalogue FOLDER>

Ones We navigated to project directory Run following command.


npm install it will install required modules to the project folder.

ng serve --o

This will create build to run the application on localhost:4200 port.

now, Go to browser and open localhost:4200 Which will load our application.

IN CASE OF ANY ISSUES PLEASE USE REFERANCE LINK https://angular.io/guide/quickstart TO KNOW MORE DETAILS.

##################################################


/* Project Information */
Name : Contact Catalogue.
Description : Single page application (SPA) to  manage contact details. Which involves 
				1.Add new Contact 
				2.Edit Existing Contact
				3.Deactivate / Activate  existing Contact.
				4.List Contact Details.

/* Technological Details */				
Framework used : 
				1. Angular 4 - A base framework which was used to create single page application.
					Reference : https://angular.io/
				2. Bootstrap 3 - CSS framework to create responsive web design. 
					Reference : http://getbootstrap.com/docs/3.3/
				3. FontAwesome Icons - Icons library to use various icons.
					Reference : https://fontawesome.com/v4.7.0/icons/

/* Module Details */
As this was client side project we used class array for holding a dummy data which we used throughout the application.
The Class "Contact" consist of following properties.
	1. ID
	2. First Name 
	3. Last Name 
	4. Email Address
	5. Phone Number
	6. Status 
 
Dummy data file : Contact.ts
FilePath : contact-catalogue\src\app\StaticContent\Contacts.ts

1. Contact-list module : 
	A first screen which contains tabular view of the data which is coming from Contact List.
	The table contains following fields
		1. Serial No.
		2. Full Name : first name + last name
		3. Email Address.
		4. Contact Number.
		5. Status : Active or In-Active
		6. Actions : Edit Contact, Activate / Deactivate Contact.

	The screen also have a option to add new contact to list. which  will take us to add new contact screen.

	Page URL : http://localhost:4200/list

	Actions Available on Page : 
		1. activateContact(index) : Used to change status of inactive contact to Active. parameter to this method is index which is index of record in contact List.
		2. deactivateContact(index) : Used to change status of active contact to inactive. parameter to this method is index which is index of record in contact List.	
		3. addNewContact() : Used to open add new contact screen.

2. Add-Contact module : 
	A  form based screen which allows us to add new contact to the Contact List.
	Form fields available.
		1. First Name.
		2. Last Name.
		3. Email Address.
		4. Contact Number.
	Page URL : http://localhost:4200/add

	Actions Available on Page : 
		1. saveContact() : Which helps us to add details given by user to Contact list.
		2. clearForm(index) : Which Clears all the data and reset all the fields.
		
	Validation Used : 
		1. First name & last name : a.Should not be blank. b.Should contains only alphabetic value.
		2. Email Address : a.Should not be blank. b. Should be valid email address.
		3. Phone Number :  a.Should not be blank. b. Should be valid phone number. c. length is fixed to 10.

3. Edit-Contact module : 
	A form based screen which allows us to update existing contact from the Contact List. Item id is passed to edit form as a URL parameter. based on that id we will fetch details and bind to the fields.
	Form fields available.
		1. First Name.
		2. Last Name.
		3. Email Address.
		4. Contact Number.
	Page URL : http://localhost:4200/update/:<ID OF THE RECORD>

	Actions Available on Page : 
		1. updateContact() : Which helps us to update details to Contact list.
		2. clearForm(index) : Which Clears all the data and reset all the fields.

	Validation Used : 
		1. First name & last name : a.Should not be blank. b.Should contains only alphabetic value.
		2. Email Address : a.Should not be blank. b. Should be valid email address.
		3. Phone Number :  a.Should not be blank. b. Should be valid phone number. c. length is fixed to 10.

/* Routing Details */
URLs Used :
1.  http://localhost:4200/list : Default /Contact-list screen.
2.  http://localhost:4200/add : Add new contact screen.
1.  http://localhost:4200/update/:<CONTACT_ID> : edit current contact screen.
