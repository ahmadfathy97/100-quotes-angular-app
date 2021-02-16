import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotes: Object;
  loaded: Boolean = false;
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.fetchQuotes().subscribe(data =>{
      if(data){
        this.quotes = data["quotes"].slice(0, 100);
      }
      this.loaded = true;
    })
  }

}
