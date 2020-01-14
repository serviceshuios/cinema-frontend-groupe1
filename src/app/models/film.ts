import { Categorie } from './categorie';

export class Film {
	public id: number;
	public titre: string;
	public duree: number; //hours
	public realisation: string;
	public description: string;
	public photo: string;
	public dateSortie: Date;
	public categorie: Categorie;
}