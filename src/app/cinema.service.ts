import { Injectable } from '@angular/core';
import { Cinema } from './models/cinema';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public host = 'http://localhost:8087';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Cinema> {
    return this.http.get<Cinema>(this.host + '/cinemas');
  }

  public get(id: number): Observable<Cinema> {
    return this.http.get<Cinema>(this.host + '/cinemas/' + id);
  }

  public add(filiere: Cinema): Observable<Cinema> {
    return this.http.post<Cinema>(this.host + '/cinemas', filiere);
  }

  public update(id: number, filiere: Cinema): Observable<Cinema> {
    return this.http.put<Cinema>(this.host + '/cinemas' + id, filiere);
  }

  public delete(id: number): Observable<Cinema> {
    return this.http.delete<Cinema>(this.host + '/cinemas/' + id);
  }
}
