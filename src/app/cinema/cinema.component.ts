import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { Cinema } from '../models/cinema';
import { Ville } from '../models/ville';
import { VilleService } from '../ville.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  cinema: Cinema = {
    id: 0,
    name: '',
    latitude: 0,
    longitude: 0,
    altitude: 0,
    nombreSalles: 0,
    ville: new Ville(),
  };

  cinemas;
  villes;

  constructor(private cinemaService: CinemaService, private villeService: VilleService) { }

  ngOnInit() {
    this.getAll();
    this.getAllVilles()
  }

  save() {
    this.cinemaService.add(this.cinema)
      .subscribe(data => {
        this.cinema = data;
        this.getAll();
        this.getAllVilles();
        this.cinema.id = 0;
        this.cinema.name = '';
        this.cinema.latitude = 0;
        this.cinema.longitude = 0;
        this.cinema.altitude = 0;
        this.cinema.nombreSalles = 0;
        this.cinema.ville = new Ville();
      });
  }

  getAll() {
    this.cinemaService.getAll()
      .subscribe(data => {
        this.cinemas = data
      })
  }

  getAllVilles() {
    this.villeService.getAll()
      .subscribe(data => {
        this.villes = data
      })
  }

  detail(idCinema: number) {
    this.cinemaService.get(idCinema)
      .subscribe(data => {
        this.cinema = data;
      })
  }

  delete(idCinema: number) {
    this.cinemaService.delete(idCinema)
      .subscribe(data => this.ngOnInit()
      )
  }
}