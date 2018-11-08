import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaCreateComponent } from './mascota-create.component';

describe('MascotaCreateComponent', () => {
  let component: MascotaCreateComponent;
  let fixture: ComponentFixture<MascotaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
