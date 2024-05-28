import {Species} from "../species/species";

export class Animals {
  id: number;
  name : string;
  color : string;
  sex: string;
  species  : Species|null;
  persons  : string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.color = '';
    this.sex = '';
    this.species = null;
    this.persons = '';
  }
}
