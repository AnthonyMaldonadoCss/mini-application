import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public ngOnInit(): void {}
  public page: number = 1;

  newsAngular = ([] as any);

  constructor(public news: NewsService) { 
    this.news.getAngular('https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0').subscribe((res: any) => {
      this.newsAngular = res.hits;
      console.log (res)
    })
  }

}
let newsAngular = ([] as any);
console.log(newsAngular)

const calHour: any = function(millisec: any){
  
  const nuevo: any = new Date(millisec);
  const noNuevo: any = nuevo.getHours();

  return noNuevo
}

console.log(calHour('2021-09-18T23:33:57.000Z')) 
/*calHour('2021-09-18T23:45:07.000Z')
calHour('2021-09-18T22:44:36.000Z')
calHour('2021-09-18T10:39:11.000Z') */