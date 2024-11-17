import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DanhMucCongThucService } from '../../../services/danhmucongthuc.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-danhmuc-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './danhmuc-form.component.html',
  styleUrl: './danhmuc-form.component.css',
})
export class DanhmucFormComponent {
  name!: string;
  danhmucService = inject(DanhMucCongThucService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  isEdit = false;
  id!: string;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEdit = true;
      this.danhmucService.getDanhMucById(this.id).subscribe((result: any) => {
        console.log(result);
        this.name = result.name;
      });
    }
  }

  add() {
    console.log(this.name);
    this.danhmucService.addDanhMuc(this.name).subscribe((result: any) => {
      alert('Danh muc added');
      this.router.navigateByUrl('/admin/danhmucs');
    });
  }

  update() {
    console.log(this.name);
    this.danhmucService
      .updateDanhMuc(this.id, this.name)
      .subscribe((result: any) => {
        alert('Danh Muc updated');
        this.router.navigateByUrl('/admin/danhmucs');
      });
  }
}
