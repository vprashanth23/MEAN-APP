"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var contact_1 = require('../contact');
var contact_service_1 = require("../contact.service");
var ContactList = (function () {
    function ContactList(contactService) {
        this.contactService = contactService;
        this.contactService = contactService;
        this.contacts = this.contactService.getContacts();
    }
    ContactList.prototype.addContact = function (one, two, three) {
        var cc = new contact_1.Contact(this.contacts.length + 1, one, two, three);
        this.contactService.addContact(cc);
    };
    ContactList.prototype.update = function (event) {
        this.contactService.updateContact(event.id, event.con);
    };
    ContactList.prototype.onDelete = function (fName) {
        console.log("Now in parent with " + fName);
        this.contactService.deleteContact(fName);
    };
    ContactList = __decorate([
        core_1.Component({
            selector: 'contact-list',
            template: "\n\n\n    <div id=\"contact-list\" class=\"container\" >\n      <div class=\"jumbotron\">\n        <!--<h2 class=\"display-3 text-center\">Contact Managment System</h2>-->\n        <p class=\"lead text-center\">This is a simple contact system app</p>\n        <div class=\"row well\">\n        <div class=\"col-md-4\">FirstName <input #fn/></div>\n        <div class=\"col-md-4\">LastName <input #ln/></div>\n        <div class=\"col-md-4\">PhoneNo <input #pn/></div>\n        </div>\n        <div class=\"row\">\n        <p class=\"lead text-center\">\n            <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" (click)=addContact(fn.value,ln.value,pn.value)>Add Contact</a>\n        </p>\n        </div>\n        <hr class=\"m-y-2\">\n        <ul >\n           <div *ngIf=\"contacts\">\n            <li *ngFor=\"let con of contacts\" >\n              <contact-detail *ngIf=\"con\" [contactDetail]=\"con\" (onDelete)=onDelete($event) (onSave)=update($event)></contact-detail>\n            </li>\n            </div>\n            <div *ngIf=\"contacts.length==0\">\n                <p class=\"text-center\">You don't have any contacts</p>\n            </div>\n        </ul>\n        <hr>\n    </div>\n</div>\n\n\n",
            styleUrls: ['/app/components/contactList/contactList.component.css']
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactList);
    return ContactList;
}());
exports.ContactList = ContactList;
//# sourceMappingURL=contactList.component.js.map