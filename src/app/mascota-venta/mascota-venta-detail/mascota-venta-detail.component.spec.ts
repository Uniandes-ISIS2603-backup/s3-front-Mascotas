import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaVentaDetailComponent } from './mascota-venta-detail.component';

describe('MascotaVentaDetailComponent', () => {
  let component: MascotaVentaDetailComponent;
  let fixture: ComponentFixture<MascotaVentaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaVentaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaVentaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
