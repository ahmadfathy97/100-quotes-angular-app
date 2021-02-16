import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuotesComponent } from './quotes/quotes.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';



const routes: Routes = [
  {path: '', component: RandomQuoteComponent},
  {path: 'quotes', component: QuotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
