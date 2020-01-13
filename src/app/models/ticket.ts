import { Place } from './place';

export class Ticket {
	public id: number;
	public nomClient: string;
	public prix: number;
	public codePayement: number;
	public reservee: boolean;
	public places: Place[];
}