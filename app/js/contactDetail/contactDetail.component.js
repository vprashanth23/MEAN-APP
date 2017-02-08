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
var ContactDetail = (function () {
    function ContactDetail() {
        this.onDelete = new core_1.EventEmitter();
        this.onEdit = new core_1.EventEmitter();
        this.onSave = new core_1.EventEmitter();
        this.isEditable = false;
    }
    ContactDetail.prototype.delete = function (fName) {
        console.log("event called with " + fName);
        this.onDelete.emit(fName);
    };
    ContactDetail.prototype.edit = function (bol) {
        this.isEditable = bol;
    };
    ContactDetail.prototype.save = function (bol, id, con) {
        console.log(id);
        console.log(con);
        this.isEditable = bol;
        this.onSave.emit({ id: id, con: con });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', contact_1.Contact)
    ], ContactDetail.prototype, "contactDetail", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ContactDetail.prototype, "onDelete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ContactDetail.prototype, "onEdit", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ContactDetail.prototype, "onSave", void 0);
    ContactDetail = __decorate([
        core_1.Component({
            selector: 'contact-detail',
            template: "\n              <div class=\"well well-sm\">\n              <div class=\"row\">\n                <div *ngIf=\"isEditable\">\n                   <div class=\"col-md-3\" >\n                      <input [(ngModel)]=\"contactDetail.firstName\" placeholder=\"firstName\" />\n                    </div>\n                    <div class=\"col-md-3\" >\n                      <input [(ngModel)]=\"contactDetail.lastName\" placeholder=\"lastName\"/>\n                    </div>\n                   <div class=\"col-md-3\" >\n                      <input [(ngModel)]=\"contactDetail.phoneNo\" placeholder=\"phoneNo\" />\n                    </div>\n                </div>\n                <div *ngIf=\"!isEditable\">\n                    <span class=\"col-md-3\" >{{contactDetail.firstName}}</span>\n                    <span class=\"col-md-3\">{{contactDetail.lastName}}</span>\n                    <span class=\"col-md-3\">{{contactDetail.phoneNo}}</span>\n                </div>\n                <span class=\"col-md-3\">\n                   <span *ngIf=\"!isEditable\">\n                       <button class=\"btn btn-primary\" (click)=edit(true)>Edit</button>\n                   </span>\n                   <span *ngIf=\"isEditable\">\n                       <button class=\"btn btn-primary\" (click)=save(false,contactDetail.id,contactDetail)>save</button>\n                   </span>\n                   <button class=\"btn btn-primary\" (click)=delete([contactDetail.firstName])>Delete</button>\n                </span>\n              </div>\n              </div>\n             ",
            styleUrls: ['app/components/contactDetail/contactDetail.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ContactDetail);
    return ContactDetail;
}());
exports.ContactDetail = ContactDetail;
//# sourceMappingURL=contactDetail.component.js.map