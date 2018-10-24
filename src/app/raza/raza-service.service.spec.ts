import { TestBed } from '@angular/core/testing';

import { RazaServiceService } from './raza-service.service';

describe('RazaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RazaServiceService = TestBed.get(RazaServiceService);
    expect(service).toBeTruthy();
  });
});
