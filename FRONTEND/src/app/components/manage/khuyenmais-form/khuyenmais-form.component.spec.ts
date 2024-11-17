import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhuyenmaisFormComponent } from './khuyenmais-form.component';

describe('KhuyenmaisFormComponent', () => {
  let component: KhuyenmaisFormComponent;
  let fixture: ComponentFixture<KhuyenmaisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhuyenmaisFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhuyenmaisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
