import {Component} from '@angular/core';
import {NavComponent} from './navComp/nav.component';
import {ContactList} from './contactList/contactList.component';

@Component({
    selector:'my-app',
    template:
        `
         <nav-cmp></nav-cmp>
         <contact-list></contact-list>
        `
})
export class AppComponent{
    title="Hello from Component";
}