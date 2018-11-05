import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieDetailComponent } from './especie-detail.component';

describe('EspecieDetailComponent', () => {
  let component: EspecieDetailComponent;
  let fixture: ComponentFixture<EspecieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
