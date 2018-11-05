import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaCreateComponent } from './historia-create.component';

describe('HistoriaCreateComponent', () => {
  let component: HistoriaCreateComponent;
  let fixture: ComponentFixture<HistoriaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
