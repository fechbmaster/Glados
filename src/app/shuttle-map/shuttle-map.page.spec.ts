import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuttleMapPage } from './shuttle-map.page';

describe('ShuttleMapPage', () => {
  let component: ShuttleMapPage;
  let fixture: ComponentFixture<ShuttleMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShuttleMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuttleMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
