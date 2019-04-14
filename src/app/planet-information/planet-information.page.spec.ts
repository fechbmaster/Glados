import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetInformationPage } from './planet-information.page';

describe('PlanetInformationPage', () => {
  let component: PlanetInformationPage;
  let fixture: ComponentFixture<PlanetInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetInformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
