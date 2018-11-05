import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaVentaCreateComponent } from './mascota-venta-create.component';

describe('MascotaVentaCreateComponent', () => {
  let component: MascotaVentaCreateComponent;
  let fixture: ComponentFixture<MascotaVentaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaVentaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaVentaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
