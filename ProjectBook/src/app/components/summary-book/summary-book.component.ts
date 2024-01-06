import { Component, OnInit } from '@angular/core';
import { SummaryBook } from './summary-book';

@Component({
  selector: 'app-summary-book',
  templateUrl: './summary-book.component.html',
  styleUrls: ['./summary-book.component.scss']
})
export class SummaryBookComponent implements OnInit{

  summaryBook: SummaryBook = {
    text: "A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching Thought Police Big Brother Orwellian These words have entered our vocabulary because of George Orwell s classic dystopian novel 1984 The story of one man s nightmare odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality With a foreword by Thomas Pynchon With a foreword by Thomas Pynchon A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching View our feature on George Orwell s 1984 Thought Police Big Brother Orwellian These words have entered our vocabulary because of George Orwell s classic dystopian novel 1984 The story of one man s nightmare odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality This beautiful paperback edition features deckled edges and french flaps a perfect gift for any occasion"
  }

  constructor () {};

  ngOnInit(): void {
    console.log('3')
  }
  
  }
  
