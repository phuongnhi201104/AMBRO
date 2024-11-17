import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucFormComponent } from './danhmuc-form.component';

describe('DanhmucFormComponent', () => {
  let component: DanhmucFormComponent;
  let fixture: ComponentFixture<DanhmucFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanhmucFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanhmucFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
