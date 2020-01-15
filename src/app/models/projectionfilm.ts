import { Salle } from './salle';
import { Film } from './film';

export class ProjectionFilm {
	id: number;
	dateProjection: Date;
	prix: number;
	salle: Salle;
	film: Film;
}