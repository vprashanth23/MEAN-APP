
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Contact} from '../contact';


@Component({
    selector:'contact-detail',
    template:`
              <div class="well well-sm">
              <div class="row">
                <div *ngIf="isEditable">
                   <div class="col-md-3" >
                      <input [(ngModel)]="contactDetail.firstName" placeholder="firstName" />
                    </div>
                    <div class="col-md-3" >
                      <input [(ngModel)]="contactDetail.lastName" placeholder="lastName"/>
                    </div>
                   <div class="col-md-3" >
                      <input [(ngModel)]="contactDetail.phoneNo" placeholder="phoneNo" />
                    </div>
                </div>
                <div *ngIf="!isEditable">
                    <span class="col-md-3" >{{contactDetail.firstName}}</span>
                    <span class="col-md-3">{{contactDetail.lastName}}</span>
                    <span class="col-md-3">{{contactDetail.phoneNo}}</span>
                </div>
                <span class="col-md-3">
                   <span *ngIf="!isEditable">
                       <button class="btn btn-primary" (click)=edit(true)>Edit</button>
                   </span>
                   <span *ngIf="isEditable">
                       <button class="btn btn-primary" (click)=save(false,contactDetail.id,contactDetail)>save</button>
                   </span>
                   <button class="btn btn-primary" (click)=delete([contactDetail.firstName])>Delete</button>
                </span>
              </div>
              </div>
             `,
    styleUrls:['app/components/contactDetail/contactDetail.component.css']

})
export class ContactDetail{
    @Input() contactDetail:Contact;
    @Output() onDelete=new EventEmitter<string>();
    @Output() onEdit=new EventEmitter<string>();
    @Output() onSave=new EventEmitter();

    isEditable:boolean=false;

    delete(fName:string){
        console.log("event called with " +fName);
       this.onDelete.emit(fName);
    }

    edit(bol:boolean){
        this.isEditable=bol;
    }

    save(bol:boolean,id:number,con:Contact){
        console.log(id);
        console.log(con);
        this.isEditable=bol;
        this.onSave.emit({id,con});
    }

}