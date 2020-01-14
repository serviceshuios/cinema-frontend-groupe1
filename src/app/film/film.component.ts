import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../models/film';
import { Categorie } from '../models/categorie';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film: Film = {
    id: 0,
    titre: '',
    duree: 0,
    realisateur: '',
    description: '',
    photo: '',
    date: new Date(),
    categorie: new Categorie()
  };

  films;
  categories;

  constructor(private filmService: FilmService, private categorieService: CategorieService) { }

  ngOnInit() {
    this.getAll();
    this.categories = this.categorieService.getAll();
  }

  save() {
    this.filmService.add(this.film)
      .subscribe(data => {
        this.film = data;
        this.getAll();
        this.film.id = 0;
        this.film.titre = '';
        this.film.duree = 0;
        this.film.realisateur = '';
        this.film.description = '';
        this.film.photo = '';
        this.film.date = new Date();
        this.film.categorie = new Categorie();
      });
  }

  getAll() {
    this.filmService.getAll()
      .subscribe(data => {
        this.films = data
      })
  }

  detail(idFilm: number) {
    this.filmService.get(idFilm)
      .subscribe(data => {
        this.film = data;
      })
  }

  delete(idFilm: number) {
    this.filmService.delete(idFilm)
      .subscribe(data => this.ngOnInit()
      )
  }
}
