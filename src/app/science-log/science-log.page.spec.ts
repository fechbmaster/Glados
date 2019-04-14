import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceLogPage } from './science-log.page';

describe('ScienceLogPage', () => {
  let component: ScienceLogPage;
  let fixture: ComponentFixture<ScienceLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceLogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
