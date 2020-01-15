import { Salle } from './salle';
import { Film } from './film';
import { Seance } from './seance';

export class ProjectionFilm {
	id: number;
	dateProjection: Date;
	prix: number;
	salle: Salle;
	film: Film;
	seance: Seance;
}