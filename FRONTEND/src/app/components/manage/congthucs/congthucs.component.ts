import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CongthucService } from '../../../services/congthuc.service';
import { CongThuc } from '../../../types/congthuc';

@Component({
  selector: 'app-congthucs',
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
  templateUrl: './congthucs.component.html',
  styleUrl: './congthucs.component.css',
})
export class CongthucsComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'datePosted',
    'estimatedTime',
    'action',
  ];
  dataSource: MatTableDataSource<CongThuc>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  CongThucService = inject(CongthucService);

  constructor() {
    this.dataSource = new MatTableDataSource([] as any);
  }

  ngOnInit() {
    this.getServerData();
  }

  private getServerData() {
    this.CongThucService.getAllCongThuc().subscribe((result) => {
      // console.log(result);
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id: string) {
    this.CongThucService.deleteCongThuc(id).subscribe((result) => {
      alert('Cong thuc Deleted');
      this.getServerData();
    });
  }
}
