import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongthucComponent } from './congthuc.component';

describe('CongthucComponent', () => {
  let component: CongthucComponent;
  let fixture: ComponentFixture<CongthucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CongthucComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongthucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
