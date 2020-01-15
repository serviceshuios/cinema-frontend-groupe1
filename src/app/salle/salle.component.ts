import { Component, OnInit } from '@angular/core';
import { SalleService } from '../salle.service';
import { Salle } from '../models/salle';
import { Cinema } from '../models/cinema';

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

  constructor(private salleService: SalleService) { }

  ngOnInit() {
    this.getAll();
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
        this.salle.places = [];
      });
  }

  getAll() {
    this.salleService.getAll()
      .subscribe(data => {
        this.salles = data
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