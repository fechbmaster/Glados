import { TestBed } from '@angular/core/testing';

import { GladosService } from './glados.service';

describe('GladosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GladosService = TestBed.get(GladosService);
    expect(service).toBeTruthy();
  });
});
