import { Component } from '@angular/core';
import { WebBook } from './WebBook';
import { HttpClient} from '@angular/common/http'
 
@Component({
    selector : 'st-add-book',
    templateUrl: 'add-book.component.html'
})
export class AddBookComponent {
    book : WebBook;
    done : boolean = false;
    added : boolean = false; 
    
    constructor(private http : HttpClient) {
      this.book = new WebBook();
    }

    addBook()  {
          // call restful service  
          this.done = false;
          this.added = false; 
          this.http.post("http://test.srikanthpragada.com/api/books",
                         this.book)
                   .subscribe(
                       result =>
                           { this.added = true; this.done = true; },
                       error =>
                           { this.done = true;}
                      );

    }


}