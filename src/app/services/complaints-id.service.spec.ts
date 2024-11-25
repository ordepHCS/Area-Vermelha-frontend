import { TestBed } from '@angular/core/testing';

import { ComplaintsIdService } from './complaints-id.service';

describe('ComplaintsIdService', () => {
  let service: ComplaintsIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintsIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
