import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverHistorialDieteticoPage } from './popover-historial-dietetico.page';

describe('PopoverHistorialDieteticoPage', () => {
  let component: PopoverHistorialDieteticoPage;
  let fixture: ComponentFixture<PopoverHistorialDieteticoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverHistorialDieteticoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverHistorialDieteticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
