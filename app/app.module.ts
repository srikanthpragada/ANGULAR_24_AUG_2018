import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataBindingComponent } from './databinding/databinding.component';

@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DataBindingComponent]
})
export class AppModule { }
