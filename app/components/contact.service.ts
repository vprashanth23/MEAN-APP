import {Injectable, OnInit} from "@angular/core";
import {Contact} from "./contact";


@Injectable()
export class ContactService {

    contacts:Contact[];

    constructor(){
        this.contacts=[
            new Contact(1,"fname1","lname1",3047777154),
            new Contact(2,"fname2","lname2",3047777154)
        ];
    }

    getContacts():any{
         return  this.contacts;
    }

    addContact(contact:Contact):void{
        this.contacts.push(contact);
    }

    deleteContact(fName:string):void{

         this.contacts.forEach(function (item,index,array) {
            if(item.firstName==fName){
                array.splice(index,1);
            }
        });
    }

    updateContact(idd:number,newcon:Contact){
        console.log("call with "+idd);
        this.contacts.forEach(function (item,index,array) {
            if(item.id+1==idd){
                array[index]=newcon;
            }
        });
        console.log(this.contacts);
    }
}