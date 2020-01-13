import { Injectable } from '@angular/core';
import { Place } from './models/place';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  public host = 'http://localhost:8087';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Place> {
    return this.http.get<Place>(this.host + '/places');
  }

  public get(id: number): Observable<Place> {
    return this.http.get<Place>(this.host + '/places/' + id);
  }

  public add(place: Place): Observable<Place> {
    return this.http.post<Place>(this.host + '/places', place);
  }

  public update(id: number, place: Place): Observable<Place> {
    return this.http.put<Place>(this.host + '/places' + id, place);
  }

  public delete(id: number): Observable<Place> {
    return this.http.delete<Place>(this.host + '/places/' + id);
  }
}
