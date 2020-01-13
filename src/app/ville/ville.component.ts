import { Component, OnInit } from '@angular/core';
import { VilleService } from '../ville.service';
import { Ville } from '../models/ville';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  ville: Ville = {
    id: 0,
    name: '',
    latitude: 0,
    longitude: 0,
    altitude: 0,
  };

  villes;

  constructor(private villeService: VilleService) { }

  ngOnInit() {
    this.getAll();
  }

  save() {
    this.villeService.add(this.ville)
      .subscribe(data => {
        this.ville = data;
        this.getAll();
        this.ville.id = 0;
        this.ville.name = '';
        this.ville.latitude = 0;
        this.ville.longitude = 0;
        this.ville.altitude = 0;
      });
  }

  getAll() {
    this.villeService.getAll()
      .subscribe(data => {
        this.villes = data
      })
  }

  detail(idVille: number) {
    this.villeService.get(idVille)
      .subscribe(data => {
        this.ville = data;
      })
  }

  delete(idVille: number) {
    this.villeService.delete(idVille)
      .subscribe(data => this.ngOnInit()
      )
  }
}