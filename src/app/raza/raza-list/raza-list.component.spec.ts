import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaListComponent } from './raza-list.component';

describe('RazaListComponent', () => {
  let component: RazaListComponent;
  let fixture: ComponentFixture<RazaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
