import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { SidebarComponent } from './components/general/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    CarouselModule,
    SidebarComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FRONTEND';

  isAdminLayout = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Lắng nghe sự thay đổi của router để kiểm tra layout
    this.router.events.subscribe(() => {
      // Kiểm tra nếu đường dẫn chứa `/admin` để đặt layout admin
      this.isAdminLayout = this.router.url.includes('/admin');
    });
  }
}
