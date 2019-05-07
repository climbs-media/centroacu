import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProteinaPage } from './menu-proteina.page';

describe('MenuProteinaPage', () => {
  let component: MenuProteinaPage;
  let fixture: ComponentFixture<MenuProteinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuProteinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProteinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
