import { Injectable } from '@angular/core';
import { Ticket } from './models/ticket';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  public host = 'http://localhost:8087';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Ticket> {
    return this.http.get<Ticket>(this.host + '/tickets');
  }

  public get(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.host + '/tickets/' + id);
  }

  public add(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.host + '/tickets', ticket);
  }

  public update(id: number, ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(this.host + '/tickets' + id, ticket);
  }

  public delete(id: number): Observable<Ticket> {
    return this.http.delete<Ticket>(this.host + '/tickets/' + id);
  }
}
