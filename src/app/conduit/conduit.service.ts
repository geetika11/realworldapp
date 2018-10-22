import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConduitService {
  url: string='https://conduit.productionready.io/api/';
user:Object;

  constructor(private http: HttpClient) { }
  getArticles(){

   return this.http.get(`${this.url}articles`);
  }
  makeFeedsRequestonPages(offset){
    return this.http.get(`${this.url}articles?limit=10&offset=${offset}`)
   }
   getTagDetails(e){
    return this.http.get(`${this.url}articles?tag=${e}`)
   }
}