import { Injectable } from '@angular/core';
import { WebBook } from '../http/WebBook';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable()
export class BooksService {
     URL : string = "http://test.srikanthpragada.com/api/books"

     constructor(private http : HttpClient) {
     }

     getAllBooks() : Observable<WebBook[]>
     {
          return this.http.get<WebBook[]>(this.URL)
     }

     deleteBook(id : number) : Observable<any>  
     {
          return this.http.delete(this.URL + "/" + id);
     }

     addBook(book : WebBook) : Observable<any>  
     {
          return this.http.post(this.URL, book);
     }
}