import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development'; // Đảm bảo đường dẫn đúng

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private apiUrl = `${environment.apiUrl}/payments`; // Đường dẫn API cho thanh toán

  constructor(private http: HttpClient) {}

  // Phương thức xác nhận thanh toán
  confirmPayment(orderDetails: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, orderDetails);
  }
}
