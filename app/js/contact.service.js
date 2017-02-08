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
var core_1 = require("@angular/core");
var contact_1 = require("./contact");
var ContactService = (function () {
    function ContactService() {
        this.contacts = [
            new contact_1.Contact(1, "fname1", "lname1", 3047777154),
            new contact_1.Contact(2, "fname2", "lname2", 3047777154)
        ];
    }
    ContactService.prototype.getContacts = function () {
        return this.contacts;
    };
    ContactService.prototype.addContact = function (contact) {
        this.contacts.push(contact);
    };
    ContactService.prototype.deleteContact = function (fName) {
        this.contacts.forEach(function (item, index, array) {
            if (item.firstName == fName) {
                array.splice(index, 1);
            }
        });
    };
    ContactService.prototype.updateContact = function (idd, newcon) {
        console.log("call with " + idd);
        this.contacts.forEach(function (item, index, array) {
            if (item.id + 1 == idd) {
                array[index] = newcon;
            }
        });
        console.log(this.contacts);
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map