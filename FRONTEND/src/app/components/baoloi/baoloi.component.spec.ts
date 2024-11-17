import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoloiComponent } from './baoloi.component';

describe('BaoloiComponent', () => {
  let component: BaoloiComponent;
  let fixture: ComponentFixture<BaoloiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaoloiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaoloiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
