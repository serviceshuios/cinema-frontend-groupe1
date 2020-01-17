import { Injectable } from '@angular/core';
import { Salle } from './models/salle';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProjectionFilm } from './models/projectionfilm';
import { Place } from './models/place';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  public host = 'http://localhost:8087';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Salle> {
    return this.http.get<Salle>(this.host + '/salles');
  }

  public get(id: number): Observable<Salle> {
    return this.http.get<Salle>(this.host + '/salles/' + id);
  }

  public getProjectionFilms(id: number): Observable<Array<ProjectionFilm>> {
    return this.http.get<Array<ProjectionFilm>>(this.host + '/salles/' + id + '/projectionfilms');
  }

  public getPlaces(id: number): Observable<Array<Place>> {
    return this.http.get<Array<Place>>(this.host + '/salles/' + id + '/places');
  }

  public add(salle: Salle): Observable<Salle> {
    return this.http.post<Salle>(this.host + '/salles', salle);
  }

  public update(id: number, salle: Salle): Observable<Salle> {
    return this.http.put<Salle>(this.host + '/salles' + id, salle);
  }

  public delete(id: number): Observable<Salle> {
    return this.http.delete<Salle>(this.host + '/salles/' + id);
  }
}
