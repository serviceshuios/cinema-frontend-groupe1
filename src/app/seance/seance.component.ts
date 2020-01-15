import { Component, OnInit } from '@angular/core';
import { SeanceService } from '../seance.service';
import { Seance } from '../models/seance';
import { ProjectionFilm } from '../models/projectionfilm';
import { ProjectionFilmService } from '../projection-film.service';
import { Salle } from '../models/salle';
import { Film } from '../models/film';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {

  seance: Seance = {
    id: 0,
    heureDebut: new Date()
  };

  seances;

  hour: number;
  minute: number;
  projectionFilm: ProjectionFilm = {
    id: 0,
    dateProjection: new Date(),
    prix: 0,
    salle: new Salle(),
    film: new Film(),
    seance: new Seance()
  };

  projectionFilms;

  constructor(private seanceService: SeanceService, private projectionFilmService: ProjectionFilmService) { }

  ngOnInit() {
    this.getAll();
    this.getAllProjections();
  }

  save() {
    this.seance.heureDebut = this.projectionFilm.dateProjection;
    this.seance.heureDebut.setHours(this.hour, this.minute);

    this.seanceService.add(this.seance)
      .subscribe(data => {
        this.seance = data;
        this.getAll();
        this.seance.id = 0;
        this.seance.heureDebut = new Date();
        this.projectionFilm.seance = this.seance;
        this.projectionFilmService.add(this.projectionFilm)
          .subscribe(data2 => {
            this.projectionFilm = data2;
            this.projectionFilm.id = 0;
            this.projectionFilm.dateProjection = new Date();
            this.projectionFilm.prix = 0;
            this.projectionFilm.salle = new Salle();
            this.projectionFilm.film = new Film();
            this.projectionFilm.seance = new Seance();
          });
      });




  }

  getAll() {
    this.seanceService.getAll()
      .subscribe(data => {
        this.seances = data
      })
  }

  getAllProjections() {
    this.projectionFilmService.getAll()
      .subscribe(data => {
        this.projectionFilms = data
      })
  }


  detail(idSeance: number) {
    this.seanceService.get(idSeance)
      .subscribe(data => {
        this.seance = data;
      })
  }

  delete(idSeance: number) {
    this.seanceService.delete(idSeance)
      .subscribe(data => this.ngOnInit()
      )
  }
}