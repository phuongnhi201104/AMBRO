import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhuyenmaisComponent } from './khuyenmais.component';

describe('KhuyenmaisComponent', () => {
  let component: KhuyenmaisComponent;
  let fixture: ComponentFixture<KhuyenmaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhuyenmaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhuyenmaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
