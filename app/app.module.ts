import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { BooksComponent } from './http/books.component';
import { WebBooksComponent } from './http/webbooks.component';
import { CountryComponent } from './http/country.component';
import { FormsModule } from '@angular/forms';
import { AddBookComponent } from './http/add-book.component';

@NgModule({
  declarations: [
      AddBookComponent, WebBooksComponent
   ],
  imports: [
    BrowserModule , HttpClientModule , FormsModule
  ],
  providers: [ ],
  bootstrap: [ AddBookComponent, WebBooksComponent ]
})
export class AppModule { }
