import { Component, OnInit } from '@angular/core';
import { SalleService } from '../salle.service';
import { Salle } from '../models/salle';
import { Cinema } from '../models/cinema';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

  salle: Salle = {
    id: 0,
    name: '',
    nombrePlaces: 0,
    cinema: new Cinema()
  };

  salles;
  cinemas;

  constructor(private salleService: SalleService, private cinemaService: CinemaService) { }

  ngOnInit() {
    this.getAll();
    this.getAllCinemas();
  }

  save() {
    this.salleService.add(this.salle)
      .subscribe(data => {
        this.salle = data;
        this.getAll();
        this.salle.id = 0;
        this.salle.name = '';
        this.salle.nombrePlaces = 0;
        this.salle.cinema = new Cinema();
      });
  }

  getAll() {
    this.salleService.getAll()
      .subscribe(data => {
        this.salles = data
      })
  }

  getAllCinemas() {
    this.cinemaService.getAll()
      .subscribe(data => {
        this.cinemas = data
      })
  }

  detail(idSalle: number) {
    this.salleService.get(idSalle)
      .subscribe(data => {
        this.salle = data;
      })
  }

  delete(idSalle: number) {
    this.salleService.delete(idSalle)
      .subscribe(data => this.ngOnInit()
      )
  }
}