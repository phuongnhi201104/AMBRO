import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DanhMucCongThuc } from '../types/danhMucCongThuc';

@Injectable({
  providedIn: 'root',
})
export class DanhMucCongThucService {
  http = inject(HttpClient);
  constructor() {}
  getDanhMuc() {
    return this.http.get<DanhMucCongThuc[]>('http://localhost:3000/danhmuc');
  }
  getDanhMucById(id: string) {
    return this.http.get<DanhMucCongThuc>(
      'http://localhost:3000/danhmuc/' + id
    );
  }

  addDanhMuc(name: string) {
    return this.http.post('http://localhost:3000/danhmuc', { name: name });
  }

  updateDanhMuc(id: string, name: string) {
    return this.http.put('http://localhost:3000/danhmuc/' + id, { name: name });
  }

  deleteDanhMucById(id: string) {
    return this.http.delete('http://localhost:3000/danhmuc/' + id);
  }
}
