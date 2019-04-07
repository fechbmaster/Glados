import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponLockerPage } from './weapon-locker.page';

describe('WeaponLockerPage', () => {
  let component: WeaponLockerPage;
  let fixture: ComponentFixture<WeaponLockerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponLockerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponLockerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
