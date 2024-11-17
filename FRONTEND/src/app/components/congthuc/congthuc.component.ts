import { Component, inject, OnInit } from '@angular/core';
import { CongthucService } from '../../services/congthuc.service';
import { CongThuc } from '../../types/congthuc';

import { CommonModule } from '@angular/common';

import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-congthuc',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './congthuc.component.html',
  styleUrl: './congthuc.component.css',
})
export class CongthucComponent implements OnInit {
  CongThucService = inject(CongthucService);
  CongThucList: CongThuc[] = [];
  selectedCongThuc: CongThuc | null = null;

  // constructor(private sanitizer: DomSanitizer) {}
  constructor(private _service: CongthucService, private router: Router) {}

  ngOnInit() {
    this.CongThucService.getAllCongThuc().subscribe((result) => {
      this.CongThucList = result;
    });
  }

  selectCongThuc(congthuc: CongThuc) {
    this.selectedCongThuc = congthuc;
  }
}
