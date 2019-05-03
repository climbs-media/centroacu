import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonosAcreditadosPage } from './bonos-acreditados.page';

describe('BonosAcreditadosPage', () => {
  let component: BonosAcreditadosPage;
  let fixture: ComponentFixture<BonosAcreditadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonosAcreditadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonosAcreditadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
