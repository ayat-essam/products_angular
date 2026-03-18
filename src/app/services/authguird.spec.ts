import { TestBed } from '@angular/core/testing';

import { Authguird } from './authguird';

describe('Authguird', () => {
  let service: Authguird;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authguird);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
