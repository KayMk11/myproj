import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayallBooksComponent } from './displayall-books.component';

describe('DisplayallBooksComponent', () => {
  let component: DisplayallBooksComponent;
  let fixture: ComponentFixture<DisplayallBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayallBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayallBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
