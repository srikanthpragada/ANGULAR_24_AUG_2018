import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstComponent } from './icc/first.component';
import { SecondComponent } from './icc/second.component';
import { ThirdComponent } from './icc/third.component';
import { FourthComponent } from './icc/fourth.component';
import { BracketsPipe } from './pipes/brackets.pipe';

@NgModule({
  declarations: [
       FirstComponent, SecondComponent, ThirdComponent, FourthComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FirstComponent, SecondComponent, ThirdComponent]
})
export class AppModule { }
