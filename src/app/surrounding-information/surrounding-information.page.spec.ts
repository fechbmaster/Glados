import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurroundingInformationPage } from './surrounding-information.page';

describe('SurroundingInformationPage', () => {
  let component: SurroundingInformationPage;
  let fixture: ComponentFixture<SurroundingInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurroundingInformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurroundingInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
