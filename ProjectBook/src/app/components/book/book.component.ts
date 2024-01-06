import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{

  book: Book = {
    title: "Nineteen Eighty-Four", 
    author: "George Orwell",
    publication: "1949-06-08",
    description: "''1984'' is a dystopian novel written by George Orwell published in 1949. As a dystopian novel, it illustrates the unfair and miserable society of Oceania, which is rife with totalitarian practices and constant surveillance."
  }

constructor () {};

ngOnInit(): void {
  console.log('1')
}

}
