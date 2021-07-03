import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestbookComponent } from './suggestbook.component';

describe('SuggestbookComponent', () => {
  let component: SuggestbookComponent;
  let fixture: ComponentFixture<SuggestbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
