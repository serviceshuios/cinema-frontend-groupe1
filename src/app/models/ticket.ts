import { Place } from './place';
import { Projection } from './projection';

export class Ticket {
	public id: number;
	public nomClient: string;
	public prix: number;
	public codePayement: number;
	public reservee: boolean;
	public projection: Projection;
}