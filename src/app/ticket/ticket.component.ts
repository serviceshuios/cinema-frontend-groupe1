import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket: Ticket = {
    id: 0,
    nomClient: '',
    prix: 0,
    codePayement: 0,
    reservee: false,
    places: []
  };

  tickets;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.getAll();
  }

  save() {
    this.ticketService.add(this.ticket)
      .subscribe(data => {
        this.ticket = data;
        this.getAll();
        this.ticket.id = 0;
        this.ticket.nomClient = '';
        this.ticket.prix = 0;
        this.ticket.codePayement = 0;
        this.ticket.reservee = false;
        this.ticket.places = [];
      });
  }

  getAll() {
    this.ticketService.getAll()
      .subscribe(data => {
        this.tickets = data
      })
  }

  detail(idTicket: number) {
    this.ticketService.get(idTicket)
      .subscribe(data => {
        this.ticket = data;
      })
  }

  delete(idTicket: number) {
    this.ticketService.delete(idTicket)
      .subscribe(data => this.ngOnInit()
      )
  }
}