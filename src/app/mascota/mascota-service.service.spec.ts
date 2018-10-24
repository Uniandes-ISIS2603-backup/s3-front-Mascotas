import { TestBed } from '@angular/core/testing';

import { MascotaServiceService } from './mascota-service.service';

describe('MascotaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MascotaServiceService = TestBed.get(MascotaServiceService);
    expect(service).toBeTruthy();
  });
});
