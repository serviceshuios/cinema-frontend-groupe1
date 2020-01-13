import { Categorie } from './categorie';

export class Film {
	public id: number;
	public titre: string;
	public duree: number; //hours
	public realisateur: string;
	public description: string;
	public photo: string;
	public date: Date;
	public categorie: Categorie;
}