import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayallDamagedbooksComponent } from './displayall-damagedbooks.component';

describe('DisplayallDamagedbooksComponent', () => {
  let component: DisplayallDamagedbooksComponent;
  let fixture: ComponentFixture<DisplayallDamagedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayallDamagedbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayallDamagedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
