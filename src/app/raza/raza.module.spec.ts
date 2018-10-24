import { RazaModule } from './raza.module';

describe('RazaModule', () => {
  let razaModule: RazaModule;

  beforeEach(() => {
    razaModule = new RazaModule();
  });

  it('should create an instance', () => {
    expect(razaModule).toBeTruthy();
  });
});
