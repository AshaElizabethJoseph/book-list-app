import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
   
  
bookTitle:string = 'My Book Title';
book:Book ={  id:1,  title:'My Book',  author:'Me'};
books: Book[] = [];

constructor(private bookService: BookService) {}

ngOnInit(){ // LifeCycle Hook
this.getBooks();
}

/**books: Book[] = [
  {  id: 1,    title: 'Goodnight Moon',    author: 'Margaret Wise Brown'},
  {  id:2,  title:'Winnie the Pooh',  author: 'A.A. Milne'},
  {  id: 3,  title:  'Where the Wild Things Are',  author: 'Maurice Sendak'}
];*/

getBooks():void{
  this.bookService.getBooks().subscribe(booksFromApi => this.books = booksFromApi);
}

}
