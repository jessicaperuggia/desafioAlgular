import { Component, OnInit } from '@angular/core';
import { News } from './news.model';
import { NewscardService } from './newscard.service';

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.css']
})
export class NewscardComponent implements OnInit {

  newscards: News[] = [];

  constructor(private newscardService: NewscardService) { }

  ngOnInit(): void {
    this.newscardService.showNews().subscribe(newscards => {
      this.newscards = newscards
      console.log(newscards)     
    })
  }

}
