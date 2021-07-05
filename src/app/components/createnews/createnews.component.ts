import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header/header.service';
import { News } from '../newscard/news.model';
import { NewscardService } from '../newscard/newscard.service';

@Component({
  selector: 'app-createnews',
  templateUrl: './createnews.component.html',
  styleUrls: ['./createnews.component.css']
})
export class CreatenewsComponent implements OnInit {

  news: News ={
    title: '',
    body: ''
  }

  constructor(
    private newscardService: NewscardService, 
    private router: Router,
    private headerService: HeaderService) {
    headerService.headerData ={
      titlePage: 'Nova notícia',
      subtitle: '',
      routeUrl: '/news/create'
    }
  }
     
  ngOnInit(): void {
  }

  createNews(): void {
    this.newscardService.createNews(this.news).subscribe(() => {
      this.newscardService.showMenssage('Notícia criada!')
      this.router.navigate(['/news/create'])
    })
  }

}
