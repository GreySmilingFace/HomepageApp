import { TestBed } from '@angular/core/testing';

import { HandballServiceService } from './handball-service.service';

describe('HandballServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandballServiceService = TestBed.get(HandballServiceService);
    expect(service).toBeTruthy();
  });
});
