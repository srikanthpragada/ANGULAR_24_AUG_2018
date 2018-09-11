import { Component, OnInit } from '@angular/core';
import { Book } from './Book';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'st-books',
    templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
    books: Book[];
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
         this.http.get<Book[]>("assets/books.json")
               .subscribe( 
                   resp => this.books = resp
                   ,
                   err => console.log("Error:" + err)
                   ,
                   () =>  console.log("Completed!")
               );
    }

}