import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksborrowedComponent } from './booksborrowed.component';

describe('BooksborrowedComponent', () => {
  let component: BooksborrowedComponent;
  let fixture: ComponentFixture<BooksborrowedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksborrowedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksborrowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
