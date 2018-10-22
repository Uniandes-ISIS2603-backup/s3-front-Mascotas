import { TestBed } from '@angular/core/testing';

import { DataMasAdopcionService } from './data-mas-adopcion.service';

describe('DataMasAdopcionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataMasAdopcionService = TestBed.get(DataMasAdopcionService);
    expect(service).toBeTruthy();
  });
});
