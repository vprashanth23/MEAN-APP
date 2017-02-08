import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
//import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {NavComponent} from "./navComp/nav.component";
import {ContactDetail} from "./contactDetail/contactDetail.component";
import {ContactList} from "./contactList/contactList.component";
import {ContactService} from "./contact.service";
import {FormsModule} from "@angular/forms";


@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[AppComponent,NavComponent,ContactDetail,ContactList],
    providers:[ContactService],
    bootstrap:[AppComponent]

})
export class AppModule{

}