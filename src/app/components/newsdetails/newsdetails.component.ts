import { Component, OnInit } from '@angular/core';
import { NewscardService } from '../newscard/newscard.service';
import { News } from '../newscard/news.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.css']
})
export class NewsdetailsComponent implements OnInit {

  newscard: News ={
    title: '',
    body: ''
  } 

  constructor(private newscardService: NewscardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    let id_news:string = id!;

      this.newscardService.showNewsById(id_news).subscribe((newscard) => {
        this.newscard = newscard;

    });
  }

}
