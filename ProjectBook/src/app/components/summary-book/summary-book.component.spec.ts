import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBookComponent } from './summary-book.component';

describe('SummaryBookComponent', () => {
  let component: SummaryBookComponent;
  let fixture: ComponentFixture<SummaryBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
