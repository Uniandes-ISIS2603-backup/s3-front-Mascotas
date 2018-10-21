import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaVentaListComponent } from './mascota-venta-list.component';

describe('MascotaVentaListComponent', () => {
  let component: MascotaVentaListComponent;
  let fixture: ComponentFixture<MascotaVentaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaVentaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaVentaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
