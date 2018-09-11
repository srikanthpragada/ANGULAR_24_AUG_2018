import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { BooksComponent } from './http/books.component';
import { WebBooksComponent } from './http/webbooks.component';
import { CountryComponent } from './http/country.component';

@NgModule({
  declarations: [
      CountryComponent
   ],
  imports: [
    BrowserModule , HttpClientModule 
  ],
  providers: [ ],
  bootstrap: [ CountryComponent ]
})
export class AppModule { }
