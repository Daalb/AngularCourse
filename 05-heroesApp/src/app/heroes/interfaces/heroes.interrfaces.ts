// To parse this data:
//
//   import { Convert } from "./file";
//
//   const heroe = Convert.toHeroe(json);

export interface Heroe {
    id?:               string;
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_img?:          string;
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toHeroe(json: string): Heroe[] {
        return JSON.parse(json);
    }

    public static heroeToJson(value: Heroe[]): string {
        return JSON.stringify(value);
    }
}
