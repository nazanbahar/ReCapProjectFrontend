import { TestBed } from '@angular/core/testing';

import { UseroperationclaimService } from './useroperationclaim.service';

describe('UseroperationclaimService', () => {
  let service: UseroperationclaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseroperationclaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
