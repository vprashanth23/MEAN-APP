import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactDetail} from '../contactDetail/contactDetail.component';
import {ContactService} from "../contact.service";


@Component({
    selector:'contact-list',
    template:`


    <div id="contact-list" class="container" >
      <div class="jumbotron">
        <!--<h2 class="display-3 text-center">Contact Managment System</h2>-->
        <p class="lead text-center">This is a simple contact system app</p>
        <div class="row well">
        <div class="col-md-4">FirstName <input #fn/></div>
        <div class="col-md-4">LastName <input #ln/></div>
        <div class="col-md-4">PhoneNo <input #pn/></div>
        </div>
        <div class="row">
        <p class="lead text-center">
            <a class="btn btn-primary btn-lg" href="#" role="button" (click)=addContact(fn.value,ln.value,pn.value)>Add Contact</a>
        </p>
        </div>
        <hr class="m-y-2">
        <ul >
           <div *ngIf="contacts">
            <li *ngFor="let con of contacts" >
              <contact-detail *ngIf="con" [contactDetail]="con" (onDelete)=onDelete($event) (onSave)=update($event)></contact-detail>
            </li>
            </div>
            <div *ngIf="contacts.length==0">
                <p class="text-center">You don't have any contacts</p>
            </div>
        </ul>
        <hr>
    </div>
</div>


`,
    styleUrls:['/app/components/contactList/contactList.component.css']

})
export class ContactList{

    contacts:Contact[];

    constructor(private contactService:ContactService){
        this.contactService=contactService;
        this.contacts=this.contactService.getContacts();
    }

    addContact(one:string,two:string,three:number){
        var cc =new Contact(this.contacts.length+1,one, two, three);
        this.contactService.addContact(cc);
    }

    update(event:any){
        this.contactService.updateContact(event.id,event.con);
    }

    onDelete(fName:string){
        console.log("Now in parent with "+ fName);
       this.contactService.deleteContact(fName);
    }

}
