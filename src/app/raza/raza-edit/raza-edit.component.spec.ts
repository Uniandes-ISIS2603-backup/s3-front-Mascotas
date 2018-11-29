import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaEditComponent } from './raza-edit.component';

describe('RazaEditComponent', () => {
  let component: RazaEditComponent;
  let fixture: ComponentFixture<RazaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
