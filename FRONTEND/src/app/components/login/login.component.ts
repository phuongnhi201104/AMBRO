import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formbuilder = inject(FormBuilder);
  loginForm = this.formbuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  errorMessage: string | null = null;

  authService = inject(AuthService);
  router = inject(Router);

  // login() {
  //   this.authService
  //     .login(this.loginForm.value.email!, this.loginForm.value.password!)
  //     .subscribe((result: any) => {
  //       console.log(result);
  //       localStorage.setItem('token', result.token);
  //       localStorage.setItem('user', JSON.stringify(result.user));
  //       console.log(
  //         'User stored in localStorage:',
  //         localStorage.getItem('user')
  //       );

  //       this.router.navigateByUrl('/');
  //     });
  // }

  login() {
    if (this.loginForm.valid) {
      console.log('Form Value:', this.loginForm.value);

      const { email, password } = this.loginForm.value;
      this.authService.login(email!, password!).subscribe({
        next: (result: any) => {
          localStorage.setItem('token', result.token);
          localStorage.setItem('userName', result.user.name);
          alert('Đăng nhập thành công!');
          this.router.navigate(['/']); // Điều hướng về trang chủ
        },
        error: (err: any) => {
          this.errorMessage = err || 'Đăng nhập thất bại!';
        },
      });
    } else {
      console.log('Form Invalid:', this.loginForm.errors); // Lỗi toàn form
      console.log('Email Errors:', this.loginForm.get('email')?.errors); // Lỗi của email
      console.log('Password Errors:', this.loginForm.get('password')?.errors); // Lỗi của password

      this.errorMessage = 'Vui lòng nhập đầy đủ và chính xác thông tin!';
    }
  }
}
