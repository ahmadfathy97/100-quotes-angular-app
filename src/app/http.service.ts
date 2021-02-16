import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }
  fetchQuotes(){
    return this.http.get('https://goquotes-api.herokuapp.com/api/v1/all?type=tag&val=best')
  }

  fetchRandomQuote(){
    return this.http.get('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
  }

}
