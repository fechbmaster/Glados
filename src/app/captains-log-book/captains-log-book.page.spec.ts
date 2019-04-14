import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainsLogBookPage } from './captains-log-book.page';

describe('CaptainsLogBookPage', () => {
  let component: CaptainsLogBookPage;
  let fixture: ComponentFixture<CaptainsLogBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainsLogBookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainsLogBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
