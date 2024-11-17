import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css'],
})
export class DonhangComponent implements OnInit {
  orders: any[] = [];
  filteredOrders: any[] = [];
  types: string[] = [];
  sizes: number[] = [];
  selectedProduct: string = '';
  selectedQuantity: number | null = null;

  // Các tham số phân trang
  page: number = 1;
  pageSize: number = 10;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.http.get<any[]>('/admin/donhang').subscribe((data) => {
      this.orders = data;
      this.filteredOrders = data; // Init filtered orders with all data
      this.processFilters();
    });
  }

  processFilters(): void {
    // Lấy danh sách các loại sản phẩm và số lượng
    this.types = [
      ...new Set(
        this.orders.flatMap((order) =>
          order.products.map((product) => product.productName)
        )
      ),
    ];

    this.sizes = [
      ...new Set(
        this.orders.flatMap((order) =>
          order.products.map((product) => product.quantity)
        )
      ),
    ];
  }

  applyFilter(): void {
    this.filteredOrders = this.orders.filter((order) => {
      const matchesProduct =
        !this.selectedProduct ||
        order.products.some(
          (product) => product.productName === this.selectedProduct
        );
      const matchesQuantity =
        this.selectedQuantity === null ||
        order.products.some(
          (product) => product.quantity === this.selectedQuantity
        );
      return matchesProduct && matchesQuantity;
    });
  }

  computeDataSource(): any {
    return {
      get: (
        sort: { property: string; direction: string },
        page: number,
        pageSize: number
      ) => {
        return new Promise((resolve, reject) => {
          // Sắp xếp các đơn hàng theo thuộc tính sort
          const sortedOrders = this.filteredOrders.sort((a, b) => {
            if (sort.direction === 'desc') {
              [a, b] = [b, a];
            }
            if (a[sort.property] > b[sort.property]) return 1;
            if (a[sort.property] < b[sort.property]) return -1;
            return 0;
          });

          // Trả về dữ liệu phân trang
          resolve(sortedOrders.slice((page - 1) * pageSize, page * pageSize));
        });
      },
      length: this.filteredOrders.length, // Tổng số đơn hàng
    };
  }

  // Phương thức thay đổi trang (pagination)
  changePage(page: number): void {
    this.page = page;
    this.computeDataSource(); // Cập nhật lại nguồn dữ liệu sau khi thay đổi trang
  }

  // Phương thức thay đổi kích thước trang (page size)
  changePageSize(pageSize: number): void {
    this.pageSize = pageSize;
    this.computeDataSource(); // Cập nhật lại nguồn dữ liệu sau khi thay đổi kích thước trang
  }
}
