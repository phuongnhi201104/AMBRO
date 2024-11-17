import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // // Dữ liệu mẫu cho sản phẩm
  // newProducts: homeProduct[] = [];
  // bestSellers: homeProduct[] = [];
  // // Cấu hình cho slider
  // customOptions = {
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // };
  // constructor(private homeService: HomeService) {}
  // ngOnInit(): void {
  //   this.loadNewProducts();
  // }
  // loadNewProducts(): void {
  //   this.homeService.getNewProducts().subscribe({
  //     next: (products) => (this.newProducts = products),
  //     error: (err) => console.error('Error fetching new products', err),
  //   });
  // }
}
