import {Component, OnInit} from '@angular/core';

import {Species} from '../species';
import {SpeciesService} from "../../species-service.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-species-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './species-list.component.html',
  styleUrl: './species-list.component.scss'
})
export class SpeciesListComponent implements OnInit {
  species: Species[] = [];

  constructor(private speciesService: SpeciesService) {
  }

  ngOnInit(): void {
    this.getSpecies();
  }

  getSpecies(): void {
    this.speciesService.getSpecies().subscribe(species => this.species = species);
  }
}
