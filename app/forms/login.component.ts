import { Component } from '@angular/core';

@Component({
  selector: 'st-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
   username : string;
   password : string; 
   autologin : boolean = true;

   login() {
     console.log("Username : " + this.username);
     console.log("Password : " + this.password);
     console.log("Autologin : " + this.autologin);
   }
   

}
