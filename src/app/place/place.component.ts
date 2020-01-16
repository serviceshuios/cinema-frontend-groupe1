import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { Place } from '../models/place';
import { Ticket } from '../models/ticket';
import { Salle } from '../models/salle';
import { TicketService } from '../ticket.service';
import { SalleService } from '../salle.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  place: Place = {
    id: 0,
    numero: 0,
    latitude: 0,
    longitude: 0,
    altitude: 0,

    salle: new Salle()
  };

  places;
  salles;

  constructor(private placeService: PlaceService, private salleService: SalleService) { }

  ngOnInit() {
    this.getAll();
    this.getAllSalles()
  }

  save() {
    this.placeService.add(this.place)
      .subscribe(data => {
        this.place = data;
        this.getAll();
        this.getAllSalles();
        this.place.id = 0;
        this.place.numero = 0;
        this.place.latitude = 0;
        this.place.longitude = 0;
        this.place.altitude = 0;
        this.place.salle = new Salle();
      });
  }

  getAll() {
    this.placeService.getAll()
      .subscribe(data => {
        this.places = data
      })
  }


  getAllSalles() {
    this.salleService.getAll()
      .subscribe(data => {
        this.salles = data
      })
  }


  detail(idPlace: number) {
    this.placeService.get(idPlace)
      .subscribe(data => {
        this.place = data;
      })
  }

  delete(idPlace: number) {
    this.placeService.delete(idPlace)
      .subscribe(data => this.ngOnInit()
      )
  }
}