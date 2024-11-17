import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongthucsComponent } from './congthucs.component';

describe('CongthucsComponent', () => {
  let component: CongthucsComponent;
  let fixture: ComponentFixture<CongthucsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CongthucsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongthucsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
