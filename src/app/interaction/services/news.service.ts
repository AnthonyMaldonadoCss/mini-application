import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient){}

  API_URL_ANGULAR =  'https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0';
  API_URL_REACT = 'https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0'
  API_URL_VUE = 'https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0';

  getAngular(url: string){
    return this.http.get(url)
  }

}
