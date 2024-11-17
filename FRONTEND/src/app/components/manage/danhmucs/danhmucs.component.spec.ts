import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucsComponent } from './danhmucs.component';

describe('DanhmucsComponent', () => {
  let component: DanhmucsComponent;
  let fixture: ComponentFixture<DanhmucsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanhmucsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanhmucsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
