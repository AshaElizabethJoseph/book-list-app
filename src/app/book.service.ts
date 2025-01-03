import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private apiUrl:string = "https://localhost:7219";

  constructor(private http : HttpClient) {

   }
   getBooks():Observable<Book[]>{
     return this.http.get<Book[]>(this.apiUrl);
   }
}
