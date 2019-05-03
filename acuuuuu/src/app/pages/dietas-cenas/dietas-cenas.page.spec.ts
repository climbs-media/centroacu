import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietasCenasPage } from './dietas-cenas.page';

describe('DietasCenasPage', () => {
  let component: DietasCenasPage;
  let fixture: ComponentFixture<DietasCenasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietasCenasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietasCenasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
