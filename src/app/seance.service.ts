import { Injectable } from '@angular/core';
import { Seance } from './models/seance';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  public host = 'http://localhost:8087';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Seance> {
    return this.http.get<Seance>(this.host + '/seances');
  }

  public get(id: number): Observable<Seance> {
    return this.http.get<Seance>(this.host + '/seances/' + id);
  }

  public add(seance: Seance): Observable<Seance> {
    return this.http.post<Seance>(this.host + '/seances', seance);
  }

  public update(id: number, seance: Seance): Observable<Seance> {
    return this.http.put<Seance>(this.host + '/seances' + id, seance);
  }

  public delete(id: number): Observable<Seance> {
    return this.http.delete<Seance>(this.host + '/seances/' + id);
  }
}
