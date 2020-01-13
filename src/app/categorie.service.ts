import { Injectable } from '@angular/core';
import { Categorie } from './models/categorie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  public host = 'http://localhost:8087';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Categorie> {
    return this.http.get<Categorie>(this.host + '/categories');
  }

  public get(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(this.host + '/categories/' + id);
  }

  public add(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.host + '/categories', categorie);
  }

  public update(id: number, categorie: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(this.host + '/categories' + id, categorie);
  }

  public delete(id: number): Observable<Categorie> {
    return this.http.delete<Categorie>(this.host + '/categories/' + id);
  }
}
