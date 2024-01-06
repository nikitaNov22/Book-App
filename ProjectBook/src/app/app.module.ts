import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { InfoBookComponent } from './components/info-book/info-book.component';
import { SummaryBookComponent } from './components/summary-book/summary-book.component';

const appRoutes: Routes = [
  {path: '', component:BookComponent},
  {path: 'info-book', component:InfoBookComponent},
  {path: 'summary', component:SummaryBookComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    InfoBookComponent,
    SummaryBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
