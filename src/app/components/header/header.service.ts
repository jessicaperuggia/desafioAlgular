import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    titlePage: 'Exibindo resultado de busca por "Covid 19"',
    subtitle: 'Encontramos um total de 20 resultados para sua busca',
    routeUrl: '/news'
  })

  constructor() {}

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}
