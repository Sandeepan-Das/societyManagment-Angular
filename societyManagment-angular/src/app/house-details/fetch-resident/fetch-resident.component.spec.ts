import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchResidentComponent } from './fetch-resident.component';

describe('FetchResidentComponent', () => {
  let component: FetchResidentComponent;
  let fixture: ComponentFixture<FetchResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchResidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
