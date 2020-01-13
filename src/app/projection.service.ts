import { Injectable } from '@angular/core';
import { Projection } from './models/projection';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {

  public host = 'http://localhost:8087';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Projection> {
    return this.http.get<Projection>(this.host + '/projections');
  }

  public get(id: number): Observable<Projection> {
    return this.http.get<Projection>(this.host + '/projections/' + id);
  }

  public add(projection: Projection): Observable<Projection> {
    return this.http.post<Projection>(this.host + '/projections', projection);
  }

  public update(id: number, projection: Projection): Observable<Projection> {
    return this.http.put<Projection>(this.host + '/projections' + id, projection);
  }

  public delete(id: number): Observable<Projection> {
    return this.http.delete<Projection>(this.host + '/projections/' + id);
  }
}
