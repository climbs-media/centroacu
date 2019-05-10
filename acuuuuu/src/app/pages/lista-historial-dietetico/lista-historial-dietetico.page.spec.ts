import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHistorialDieteticoPage } from './lista-historial-dietetico.page';

describe('ListaHistorialDieteticoPage', () => {
  let component: ListaHistorialDieteticoPage;
  let fixture: ComponentFixture<ListaHistorialDieteticoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHistorialDieteticoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHistorialDieteticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
