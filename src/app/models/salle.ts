import { Place } from './place';
import { Cinema } from './cinema';

export class Salle {
    public id: number;
	public name: string;
	public nombrePlaces: number;
	public cinema: Cinema;
}