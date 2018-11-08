import { EspecieModule } from './especie.module';

describe('EspecieModule', () => {
  let especieModule: EspecieModule;

  beforeEach(() => {
    especieModule = new EspecieModule();
  });

  it('should create an instance', () => {
    expect(especieModule).toBeTruthy();
  });
});
