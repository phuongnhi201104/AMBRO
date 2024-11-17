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
import { DanhMucCongThuc } from '../../../types/danhMucCongThuc';
import { DanhMucCongThucService } from '../../../services/danhmucongthuc.service';
import { CongthucService } from '../../../services/congthuc.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-congthuc-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './congthuc-form.component.html',
  styleUrl: './congthuc-form.component.css',
})
export class CongthucFormComponent {
  formBuilder = inject(FormBuilder);
  CongThucForm = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(6)]],
    datePosted: [null, [Validators.required, Validators.minLength(5)]],
    estimatedTime: [null, [Validators.required, Validators.minLength(1)]],
    images: this.formBuilder.array([]),
    DanhMucId: [null, [Validators.required]],
  });

  danhmucService = inject(DanhMucCongThucService);
  categories: DanhMucCongThuc[] = [];
  CongThucService = inject(CongthucService);
  id!: string;
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.danhmucService.getDanhMuc().subscribe((result) => {
      this.categories = result;
    });

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.CongThucService.getCongThuc(this.id).subscribe((result) => {
        for (let index = 0; index < result.images.length; index++) {
          this.addImage();
        }
        this.CongThucForm.patchValue(result as any);
      });
    } else {
      this.addImage();
    }
  }

  router = inject(Router);
  addCongThuc() {
    let value = this.CongThucForm.value;
    console.log(value);
    this.CongThucService.addCongThuc(value as any).subscribe((result) => {
      alert('Cong thuc Added');
      this.router.navigateByUrl('/admin/congthucs');
    });
  }

  updateCongThuc() {
    let value = this.CongThucForm.value;
    console.log(value);
    this.CongThucService.updateCongThuc(this.id, value as any).subscribe(
      (result) => {
        alert('Cong Thuc Updated');
        this.router.navigateByUrl('/admin/congthucs');
      }
    );
  }

  addImage() {
    this.images.push(this.formBuilder.control(null));
  }

  removeImage() {
    this.images.removeAt(this.images.controls.length - 1);
  }

  get images() {
    return this.CongThucForm.get('images') as FormArray;
  }
}
