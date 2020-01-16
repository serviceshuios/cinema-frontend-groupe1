import { Component, OnInit } from '@angular/core';
import { VilleService } from '../ville.service';
import { Ville } from '../models/ville';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private villeService: VilleService) { }

  villes;

  ngOnInit() {
    this.getAllVilles();
  }

  getAllVilles() {
    this.villeService.getAll()
      .subscribe(data => {
        this.villes = data
      })
  }

}
