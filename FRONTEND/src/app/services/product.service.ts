import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, retry, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  myAPI: string = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  // Hàm xử lý lỗi
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }

  // Hàm lấy tất cả sản phẩm, với các tham số lọc
  getAllProducts(
    category?: string,
    minPrice?: number,
    maxPrice?: number
  ): Observable<any> {
    let params = new HttpParams();
    if (category) params = params.set('category', category); // Lọc theo danh mục nếu có
    if (minPrice) params = params.set('minPrice', minPrice.toString()); // Lọc theo giá thấp nếu có
    if (maxPrice) params = params.set('maxPrice', maxPrice.toString()); // Lọc theo giá cao nếu có

    return this._http
      .get<any>(`${this.myAPI}/products`, { params }) // Gửi các tham số truy vấn
      .pipe(retry(2), catchError(this.handleError));
  }

  // Hàm lấy danh mục sản phẩm
  getCategories(): Observable<any> {
    return this._http
      .get<any>(`${this.myAPI}/categories`)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Hàm lấy chi tiết sản phẩm theo ID
  getProductById(id: string): Observable<any> {
    return this._http
      .get<any>(`${this.myAPI}/products/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  filterNewProducts(products: any[]) {
    return products.filter((p: any) => p.label === 'New');
  }
}
