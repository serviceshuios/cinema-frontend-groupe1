import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  categorie: Categorie = {
    id: 0,
    name: ''
  };

  categories;

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.getAll();
  }

  save() {
    this.categorieService.add(this.categorie)
      .subscribe(data => {
        this.categorie = data;
        this.getAll();
        this.categorie.id = 0;
        this.categorie.name = '';
      });
  }

  getAll() {
    this.categorieService.getAll()
      .subscribe(data => {
        this.categories = data
      })
  }

  detail(idCategorie: number) {
    this.categorieService.get(idCategorie)
      .subscribe(data => {
        this.categorie = data;
      })
  }

  delete(idCategorie: number) {
    this.categorieService.delete(idCategorie)
      .subscribe(data => this.ngOnInit()
      )
  }
}