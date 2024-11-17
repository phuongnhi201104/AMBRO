import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { KhuyenmaiService } from '../../../services/khuyenmai.service';
import { Router } from '@angular/router';
import { KhuyenMai } from '../../../types/khuyenmai';

@Component({
  selector: 'app-khuyenmais',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './khuyenmais.component.html',
  styleUrl: './khuyenmais.component.css',
})
export class KhuyenmaisComponent {
  displayedColumns: string[] = ['name', 'title', 'action'];
  dataSource = new MatTableDataSource<KhuyenMai>([]);
  editingPromotion: KhuyenMai | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private khuyenMaiService = inject(KhuyenmaiService);
  private router = inject(Router);

  // constructor(private router: Router) {}

  ngOnInit() {
    this.fetchPromotions();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  fetchPromotions() {
    this.khuyenMaiService.getAllPromotions().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  deletePromotion(id: string) {
    if (confirm('Bạn có chắc muốn xóa chương trình khuyến mãi này?')) {
      this.khuyenMaiService.deletePromotion(id).subscribe(() => {
        alert('Chương trình khuyến mãi đã được xóa!');
        this.fetchPromotions();
      });
    }
  }

  // editPromotion(promotion: KhuyenMai) {
  //   this.editingPromotion = { ...promotion };
  // }

  // editPromotion(id: string): void {
  //   this.router.navigate([`/admin/khuyenmais/${id}`]);
  // }

  // addPromotion(): void {
  //   this.router.navigate(['/admin/khuyenmais/add']);
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
