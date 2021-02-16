import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.scss']
})
export class RandomQuoteComponent implements OnInit {

  quote: Object;
  loaded: Boolean = false;
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this.getRandQuote()  
  }
  getRandQuote(){
    this._http.fetchRandomQuote().subscribe(data =>{
      if(data){
        this.quote = data["quotes"][0]
      }
      this.loaded = true;
      console.log(this.quote);

    })
  }

}
