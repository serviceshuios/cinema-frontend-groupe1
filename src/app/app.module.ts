import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import { VilleComponent } from './ville/ville.component';
import { SalleComponent } from './salle/salle.component';
import { PlaceComponent } from './place/place.component';
import { ProjectionComponent } from './projection/projection.component';
import { SeanceComponent } from './seance/seance.component';
import { TicketComponent } from './ticket/ticket.component';
import { CategorieComponent } from './categorie/categorie.component';
import { FilmComponent } from './film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    VilleComponent,
    SalleComponent,
    PlaceComponent,
    ProjectionComponent,
    SeanceComponent,
    TicketComponent,
    CategorieComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
