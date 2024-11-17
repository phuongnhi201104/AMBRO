import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { DinhDuong } from '../types/dinhduong';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DinhduongService {
  // private apiUrl = `${environment.apiUrl}/dinhduong`; // Adjust the API URL

  private apiUrl = 'http://localhost:3000/dinhduong';

  constructor(private http: HttpClient) {}

  // getNutritionInfo(foodName: string): Observable<DinhDuong> {
  //   return this.http.get<DinhDuong>(
  //     `${this.apiUrl}/dinhduong/${foodName.trim()}`
  //   );
  // }

  getNutritionInfo(foodName: string): Observable<DinhDuong> {
    return this.http.get<DinhDuong>(`${this.apiUrl}/dinhduong/${foodName}`);
  }

  // getNutritionSuggestions(foodName: string): Observable<DinhDuong[]> {
  //   return this.http.get<DinhDuong[]>(`${this.apiUrl}/dinhduong/${foodName}`);
  // }

  // Phương thức lấy gợi ý dinh dưỡng
  getNutritionSuggestions(foodName: string): Observable<DinhDuong[]> {
    return this.http.get<DinhDuong[]>(`${this.apiUrl}/suggestions/${foodName}`);
  }

  // Phương thức tìm kiếm thực phẩm theo tên
  // searchNutrition(foodName: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/dinhduong/${foodName}`);
  // }
}
