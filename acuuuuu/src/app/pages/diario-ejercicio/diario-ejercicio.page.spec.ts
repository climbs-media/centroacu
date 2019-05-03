import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioEjercicioPage } from './diario-ejercicio.page';

describe('DiarioEjercicioPage', () => {
  let component: DiarioEjercicioPage;
  let fixture: ComponentFixture<DiarioEjercicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioEjercicioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarioEjercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
