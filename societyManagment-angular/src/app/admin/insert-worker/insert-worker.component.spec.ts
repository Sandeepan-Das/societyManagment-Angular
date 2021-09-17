import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertWorkerComponent } from './insert-worker.component';

describe('InsertWorkerComponent', () => {
  let component: InsertWorkerComponent;
  let fixture: ComponentFixture<InsertWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
