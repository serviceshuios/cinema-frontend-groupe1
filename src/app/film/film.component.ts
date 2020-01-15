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
// cheminImage: any = "C:/Users/IN-MP-031/Desktop/photos/bob.jpg";

  film: Film = {

    id: 0,
    titre: '',
    duree: 0,
    realisation: '',
    description: '',
    photo: '',
    dateSortie: new Date(),
    categorie: new Categorie()
  };

   
   


  films;
  categories;

  constructor(private filmService: FilmService, private categorieService: CategorieService) { }

  ngOnInit() {
    this.getAll();
    this.getAllCategories()
  }

  save() {
    this.filmService.add(this.film)
      .subscribe(data => {
        this.film = data;
        this.getAll();
        //this.getAllCategories();
        this.film.id = 0;
        this.film.titre = '';
        this.film.duree = 0;
        this.film.realisation = '';
        this.film.description = '';
        this.film.photo = '';
        this.film.dateSortie = new Date();
        this.film.categorie = new Categorie();
      });
  }

  getAll() {
    this.filmService.getAll()
      .subscribe(data => {
        this.films = data
      })
  }

  getAllCategories() {
    this.categorieService.getAll()
      .subscribe(data => {
        this.categories = data
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
