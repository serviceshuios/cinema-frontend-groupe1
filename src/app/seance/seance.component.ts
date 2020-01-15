import { Component, OnInit } from '@angular/core';
import { SeanceService } from '../seance.service';
import { Seance } from '../models/seance';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {

  seance: Seance = {
    id: 0,
    heureDebut: new Date()
  };

  seances;

  constructor(private seanceService: SeanceService) { }

  ngOnInit() {
    this.getAll();
  }

  save() {
    this.seanceService.add(this.seance)
      .subscribe(data => {
        this.seance = data;
        this.getAll();
        this.seance.id = 0;
        this.seance.heureDebut = new Date();
      });
  }

  getAll() {
    this.seanceService.getAll()
      .subscribe(data => {
        this.seances = data
      })
  }

  detail(idSeance: number) {
    this.seanceService.get(idSeance)
      .subscribe(data => {
        this.seance = data;
      })
  }

  delete(idSeance: number) {
    this.seanceService.delete(idSeance)
      .subscribe(data => this.ngOnInit()
      )
  }
}