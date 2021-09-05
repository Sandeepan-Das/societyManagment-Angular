import { TestBed } from '@angular/core/testing';

import { PackageNotifyService } from './package-notify.service';

describe('PackageNotifyService', () => {
  let service: PackageNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
