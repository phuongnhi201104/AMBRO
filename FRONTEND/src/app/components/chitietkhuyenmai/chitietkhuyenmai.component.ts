import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KhuyenMai } from '../../types/khuyenmai'; // Update path as needed
import { KhuyenmaiService } from '../../services/khuyenmai.service'; // Update path as needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chitietkhuyenmai',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chitietkhuyenmai.component.html',
  styleUrl: './chitietkhuyenmai.component.css',
})
export class ChitietkhuyenmaiComponent implements OnInit {
  khuyenMaiService = inject(KhuyenmaiService);
  route = inject(ActivatedRoute);

  khuyenmai!: KhuyenMai;

  ngOnInit() {
    // Get the ID from the URL
    const id = this.route.snapshot.params['id'];

    // Fetch promotion details by ID
    this.khuyenMaiService.getPromotionById(id).subscribe((result) => {
      this.khuyenmai = result;
    });
  }
}
