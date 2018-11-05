import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaDetailComponent } from './historia-detail.component';

describe('HistoriaDetailComponent', () => {
  let component: HistoriaDetailComponent;
  let fixture: ComponentFixture<HistoriaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
