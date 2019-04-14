import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceMapPage } from './science-map.page';

describe('ScienceMapPage', () => {
  let component: ScienceMapPage;
  let fixture: ComponentFixture<ScienceMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
