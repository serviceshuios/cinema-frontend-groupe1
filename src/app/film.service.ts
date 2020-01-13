import { Injectable } from '@angular/core';
import { Film } from './models/film';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  public host = 'http://localhost:8087';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Film> {
    return this.http.get<Film>(this.host + '/films');
  }

  public get(id: number): Observable<Film> {
    return this.http.get<Film>(this.host + '/films/' + id);
  }

  public add(film: Film): Observable<Film> {
    return this.http.post<Film>(this.host + '/films', film);
  }

  public update(id: number, film: Film): Observable<Film> {
    return this.http.put<Film>(this.host + '/films' + id, film);
  }

  public delete(id: number): Observable<Film> {
    return this.http.delete<Film>(this.host + '/films/' + id);
  }
}
