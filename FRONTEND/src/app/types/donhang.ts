export interface Order {
  orderId: string; // ID của đơn hàng
  customerName: string; // Tên khách hàng
  orderDate: string; // Ngày đặt hàng
  products: Product[]; // Danh sách các sản phẩm trong đơn hàng
  totalAmount: number; // Tổng tiền của đơn hàng
}

export interface Product {
  productName: string; // Tên sản phẩm
  quantity: number; // Số lượng sản phẩm
  price: number; // Giá của sản phẩm
}
