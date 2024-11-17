import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { KhuyenmaiService } from '../../services/khuyenmai.service';
import { KhuyenMai } from '../../types/khuyenmai';

@Component({
  selector: 'app-khuyenmai',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './khuyenmai.component.html',
  styleUrl: './khuyenmai.component.css',
})
export class KhuyenmaiComponent implements OnInit {
  khuyenmais: KhuyenMai[] = [];
  selectedPromotion: KhuyenMai | null = null;

  constructor(
    private promotionService: KhuyenmaiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.promotionService.getAllPromotions().subscribe((result) => {
      this.khuyenmais = result;
    });
  }

  selectPromotion(promotion: KhuyenMai) {
    this.selectedPromotion = promotion;
  }
}
