import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import { VilleComponent } from './ville/ville.component';
import { SalleComponent } from './salle/salle.component';
import { PlaceComponent } from './place/place.component';
import { SeanceComponent } from './seance/seance.component';
import { TicketComponent } from './ticket/ticket.component';
import { CategorieComponent } from './categorie/categorie.component';
import { FilmComponent } from './film/film.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectionFilmComponent } from './projection-film/projection-film.component';

import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ClientComponent } from './client/client.component';
import { VisiteurComponent } from './visiteur/visiteur.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    VilleComponent,
    SalleComponent,
    PlaceComponent,
    SeanceComponent,
    TicketComponent,
    CategorieComponent,
    FilmComponent,
    ProjectionFilmComponent,
    AdministrateurComponent,
    ClientComponent,
    VisiteurComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
