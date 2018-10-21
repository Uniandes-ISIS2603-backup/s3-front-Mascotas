import { MascotaVentaModule } from './mascota-venta.module';

describe('MascotaVentaModule', () => {
  let mascotaVentaModule: MascotaVentaModule;

  beforeEach(() => {
    mascotaVentaModule = new MascotaVentaModule();
  });

  it('should create an instance', () => {
    expect(mascotaVentaModule).toBeTruthy();
  });
});
