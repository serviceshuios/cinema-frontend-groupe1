import { Component, OnInit } from '@angular/core';
import { VilleService } from '../ville.service';
import { CinemaService } from '../cinema.service';
import { Ville } from '../models/ville';
import { Cinema } from '../models/cinema';
import { SalleService } from '../salle.service';
import { Salle } from '../models/salle';
import { ProjectionFilm } from '../models/projectionfilm';
import { ProjectionFilmService } from '../projection-film.service';
import { TicketService } from '../ticket.service';
import { Ticket } from '../models/ticket';
import { Place } from '../models/place';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private villeService: VilleService, private cinemaService: CinemaService, private salleService: SalleService,
    private projectionFilmService: ProjectionFilmService) { }

  villes;
  cinemas;
  salles;
  places;
  tickets = [];
  projectionFilms;
  currentSalleId: number;

  ticket: Ticket = {
    id: 0,
    nomClient: '',
    prix: 0,
    codePayement: 0,
    reservee: false,
    place: new Place()
  };

  ngOnInit() {
    this.getAllVilles();
  }

  getCinemas(v: Ville) {
    this.villeService.getCinemas(v.id)
      .subscribe(data => {
        this.cinemas = data
      })
  }

  getTickets(pf: ProjectionFilm){
    this.getPlaces(pf);
    this.places.forEach(place => {
          this.ticket.place = place;
          this.tickets.push(this.ticket);
          this.ticket.id = 0;
          this.ticket.nomClient = '';
          this.ticket.prix = 0;
          this.ticket.codePayement = 0;
          this.ticket.reservee = false;
          this.ticket.place = new Place();
        });
  }

  getPlaces(pf: ProjectionFilm) {
    this.salleService.getPlaces(pf.salle.id)
      .subscribe(data => {
        this.places = data
      })
    this.currentSalleId = pf.salle.id;
  }

  getSalles(c: Cinema) {
    this.cinemaService.getSalles(c.id)
      .subscribe(data => {
        this.salles = data
        this.salles.forEach(salle => {
          this.salleService.getProjectionFilms(salle.id)
            .subscribe(data2 => {
              salle.projectionFilms = data2
            })
        });
      })
  }

  getProjectionFilms(s: Salle) {
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
