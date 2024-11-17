import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietkhuyenmaiComponent } from './chitietkhuyenmai.component';

describe('ChitietkhuyenmaiComponent', () => {
  let component: ChitietkhuyenmaiComponent;
  let fixture: ComponentFixture<ChitietkhuyenmaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitietkhuyenmaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChitietkhuyenmaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
