import { Marque } from "./marque.model";

export class Parfum {
    idParfum? : number;
    nomParfum? : string;
    prixParfum? : number;
    dateCreation? : Date ;
    marque! : Marque;
    }