import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckNotificationComponent } from './check-notification.component';

describe('CheckNotificationComponent', () => {
  let component: CheckNotificationComponent;
  let fixture: ComponentFixture<CheckNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
