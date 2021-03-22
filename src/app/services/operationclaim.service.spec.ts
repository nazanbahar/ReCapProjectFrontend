import { TestBed } from '@angular/core/testing';

import { OperationclaimService } from './operationclaim.service';

describe('OperationclaimService', () => {
  let service: OperationclaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationclaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
