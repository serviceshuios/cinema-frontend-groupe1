import { Component, OnInit } from '@angular/core';
import { VilleService } from '../ville.service';
import { CinemaService } from '../cinema.service';
import { Ville } from '../models/ville';
import { Cinema } from '../models/cinema';
import { SalleService } from '../salle.service';
import { Salle } from '../models/salle';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private villeService: VilleService, private cinemaService: CinemaService, private salleService: SalleService) { }

  villes;
  cinemas;
  salles;
  projectionFilms;

  ngOnInit() {
    this.getAllVilles();
  }

  getCinemas(v: Ville) {
    this.villeService.getCinemas(v.id)
      .subscribe(data => {
        this.cinemas = data
      })
  }

  getSalles(c: Cinema) {
    this.cinemaService.getSalles(c.id)
      .subscribe(data => {
        this.salles = data
      })
  }

  getProjectionFilms(s: Salle): any {
    this.salleService.getProjectionFilms(s.id)
      .subscribe(data => {
        this.projectionFilms = data
      })
    return this.projectionFilms;
  }

  getAllVilles() {
    this.villeService.getAll()
      .subscribe(data => {
        this.villes = data
      })
  }

}
