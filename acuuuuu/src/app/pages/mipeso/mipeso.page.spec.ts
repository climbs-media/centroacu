import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MipesoPage } from './mipeso.page';

describe('MipesoPage', () => {
  let component: MipesoPage;
  let fixture: ComponentFixture<MipesoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MipesoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MipesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
