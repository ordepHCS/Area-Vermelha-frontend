import { TestBed } from '@angular/core/testing';

import { ComplaintsAllService } from './complaints-all.service';

describe('ComplaintsAllService', () => {
  let service: ComplaintsAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintsAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
