import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../services/payment.service';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent implements OnInit {
  // cartItems: any[] = []; // Khai báo mảng để lưu trữ sản phẩm trong giỏ hàng
  // totalAmount: number = 0;

  // constructor(private cartService: CartService) {}

  // ngOnInit() {
  //   this.loadCartItems(); // Gọi phương thức để tải sản phẩm giỏ hàng khi khởi tạo
  // }

  // loadCartItems() {
  //   this.cartService.getCartItems().subscribe({
  //     next: (data) => {
  //       this.cartItems = data.items || []; // Giả định rằng dữ liệu có dạng { items: [...] }
  //       this.calculateTotalAmount(); // Tính tổng tiền sau khi lấy dữ liệu
  //     },
  //     error: (err) => {
  //       console.error('Lỗi khi lấy sản phẩm giỏ hàng:', err);
  //     },
  //   });
  // }

  // calculateTotalAmount() {
  //   this.totalAmount = this.cartItems.reduce((total, item) => {
  //     return total + item.product.price * item.quantity;
  //   }, 0);
  // }

  // // Phương thức xác nhận thanh toán
  // confirmPayment() {
  //   // Logic xử lý thanh toán ở đây
  //   alert('Thanh toán thành công!'); // Ví dụ đơn giản
  // }

  cartItems: any[] = [];
  detailedCartItems: any[] = [];
  totalAmount: number = 0;
  userId: any;

  constructor(
    private paymentService: PaymentService,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // this.loadCartItems();
    this.loadCartDetails();
  }

  // Load giỏ hàng từ CartService
  // loadCartItems(): void {
  //   this.cartService.getCartItems().subscribe({
  //     next: (items) => {
  //       this.cartItems = items;
  //       this.loadProductDetails();
  //     },
  //     error: (err) => console.error('Error loading cart items:', err),
  //   });
  // }

  loadCartDetails(): void {
    this.cartService.getCartDetails(this.userId).subscribe({
      next: (items) => {
        this.cartItems = items;
        this.calculateTotalAmount();
      },
      error: (err) => console.error('Error loading cart details:', err),
    });
  }

  // Load thông tin chi tiết sản phẩm từ ProductService
  // loadProductDetails(): void {
  //   const productRequests = this.cartItems.map((item) =>
  //     this.productService.getProductById(item.productId).toPromise()
  //   );

  //   Promise.all(productRequests)
  //     .then((products) => {
  //       this.detailedCartItems = this.cartItems.map((item, index) => ({
  //         ...item,
  //         product: products[index],
  //       }));
  //       this.calculateTotalAmount();
  //     })
  //     .catch((err) =>
  //       console.error('Error loading product details for cart items:', err)
  //     );
  // }

  // Tính tổng tiền
  calculateTotalAmount(): void {
    this.totalAmount = this.detailedCartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  // Xác nhận thanh toán
  confirmPayment(): void {
    const orderDetails = {
      userId: this.userId,
      items: this.detailedCartItems.map((item) => ({
        productId: item.product._id,
        quantity: item.quantity,
        price: item.product.price,
      })),
      totalAmount: this.totalAmount,
    };

    this.paymentService.confirmPayment(orderDetails).subscribe({
      next: (response) => {
        alert('Thanh toán thành công! Mã đơn hàng: ' + response.orderId);
        this.cartItems = [];
        this.detailedCartItems = [];
      },
      error: (err) => {
        console.error('Error confirming payment:', err);
        alert('Thanh toán thất bại.');
      },
    });
  }
}
