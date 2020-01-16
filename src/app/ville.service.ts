import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ville } from './models/ville';
import { HttpClient } from '@angular/common/http';
import { Cinema } from './models/cinema';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  public host = 'http://localhost:8087';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Ville> {
    return this.http.get<Ville>(this.host + '/villes');
  }

  public get(id: number): Observable<Ville> {
    return this.http.get<Ville>(this.host + '/villes/' + id);
  }

  public getCinemas(id: number): Observable<Cinema> {
    return this.http.get<Cinema>(this.host + '/villes/' + id + '/cinemas');
  }

  public add(ville: Ville): Observable<Ville> {
    return this.http.post<Ville>(this.host + '/villes', ville);
  }

  public update(id: number, ville: Ville): Observable<Ville> {
    return this.http.put<Ville>(this.host + '/villes' + id, ville);
  }

  public delete(id: number): Observable<Ville> {
    return this.http.delete<Ville>(this.host + '/villes/' + id);
  }
}
