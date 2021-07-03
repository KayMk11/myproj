import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDamagedbookComponent } from './add-damagedbook.component';

describe('AddDamagedbookComponent', () => {
  let component: AddDamagedbookComponent;
  let fixture: ComponentFixture<AddDamagedbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDamagedbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDamagedbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
