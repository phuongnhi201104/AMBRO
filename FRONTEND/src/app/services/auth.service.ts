import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  http = inject(HttpClient);

  register(name: string, email: string, password: string) {
    return this.http.post(environment.apiUrl + '/auth/register', {
      name,
      email,
      password,
    });
  }

  // login(email: string, password: string) {
  //   return this.http.post(environment.apiUrl + '/auth/login', {
  //     email,
  //     password,
  //   });
  // }

  login(email: string, password: string) {
    return this.http
      .post(environment.apiUrl + '/auth/login', { email, password })
      .pipe(
        catchError((error) => {
          // Xử lý lỗi phía server trả về
          return throwError(() => error.error.message || 'Đăng nhập thất bại');
        })
      );
  }

  // get userName() {
  //   let userData = localStorage.getItem('user');
  //   if (userData) {
  //     return JSON.parse(userData).name;
  //   }
  //   return null;
  // }

  // get userName() {
  //   return localStorage.getItem('userName'); // Giả sử bạn đã lưu tên người dùng trong localStorage

  // }

  get userName() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).name : null;
  }

  get isLoggedIn() {
    if (typeof window !== 'undefined') {
      let token = localStorage.getItem('token');
      return token ? true : false;
    }
    return false; // If not in a browser environment
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user && user.role === 'admin';
  }
}
