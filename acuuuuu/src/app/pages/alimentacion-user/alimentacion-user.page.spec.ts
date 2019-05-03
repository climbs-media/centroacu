import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentacionUserPage } from './alimentacion-user.page';

describe('AlimentacionUserPage', () => {
  let component: AlimentacionUserPage;
  let fixture: ComponentFixture<AlimentacionUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentacionUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentacionUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
