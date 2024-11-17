import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  relatedProducts: any[] = []; // Danh sách sản phẩm liên quan
  quantity: number = 1; // Số lượng mặc định ban đầu là 1
  activeTab: string = 'description';
  isWishlisted: boolean = false; // Theo dõi trạng thái wishlist
  showNotification: boolean = false;  // Theo dõi trạng thái hiển thị thông báo
  newProducts: any = [];



  techStandardList: string[] = [];
  nutriCompositionList: string[] = [];
  nutriIndexList: string[] = [];
  usageList: string[] = [];
  usageInstructionList: string[] = [];
  storageInstructionList: string[] = [];
  noteList: string[] = [];
  
  private routeSub: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) {}


ngOnInit(): void {
  this.routeSub = this.route.params.subscribe((params) => {
    const productId = params['id'];
    if (productId) {
      this.loadProductById(productId); 
    }
  });
  this.loadNewProducts();
}


loadProductById(productId: string) {
  this.productService.getProductById(productId).subscribe((data) => {
    this.product = data;
    
    
    this.techStandardList = this.product.techStandard.split('\n');
    this.nutriCompositionList = this.product.nutriComposition.split('\n');
    this.nutriIndexList = this.product.nutriIndex.split('\n');
    this.usageList = this.product.usage.split('\n');
    this.usageInstructionList = this.product.usageInstruction.split('\n');
    this.storageInstructionList = this.product.storageInstruction.split('\n');
    this.noteList = this.product.note.split('\n');

    this.loadRelatedProducts(this.product.category);
    this.productService.getAllProducts().subscribe((products) => {
      this.newProducts = this.productService
        .filterNewProducts(products)
        .filter((newProduct: any) => newProduct._id !== this.product._id); // Loại trừ sản phẩm hiện tại
    });
  });
}

loadRelatedProducts(category: string) {
  this.productService.getAllProducts().subscribe((products) => {
    this.relatedProducts = products
      .filter(
        (product: any) =>
          product.category === category && product._id !== this.product._id
      )
      .slice(0, 4); 
  });
}

// Phương thức mới để lấy danh sách sản phẩm mới, loại trừ sản phẩm hiện tại
loadNewProducts() {
  this.productService.getAllProducts().subscribe((products) => {
    this.newProducts = this.productService.filterNewProducts(products);
  });
}



incrementQuantity() {
  this.quantity++;
}

decrementQuantity() {
  if (this.quantity > 1) {
    this.quantity--;
  }
}

toggleWishlist() {
  this.isWishlisted = !this.isWishlisted;

  if (this.isWishlisted) {
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }
}


navigateToProductDetail(productId: string) {
  this.router.navigate(['/products', productId]).then(() => {
    window.scrollTo(0, 0); 
  });
}



ngOnDestroy(): void {
  if (this.routeSub) {
    this.routeSub.unsubscribe();
  }
}


addToCart(product: any) {
  // Logic thêm vào giỏ hàng
}

addToFavorites(product: any) {
  // Logic thêm vào yêu thích
}
}