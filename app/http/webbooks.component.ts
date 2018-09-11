import { Component, OnInit } from '@angular/core';
import { WebBook } from './WebBook';
// import { BooksService } from '../service/books.service'
import { HttpClient } from '@angular/common/http'

// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';

@Component({
    selector: 'st-books',
    templateUrl: './webbooks.component.html'
})
export class WebBooksComponent implements OnInit {
    books: WebBook[];
    URL = "http://test.srikanthpragada.com/api/books"
    constructor(private http : HttpClient) {
    }

    ngOnInit() {
        this.getAllBooks()
    }

    getAllBooks() {
        this.http.get<WebBook[]>(this.URL)
              .subscribe( result => this.books = result,null, () => console.log("Done!"));
        console.log("Completed!")      
    }

    getAllBooksByService() {
       // this.booksService.getAllBooks()
            // .map(this.costlyBooks)
         //   .subscribe(result => this.books = result);
    }

    deleteBook(id: number, idx : number) {
        if (!confirm("Do you want to delete book?"))
            return;

        this.http.delete(this.URL + "/" + id)
                 .subscribe( x => { 
                                    alert("Deleted!");  
                                    // this.getAllBooks();
                                    this.books.splice(idx,1)
                                  },
                             err => alert("Sorry! Couldn't Delete Book"))
        
        // this.booksService.deleteBook(id)
        //     .subscribe(resp => this.getAllBooks(),
        //         error => alert("Sorry! Book could not be deleted!")
        //     );
    }
    costlyBooks(books: WebBook[]): WebBook[] {
        var selectedBooks: WebBook[] = [];

        for (var book of books)
            if (book.Price > 500)
                selectedBooks.push(book)

        return selectedBooks;
    }
}
