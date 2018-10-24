import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaDetailComponent } from './raza-detail.component';

describe('RazaDetailComponent', () => {
  let component: RazaDetailComponent;
  let fixture: ComponentFixture<RazaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
