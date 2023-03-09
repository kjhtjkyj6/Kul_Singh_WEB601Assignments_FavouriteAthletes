import { TestBed } from '@angular/core/testing';

import { FavouriteAthletService } from './favourite-athlet.service';

describe('FavouriteAthletService', () => {
  let service: FavouriteAthletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteAthletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
