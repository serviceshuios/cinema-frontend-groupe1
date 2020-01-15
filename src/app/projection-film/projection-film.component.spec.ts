import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionFilmComponent } from './projection-film.component';

describe('ProjectionFilmComponent', () => {
  let component: ProjectionFilmComponent;
  let fixture: ComponentFixture<ProjectionFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
