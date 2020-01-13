import { Ville } from './ville';
import { Salle } from './salle';

export class Cinema {
	public id: number;
	public name: string;
	public latitude: number;
	public longitude: number;
	public altitude: number;
	public nombreSalles: number;
	public ville: Ville;
	public salles: Salle[];
}