import {Species} from "../species/species";
import {Person} from "../persons/person";

export class Animals {
  id: number;
  name : string;
  color : string;
  sex: string;
  species  : Species|null;
  persons  : Person|null;

  constructor() {
    this.id = 0;
    this.name = '';
    this.color = '';
    this.sex = '';
    this.species = null;
    this.persons = null;
  }
}
