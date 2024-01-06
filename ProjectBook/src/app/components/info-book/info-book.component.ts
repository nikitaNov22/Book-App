import { Component, OnInit } from '@angular/core';
import { InfoBook } from './info-book';
import { PUBLISHERS } from './mock-info-book';

@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.scss']
})
export class InfoBookComponent implements OnInit{
  infoBook: InfoBook = {
    title: "Nineteen Eighty-Four", 
    author: "George Orwell",
    country: "United Kingdom",
    language: "English",
    genre: "Dystopian, Political fiction, Social science fiction",
    pages: 	328,
    publication: "1949-06-08"
  }

  publishers = PUBLISHERS;

constructor () {};

ngOnInit(): void {
  console.log('2')
  console.log(this.publishers)
}

}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
