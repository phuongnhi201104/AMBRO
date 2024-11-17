import { DinhDuong } from '../../types/dinhduong';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component, inject, OnInit } from '@angular/core';
import { DinhduongService } from '../../services/dinhduong.service';

import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nutrition',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.css',
})
export class NutritionComponent {
  foodName: string = '';

  quantity: number = 100;
  nutritionData?: DinhDuong;
  errorMessage: string = '';
  suggestions: DinhDuong[] = [];

  constructor(private nutritionalInfoService: DinhduongService) {}

  fetchSuggestions() {
    if (this.foodName.trim()) {
      this.nutritionalInfoService
        .getNutritionSuggestions(this.foodName)
        .subscribe(
          (data: DinhDuong[]) => {
            this.suggestions = data; // Hiển thị gợi ý
          },
          (error: any) => {
            console.error('Error fetching suggestions:', error);
            this.suggestions = [];
          }
        );
    } else {
      this.suggestions = [];
    }
  }

  selectSuggestion(name: string) {
    this.foodName = name;
    this.suggestions = []; // Ẩn gợi ý sau khi chọn
  }

  calculateNutrition(data: DinhDuong) {
    if (data) {
      // Tính toán chỉ số dinh dưỡng dựa trên số lượng
      const factor = this.quantity / 100; // Giả sử dữ liệu dinh dưỡng là cho 100g
      this.nutritionData = {
        ...data,
        Kcal: parseFloat((data.Kcal * factor).toFixed(1)), // Làm tròn 1 chữ số thập phân cho calo
        Protein: parseFloat((data.Protein * factor).toFixed(1)), // Làm tròn 1 chữ số thập phân cho protein
        Lipid: parseFloat((data.Lipid * factor).toFixed(1)), // Làm tròn 1 chữ số thập phân cho lipid
        Glucid: parseFloat((data.Glucid * factor).toFixed(1)), // Làm tròn 1 chữ số thập phân cho glucid
      };
    }
  }

  searchNutrition() {
    this.errorMessage = ''; // Reset thông báo lỗi
    if (this.foodName.trim()) {
      this.nutritionalInfoService.getNutritionInfo(this.foodName).subscribe(
        (data: DinhDuong) => {
          this.nutritionData = data; // Hiển thị kết quả
          this.calculateNutrition(data);
          this.suggestions = [];
        },
        (error: any) => {
          console.error('Error fetching nutrition info:', error);
          this.nutritionData = undefined; // Reset kết quả nếu không tìm thấy
          this.errorMessage = 'Không tìm thấy thông tin cho thực phẩm này!'; // Hiển thị lỗi
        }
      );
    } else {
      this.errorMessage = 'Vui lòng nhập tên thực phẩm!';
    }
  }
}
