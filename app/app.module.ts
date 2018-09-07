import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CourseListComponent } from './icc/courselist.component';
import { CourseDetailsComponent } from './icc/coursedetails.component';
import { ConvertComponent } from './service/convert.component';
import { CounterService } from './service/counter.service';
import { IncrementComponent } from './service/increment.component';
import { DecrementComponent } from './service/decrement.component';

@NgModule({
  declarations: [
       ConvertComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [ ],
  bootstrap: [ConvertComponent]
})
export class AppModule { }
