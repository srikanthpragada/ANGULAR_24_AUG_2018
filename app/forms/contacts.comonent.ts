import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Contact } from './Contact'

@Component({
    selector: 'st-contacts',
    templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
    contacts: Contact[];
    contact : Contact; 
    index : number;
    editing : boolean = false; 
    constructor() {
        this.contacts = [];
        this.contact = new Contact();
    }

    ngOnInit(): void { }

    addContact() {
        //var c = { name : this.contact.name, email : this.contact.email, mobile : this.contact.mobile}
        var c = new Contact()
        c.name = this.contact.name 
        c.email = this.contact.email 
        c.mobile = this.contact.mobile 
        this.contacts.push(c)
        this.contact.mobile = this.contact.email = this.contact.name = ""

        //console.log(this.contacts)
    }

    deleteContact(idx) {
        this.contacts.splice(idx,1);
    }

    editContact(idx) {
        this.editing = true;
        this.index = idx;
        this.contact.name = this.contacts[idx].name;
        this.contact.email = this.contacts[idx].email;
        this.contact.mobile = this.contacts[idx].mobile;
    }

    updateContact() {
        var idx = this.index
        this.contacts[idx].name = this.contact.name;
        this.contacts[idx].email = this.contact.email 
        this.contacts[idx].mobile  = this.contact.mobile;
        this.editing = false;
    }
}
