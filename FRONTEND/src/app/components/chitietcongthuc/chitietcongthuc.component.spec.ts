import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietcongthucComponent } from './chitietcongthuc.component';

describe('ChitietcongthucComponent', () => {
  let component: ChitietcongthucComponent;
  let fixture: ComponentFixture<ChitietcongthucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitietcongthucComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChitietcongthucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
