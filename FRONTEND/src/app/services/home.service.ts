import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { homeProduct } from '../types/homeProduct';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  products: any;

  newProductUrl: string = '/assets/data/newProduct.json';
  constructor() {}
  http = inject(HttpClient);

  getNewProdcts(): Observable<homeProduct[]> {
    return this.http.get<homeProduct[]>(this.newProductUrl);
  }
}
