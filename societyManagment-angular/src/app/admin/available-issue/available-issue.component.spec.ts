import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableIssueComponent } from './available-issue.component';

describe('AvailableIssueComponent', () => {
  let component: AvailableIssueComponent;
  let fixture: ComponentFixture<AvailableIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
