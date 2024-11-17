import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: any = [];
  filteredProducts: any = [];
  newProducts: any = [];
  productCategories: string[] = [];
  errMsg: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  selectedCategory: string = 'Tất cả sản phẩm'; // Lưu danh mục đã chọn
  priceError: string = '';
  successMsg: string = '';

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data; // Ban đầu, filteredProducts chứa tất cả sản phẩm
        // this.newProducts = data.filter((p: any) => p.label === 'New');
        this.newProducts = this.productService.filterNewProducts(data);
        this.products = this.products.map((product: any) => {
          if (product.label === 'Sale') {
            product.originalPrice = product.originalPrice || product.price;
          }
          return product;
        });
        this.filterProductsByCategory(this.selectedCategory); // Áp dụng lọc theo danh mục đã chọn
      },
      error: (err) => (this.errMsg = err),
    });
  }

  loadCategories() {
    this.productService.getCategories().subscribe({
      next: (categories) => {
        this.productCategories = ['Tất cả sản phẩm', ...categories];
      },
      error: (err) => (this.errMsg = err),
    });
  }

  filterProductsByCategory(category: string) {
    this.selectedCategory = category; // Lưu danh mục đã chọn vào biến này

    if (category === 'Tất cả sản phẩm') {
      this.filteredProducts = this.products; // Hiển thị tất cả sản phẩm nếu chọn "Tất cả sản phẩm"
    } else {
      this.filteredProducts = this.products.filter(
        (product: any) => product.category === category
      );
    }
    this.applyPriceFilter(); // Áp dụng bộ lọc giá sau khi lọc theo danh mục
  }

  // Phương thức lọc sản phẩm theo giá
  applyPriceFilter() {
    if (this.minPrice !== null && this.maxPrice !== null) {
      if (isNaN(this.minPrice) || isNaN(this.maxPrice)) {
        this.priceError = 'Giá phải là số';
      } else if (this.minPrice < 0 || this.maxPrice < 0) {
        this.priceError = 'Giá không thể là số âm';
      } else if (this.minPrice > this.maxPrice) {
        this.priceError = 'Giá thấp nhất không thể lớn hơn giá cao nhất';
      } else {
        this.priceError = '';
        this.filteredProducts = this.filteredProducts.filter((product: any) => {
          const priceCondition =
            (this.minPrice === null || product.price >= this.minPrice) &&
            (this.maxPrice === null || product.price <= this.maxPrice);
          return priceCondition;
        });
      }
    }
  }

  viewProductDetail(productId: string) {
    this.router.navigate(['/products', productId]);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product).subscribe({
      next: (response) => {
        alert('Sản phẩm đã được thêm vào giỏ hàng');
      },
      error: (err) => {
        alert('Lỗi khi thêm sản phẩm vào giỏ hàng');
        console.error('Error adding to cart:', err);
      },
    });
  }

  addToFavorites(product: any) {
    // Logic thêm vào yêu thích
  }

  isPopupVisible: boolean = false; // Biến để kiểm soát hiển thị popup

  selectedProduct: any; // Sản phẩm được chọn để hiển thị trong popup

  // ...

  openPopup(productId: string) {
    this.productService.getProductById(productId).subscribe({
      next: (product) => {
        this.selectedProduct = product; // Lưu dữ liệu chi tiết sản phẩm
        this.isPopupVisible = true; // Hiển thị popup
      },
      error: (err) => {
        console.error('Error loading product details:', err);
        alert('Không thể tải dữ liệu sản phẩm.');
      },
    });
  }

  closePopup() {
    this.isPopupVisible = false; // Ẩn popup
    this.selectedProduct = null; // Đặt lại sản phẩm được chọn
  }
}
