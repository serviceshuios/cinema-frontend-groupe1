import { Ticket } from './ticket';
import { Seance } from './seance';

export class Projection {
	public id: number;
	public date: Date;
	public prix: number;
	public tickets: Ticket[];
	public seance: Seance;
}