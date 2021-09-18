import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public ngOnInit(): void {}

  newsAngular = ([] as any);;

  constructor(public news: NewsService) { 
    this.news.getAngular('https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0').subscribe((res: any) => {
      this.newsAngular = res.hits;
      console.log (res)
    })
  }
  /*
  https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0
  */

}
