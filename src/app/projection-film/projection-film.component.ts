import { Component, OnInit } from '@angular/core';
import { ProjectionFilm } from '../models/projectionfilm';
import { Salle } from '../models/salle';
import { Film } from '../models/film';
import { SalleService } from '../salle.service';
import { FilmService } from '../film.service';
import { ProjectionFilmService } from '../projection-film.service';
import { Seance } from '../models/seance';

@Component({
  selector: 'app-projection-film',
  templateUrl: './projection-film.component.html',
  styleUrls: ['./projection-film.component.css']
})
export class ProjectionFilmComponent implements OnInit {

  // seance: Seance = {
  //   id: 0,
  //   heureDebut: new Date()
  // };

  projectionFilm: ProjectionFilm = {
    id: 0,
    dateProjection: new Date(),
    prix: 0,
    salle: new Salle(),
    film: new Film(),
    seance: null
  };

  films;
  salles;
  projectionFilms;

  constructor(private projectionFilmService: ProjectionFilmService,
    private salleService: SalleService, private filmService: FilmService) { }

  getAllSalles() {
    this.salleService.getAll()
      .subscribe(data => {
        this.salles = data
      })
  }

  getAllFilms() {
    this.filmService.getAll()
      .subscribe(data => {
        this.films = data
      })
  }

  getAll() {
    this.projectionFilmService.getAll()
      .subscribe(data => {
        this.projectionFilms = data
      })
  }

  ngOnInit() {
    this.getAllSalles();
    this.getAllFilms();
    this.getAll();
  }

  save() {
    this.projectionFilmService.add(this.projectionFilm)
      .subscribe(data => {
        this.projectionFilm = data;
        this.getAll();
        this.projectionFilm.id = 0;
        this.projectionFilm.dateProjection = new Date();
        this.projectionFilm.prix = 0;
        this.projectionFilm.salle = new Salle();
        this.projectionFilm.film = new Film();
        this.projectionFilm.seance = null;
      });
  }

  detail(id: number) {
    this.projectionFilmService.get(id)
      .subscribe(data => {
        this.projectionFilm = data;
      })
  }

  delete(id: number) {
    this.projectionFilmService.delete(id)
      .subscribe(data => this.ngOnInit()
      )
  }

}
