import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioUserPage } from './diario-user.page';

describe('DiarioUserPage', () => {
  let component: DiarioUserPage;
  let fixture: ComponentFixture<DiarioUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarioUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
