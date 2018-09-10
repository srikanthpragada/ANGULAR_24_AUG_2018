import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'st-login',
  templateUrl: 'reactive-login.component.html'
})
export class ReactiveLoginComponent {
    username : FormControl;
    password : FormControl;
    loginForm : FormGroup;
    
    // FormControl validator 
    mustHaveStar(control : FormControl) 
    {
       // console.log("Called mustHaveStar with " + control.value);
       // if no data is present then valid 
       if(control.value == "")
          return null;

       // data is present but no * is present then error    
       if (control.value.indexOf("*") >= 0)
         return null;  // valid so return null 
       else
         return { mustHaveStar : true, currentValue : control.value }; // invalid so return an object 
    }
    // FormGroup validator to ensure password is not same as username 
    matchUsernamePassword(g : FormGroup) {
      if (g.get("username").invalid || g.get("password").invalid)
           return null;

      if (g.get('username').value != g.get('password').value)
         return null;
       else
         return  { match : true };
    }

    ngOnInit() { 
       this.username = new FormControl("", 
                    [Validators.required //    Validators.pattern("[a-zA-Z]+")
                    ]) ;
       this.password = new FormControl("",
                    [Validators.required,
                     this.mustHaveStar]);

       this.loginForm = new FormGroup(
         { 
            username : this.username,
            password : this.password
         },
         this.matchUsernamePassword
       );
    }

   login() {
     if ( this.loginForm.valid) {
            // process 
            console.log("Username : " + this.username.value);
            console.log("Password : " + this.password.value);
     }

     console.log( this.username);
     console.log( this.password);
     console.log( this.loginForm);
   }
   

}
