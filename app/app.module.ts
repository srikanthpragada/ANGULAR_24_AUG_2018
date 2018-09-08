import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './forms/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
       LoginComponent
   ],
  imports: [
    BrowserModule , FormsModule
  ],
  providers: [ ],
  bootstrap: [LoginComponent]
})
export class AppModule { }
