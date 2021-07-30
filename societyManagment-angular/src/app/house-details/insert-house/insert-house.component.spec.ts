import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertHouseComponent } from './insert-house.component';

describe('InsertHouseComponent', () => {
  let component: InsertHouseComponent;
  let fixture: ComponentFixture<InsertHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
