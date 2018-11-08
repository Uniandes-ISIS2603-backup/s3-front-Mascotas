import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaCreateComponent } from './raza-create.component';

describe('RazaCreateComponent', () => {
  let component: RazaCreateComponent;
  let fixture: ComponentFixture<RazaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
