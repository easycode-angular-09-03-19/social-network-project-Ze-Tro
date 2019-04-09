import { TestBed } from '@angular/core/testing';

import { GlobalAuth.ServiceService } from '../global-auth.service.service';

describe('GlobalAuth.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalAuth.ServiceService = TestBed.get(GlobalAuth.ServiceService);
    expect(service).toBeTruthy();
  });
});
