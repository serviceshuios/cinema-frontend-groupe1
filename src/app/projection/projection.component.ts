import { Component, OnInit } from '@angular/core';
import { ProjectionService } from '../projection.service';
import { Projection } from '../models/projection';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {

  projection: Projection = {
    id: 0,
    date: new Date(),
    prix: 0
  };

  projections;

  constructor(private projectionService: ProjectionService) { }

  ngOnInit() {
    this.getAll();
  }

  save() {
    this.projectionService.add(this.projection)
      .subscribe(data => {
        this.projection = data;
        this.getAll();
        this.projection.id = 0;
        this.projection.date = new Date();
        this.projection.prix = 0;
      });
  }

  getAll() {
    this.projectionService.getAll()
      .subscribe(data => {
        this.projections = data
      })
  }

  detail(idProjection: number) {
    this.projectionService.get(idProjection)
      .subscribe(data => {
        this.projection = data;
      })
  }

  delete(idProjection: number) {
    this.projectionService.delete(idProjection)
      .subscribe(data => this.ngOnInit()
      )
  }
}