import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResidentComponent } from './search-resident.component';

describe('SearchResidentComponent', () => {
  let component: SearchResidentComponent;
  let fixture: ComponentFixture<SearchResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
