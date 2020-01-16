import { Cinema } from './cinema';
import { ProjectionFilm } from './projectionfilm';

export class Salle {
    public id: number;
	public name: string;
	public nombrePlaces: number;
	public cinema: Cinema;
	public projectionFilms: ProjectionFilm[];
}