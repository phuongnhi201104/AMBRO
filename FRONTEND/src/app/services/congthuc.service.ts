import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CongThuc } from '../types/congthuc';

@Injectable({
  providedIn: 'root',
})
export class CongthucService {
  constructor() {}
  http = inject(HttpClient);

  getAllCongThuc() {
    return this.http.get<CongThuc[]>(environment.apiUrl + '/congthuc');
  }
  getCongThuc(id: string) {
    return this.http.get<CongThuc>(environment.apiUrl + '/congthuc/' + id);
  }
  addCongThuc(model: CongThuc) {
    return this.http.post(environment.apiUrl + '/congthuc', model);
  }
  updateCongThuc(id: string, model: CongThuc) {
    return this.http.put(environment.apiUrl + '/congthuc/' + id, model);
  }
  deleteCongThuc(id: string) {
    return this.http.delete(environment.apiUrl + '/congthuc/' + id);
  }

  // Hàm lấy chi tiết sản phẩm theo ID
  getCongThucById(id: string) {
    return this.http.get<CongThuc>(environment.apiUrl + '/congthuc/' + id);
  }
}
