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
    ticket: new Ticket(),
    salle: new Salle()
  };

  places;
  tickets;
  salles;

  constructor(private placeService: PlaceService, private ticketService: TicketService, private salleService: SalleService) { }

  ngOnInit() {
    this.getAll();
    this.getAllTickets();
    this.getAllSalles()
  }

  save() {
    this.placeService.add(this.place)
      .subscribe(data => {
        this.place = data;
        this.getAll();
        this.getAllTickets();
        this.getAllSalles();
        this.place.id = 0;
        this.place.numero = 0;
        this.place.latitude = 0;
        this.place.longitude = 0;
        this.place.altitude = 0;
        this.place.ticket = new Ticket();
        this.place.salle = new Salle();
      });
  }

  getAll() {
    this.placeService.getAll()
      .subscribe(data => {
        this.places = data
      })
  }

  getAllTickets() {
    this.ticketService.getAll()
      .subscribe(data => {
        this.tickets = data
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