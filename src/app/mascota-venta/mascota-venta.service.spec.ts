import { TestBed } from '@angular/core/testing';

import { MascotaVentaService } from './mascota-venta.service';

describe('MascotaVentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MascotaVentaService = TestBed.get(MascotaVentaService);
    expect(service).toBeTruthy();
  });
});
