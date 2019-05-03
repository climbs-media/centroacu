import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietasHipocaloricasPage } from './dietas-hipocaloricas.page';

describe('DietasHipocaloricasPage', () => {
  let component: DietasHipocaloricasPage;
  let fixture: ComponentFixture<DietasHipocaloricasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietasHipocaloricasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietasHipocaloricasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
