import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoCitasPage } from './bono-citas.page';

describe('BonoCitasPage', () => {
  let component: BonoCitasPage;
  let fixture: ComponentFixture<BonoCitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonoCitasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
