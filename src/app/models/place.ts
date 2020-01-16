import { Ticket } from './ticket';
import { Salle } from './salle';

export class Place {
    public id: number;
	public numero: number;
	public latitude: number;
	public longitude: number;
	public altitude: number;
	public salle: Salle
}