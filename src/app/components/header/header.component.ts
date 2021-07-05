import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
  }

  get titlePage(): string {
    return this.headerService.headerData.titlePage
  }

  get subtitle(): string {
    return this.headerService.headerData.subtitle
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }
}
