import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietasProteinasPage } from './dietas-proteinas.page';

describe('DietasProteinasPage', () => {
  let component: DietasProteinasPage;
  let fixture: ComponentFixture<DietasProteinasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietasProteinasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietasProteinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
