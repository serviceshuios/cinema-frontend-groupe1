import { TestBed } from '@angular/core/testing';

import { ProjectionFilmService } from './projection-film.service';

describe('ProjectionFilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectionFilmService = TestBed.get(ProjectionFilmService);
    expect(service).toBeTruthy();
  });
});
