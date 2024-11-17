import { Component, inject, OnInit } from '@angular/core';
import { CongthucService } from '../../services/congthuc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CongThuc } from '../../types/congthuc';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chitietcongthuc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chitietcongthuc.component.html',
  styleUrl: './chitietcongthuc.component.css',
})
export class ChitietcongthucComponent implements OnInit {
  CongThucService = inject(CongthucService);
  route = inject(ActivatedRoute);

  congthuc!: CongThuc;

  // constructor(private sanitizer: DomSanitizer) {}
  constructor(private _service: CongthucService, private router: Router) {}

  ngOnInit() {
    // Lấy ID từ URL
    const id = this.route.snapshot.params['id'];
    this.CongThucService.getCongThucById(id).subscribe((result) => {
      this.congthuc = result;
    });
  }
}
