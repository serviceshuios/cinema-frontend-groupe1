import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { Place } from '../models/place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  place: Place = {
    id: 0,
    numero: 0,
    latitude: 0,
    longitude: 0,
    altitude: 0,
  };

  places;

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.getAll();
  }

  save() {
    this.placeService.add(this.place)
      .subscribe(data => {
        this.place = data;
        this.getAll();
        this.place.id = 0;
        this.place.numero = 0;
        this.place.latitude = 0;
        this.place.longitude = 0;
        this.place.altitude = 0;
      });
  }

  getAll() {
    this.placeService.getAll()
      .subscribe(data => {
        this.places = data
      })
  }

  detail(idPlace: number) {
    this.placeService.get(idPlace)
      .subscribe(data => {
        this.place = data;
      })
  }

  delete(idPlace: number) {
    this.placeService.delete(idPlace)
      .subscribe(data => this.ngOnInit()
      )
  }
}