import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialFisicoPage } from './historial-fisico.page';

describe('HistorialFisicoPage', () => {
  let component: HistorialFisicoPage;
  let fixture: ComponentFixture<HistorialFisicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialFisicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialFisicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
