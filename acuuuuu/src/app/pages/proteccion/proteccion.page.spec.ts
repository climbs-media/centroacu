import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteccionPage } from './proteccion.page';

describe('ProteccionPage', () => {
  let component: ProteccionPage;
  let fixture: ComponentFixture<ProteccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
