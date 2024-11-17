import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongthucFormComponent } from './congthuc-form.component';

describe('CongthucFormComponent', () => {
  let component: CongthucFormComponent;
  let fixture: ComponentFixture<CongthucFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CongthucFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongthucFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
