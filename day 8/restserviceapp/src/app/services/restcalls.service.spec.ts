import { TestBed } from '@angular/core/testing';

import { RestcallsService } from './restcalls.service';

describe('RestcallsService', () => {
  let service: RestcallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestcallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
