import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { KhuyenMai } from '../types/khuyenmai';

@Injectable({
  providedIn: 'root',
})
export class KhuyenmaiService {
  //   constructor(private http: HttpClient) {}

  //   // Lấy danh sách tất cả khuyến mãi
  //   getAllPromotions(): Observable<KhuyenMai[]> {
  //     return this.http.get<KhuyenMai[]>(`${environment.apiUrl}/khuyenmai`);
  //   }

  //   // Lấy thông tin chi tiết của một chương trình khuyến mãi theo id
  //   getPromotionById(id: number): Observable<KhuyenMai> {
  //     return this.http.get<KhuyenMai>(`${environment.apiUrl}/khuyenmai/${id}`);
  //   }

  //   deleteKhuyenMai(id: string) {
  //     return this.http.delete(environment.apiUrl + '/khuyenmai/' + id);
  //   }

  //   getKhuyenMai(id: string) {
  //     return this.http.get<KhuyenMai>(environment.apiUrl + '/khuyenmai/' + id);
  //   }
  //   addKhuyenMai(model: KhuyenMai) {
  //     return this.http.post(environment.apiUrl + '/khuyenmai', model);
  //   }
  //   updateKhuyenMai(id: string, model: KhuyenMai) {
  //     return this.http.put(environment.apiUrl + '/khuyenmai/' + id, model);
  //   }

  private baseUrl = `${environment.apiUrl}/khuyenmai`;

  constructor(private http: HttpClient) {}

  // Lấy danh sách khuyến mãi
  getAllPromotions(): Observable<KhuyenMai[]> {
    return this.http.get<KhuyenMai[]>(this.baseUrl);
  }

  // Lấy chi tiết khuyến mãi
  getPromotionById(id: string): Observable<KhuyenMai> {
    return this.http.get<KhuyenMai>(`${this.baseUrl}/${id}`);
  }

  // Thêm mới khuyến mãi
  addPromotion(promotion: KhuyenMai): Observable<KhuyenMai> {
    return this.http.post<KhuyenMai>(this.baseUrl, promotion);
  }

  // Cập nhật khuyến mãi
  updatePromotion(id: string, promotion: KhuyenMai): Observable<KhuyenMai> {
    return this.http.put<KhuyenMai>(`${this.baseUrl}/${id}`, promotion);
  }

  // Xóa khuyến mãi
  deletePromotion(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
