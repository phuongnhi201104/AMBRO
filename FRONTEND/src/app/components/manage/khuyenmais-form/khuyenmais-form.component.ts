import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, ActivatedRoute } from '@angular/router';
import { KhuyenmaiService } from '../../../services/khuyenmai.service';
import { KhuyenMai } from '../../../types/khuyenmai';
import { MatLabel } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-khuyenmais-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './khuyenmais-form.component.html',
  styleUrl: './khuyenmais-form.component.css',
})
export class KhuyenmaisFormComponent {
  formBuilder = inject(FormBuilder);
  khuyenMaiForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    title: ['', [Validators.required, Validators.minLength(6)]],
    description: ['', [Validators.required]],
    reasons_to_join: ['', [Validators.required]],
    promotion_details: this.formBuilder.array([]),
    voucher_code: ['', [Validators.required]],
    benefits: this.formBuilder.array([]),
    note: ['', [Validators.required]],
    banner: ['', [Validators.required]],
    voucher: ['', [Validators.required]],
    time: ['', [Validators.required]],
  });

  router = inject(Router);
  khuyenMaiService = inject(KhuyenmaiService);
  id!: string; // ID from the route
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; // Get ID from route
    if (this.id) {
      // Load existing promotion
      this.khuyenMaiService
        .getPromotionById(this.id)
        .subscribe((result: KhuyenMai) => {
          this.khuyenMaiForm.patchValue(result);
          // Populate arrays
          result.promotion_details.forEach(() => this.addPromotionDetail());
          result.benefits.forEach(() => this.addBenefit());
        });
    } else {
      // Initialize empty arrays for new form
      this.addPromotionDetail();
      this.addBenefit();
    }
  }

  // Promotion details (array handling)
  get promotionDetails() {
    return this.khuyenMaiForm.get('promotion_details') as FormArray;
  }

  addPromotionDetail() {
    this.promotionDetails.push(this.formBuilder.control(''));
  }

  removePromotionDetail(index: number) {
    this.promotionDetails.removeAt(index);
  }

  // Benefits (array handling)
  get benefits() {
    return this.khuyenMaiForm.get('benefits') as FormArray;
  }

  addBenefit() {
    this.benefits.push(this.formBuilder.control(''));
  }

  removeBenefit(index: number) {
    this.benefits.removeAt(index);
  }

  // Add new promotion
  addKhuyenMai() {
    if (this.khuyenMaiForm.valid) {
      const newPromotion = this.khuyenMaiForm.value as KhuyenMai;
      this.khuyenMaiService.addPromotion(newPromotion).subscribe(() => {
        alert('Khuyến mãi mới đã được thêm thành công!');
        this.router.navigateByUrl('/admin/khuyenmais');
      });
    }
  }

  // Update existing promotion
  updateKhuyenMai() {
    if (this.khuyenMaiForm.valid && this.id) {
      const updatedPromotion = this.khuyenMaiForm.value as KhuyenMai;
      this.khuyenMaiService
        .updatePromotion(this.id, updatedPromotion)
        .subscribe(() => {
          alert('Khuyến mãi đã được cập nhật thành công!');
          this.router.navigateByUrl('/admin/khuyenmais');
        });
    }
  }

  // Cancel form action
  cancel() {
    this.router.navigateByUrl('/admin/khuyenmais');
  }
}
