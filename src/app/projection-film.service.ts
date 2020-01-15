import { Injectable } from '@angular/core';
import { ProjectionFilm } from './models/projectionfilm';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectionFilmService {

  public host = 'http://localhost:8087';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ProjectionFilm> {
    return this.http.get<ProjectionFilm>(this.host + '/projectionfilms');
  }

  public get(id: number): Observable<ProjectionFilm> {
    return this.http.get<ProjectionFilm>(this.host + '/projectionfilms/' + id);
  }

  public add(projectionFilm: ProjectionFilm): Observable<ProjectionFilm> {
    return this.http.post<ProjectionFilm>(this.host + '/projectionfilms', projectionFilm);
  }

  public update(id: number, projectionFilm: ProjectionFilm): Observable<ProjectionFilm> {
    return this.http.put<ProjectionFilm>(this.host + '/projectionfilms' + id, projectionFilm);
  }

  public delete(id: number): Observable<ProjectionFilm> {
    return this.http.delete<ProjectionFilm>(this.host + '/projectionfilms/' + id);
  }
}
