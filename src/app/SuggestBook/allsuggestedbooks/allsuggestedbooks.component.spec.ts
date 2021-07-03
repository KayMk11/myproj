import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsuggestedbooksComponent } from './allsuggestedbooks.component';

describe('AllsuggestedbooksComponent', () => {
  let component: AllsuggestedbooksComponent;
  let fixture: ComponentFixture<AllsuggestedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllsuggestedbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsuggestedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
