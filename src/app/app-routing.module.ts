import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VilleComponent } from './ville/ville.component';
import { CinemaComponent } from './cinema/cinema.component';
import { CategorieComponent } from './categorie/categorie.component';
import { SalleComponent } from './salle/salle.component';
import { PlaceComponent } from './place/place.component';
import { FilmComponent } from './film/film.component';
import { SeanceComponent } from './seance/seance.component';
import { TicketComponent } from './ticket/ticket.component';


//définir les routes de mon projet
const routes: Routes = [
  //définition des routes
{path: 'villes', component: VilleComponent},
{path: 'cinemas', component: CinemaComponent},
{path: 'categories', component: CategorieComponent},
{path: 'salles', component: SalleComponent},
{path: 'places', component: PlaceComponent},
{path: 'films', component: FilmComponent},
{path: 'seances', component: SeanceComponent},
{path: 'tickets', component: TicketComponent},

//déclaration de la route par défaut
{
  path: '',
  redirectTo: '/villes',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }