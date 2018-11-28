import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieEditComponent } from './especie-edit.component';

describe('EspecieEditComponent', () => {
  let component: EspecieEditComponent;
  let fixture: ComponentFixture<EspecieEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecieEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
