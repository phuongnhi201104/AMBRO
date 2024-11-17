import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: { product: any; quantity: number; selected: boolean }[] = [];

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe(
      (data) => {
        if (data && data.items) {
          this.cartItems = data.items.map((item: any) => {
            return {
              product: item.productId,
              quantity: item.quantity,
              selected: false,
            };
          });
        } else {
          console.error('Dữ liệu giỏ hàng không hợp lệ');
        }
      },
      (error) => {
        console.error('Lỗi khi lấy giỏ hàng:', error);
      }
    );
  }

  toggleSelectAll(event: any) {
    const isChecked = event.target.checked;
    this.cartItems.forEach((item) => (item.selected = isChecked));
  }

  isAllSelected(): boolean {
    return (
      this.cartItems.length > 0 && this.cartItems.every((item) => item.selected)
    );
  }

  updateCartItem(item: any, index: number) {
    this.cartService
      .updateCartItem(item.product._id, item.quantity)
      .subscribe(() => {
        this.loadCartItems();
      });
  }

  // Xóa một sản phẩm khỏi giỏ hàng
  removeItem(productId: string) {
    this.cartService.removeFromCart(productId).subscribe(
      () => {
        this.loadCartItems(); // Tải lại giỏ hàng
      },
      (error) => {
        console.error('Lỗi khi xóa sản phẩm:', error);
      }
    );
  }

  confirmRemove(productId: string) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
      this.removeItem(productId);
    }
  }

  removeSelected() {
    const selectedProductIds = this.cartItems
      .filter((item) => item.selected)
      .map((item) => item.product._id);

    if (selectedProductIds.length > 0) {
      this.cartService.removeSelectedItems(selectedProductIds).subscribe(() => {
        this.loadCartItems(); // Tải lại giỏ hàng sau khi xóa
      });
    }
  }

  confirmRemoveSelected() {
    const selectedItems = this.cartItems.filter((item) => item.selected);
    if (selectedItems.length === 0) {
      alert('Chưa chọn sản phẩm nào để xóa');
      return;
    }

    if (confirm('Bạn có chắc chắn muốn xóa các sản phẩm đã chọn không?')) {
      this.removeSelected();
    }
  }

  getTotalItems() {
    return this.cartItems.length;
  }

  getTotalAmount() {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  getTotalSelectedAmount(): number {
    return this.cartItems
      .filter((item) => item.selected) // Lọc các sản phẩm được chọn
      .reduce((total, item) => total + item.product.price * item.quantity, 0); // Tính tổng tiền
  }

  continueShopping() {
    // Logic để tiếp tục mua hàng, ví dụ:
    this.router.navigate(['/products']); // Điều hướng đến trang sản phẩm
  }
}
