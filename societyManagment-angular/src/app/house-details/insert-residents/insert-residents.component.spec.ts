import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertResidentsComponent } from './insert-residents.component';

describe('InsertResidentsComponent', () => {
  let component: InsertResidentsComponent;
  let fixture: ComponentFixture<InsertResidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertResidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
