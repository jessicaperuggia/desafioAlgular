import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { News } from './news.model';
import { NewscardService } from './newscard.service';

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.css']
})
export class NewscardComponent implements OnInit {

  newscards: News[] = [];

  constructor(private newscardService: NewscardService, private headerService: HeaderService) {
    headerService.headerData = {
      titlePage: 'Exibindo resultado de busca por "Covid 19"',
      subtitle: 'Encontramos um total de 20 resultados para sua busca',
      routeUrl: '/'
    }
  }

  ngOnInit(): void {
    this.newscardService.showNews().subscribe(newscards => {
      this.newscards = newscards           
    })
  }

}
