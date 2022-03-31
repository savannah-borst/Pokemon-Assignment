import { TestBed } from '@angular/core/testing';

import { PokemonListService } from './pokemon-list.service';

describe('PokemonCatalogueService', () => {
  let service: PokemonListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
