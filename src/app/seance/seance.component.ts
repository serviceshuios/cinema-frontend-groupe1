import { Component, OnInit } from '@angular/core';
import { SeanceService } from '../seance.service';
import { Seance } from '../models/seance';
import { ProjectionFilm } from '../models/projectionfilm';
import { ProjectionFilmService } from '../projection-film.service';
import { Salle } from '../models/salle';
import { Film } from '../models/film';
import { stringify } from 'querystring';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {

  projectionFilm: ProjectionFilm = {
    id: 0,
    dateProjection: new Date(),
    prix: 0,
    salle: new Salle(),
    film: new Film(),
    seance: new Seance()
  };

  seance: Seance = {
    id: 0,
    heureDebut: new Date()
  };

  seances;

  hour: string;
  heure: string;
  minute: number;

  projectionFilms;

  constructor(private seanceService: SeanceService, private projectionFilmService: ProjectionFilmService) { }

  ngOnInit() {
    this.getAll();
    this.getAllProjections();
  }

  save() {
    this.seance.heureDebut = new Date('01 Jan 1970 ' + this.hour + ' GMT+1');
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
        this.getAll();
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