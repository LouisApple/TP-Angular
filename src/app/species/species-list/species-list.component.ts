import {Component, OnInit} from '@angular/core';

import {Species} from '../species';
import {SpeciesService} from "../../species-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../auth.service";


@Component({
  selector: 'app-species-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './species-list.component.html',
  styleUrl: './species-list.component.scss'
})
export class SpeciesListComponent implements OnInit {
  species: Species[] = [];

  constructor(private speciesService: SpeciesService, protected authService: AuthService) {
  }

  ngOnInit(): void {
    this.getSpecies();
  }

  getSpecies(): void {
    this.speciesService.getSpecies().subscribe(species => this.species = species);
  }

  deleteSpecies(id: number): void {
    this.speciesService.deleteSpecies(id).subscribe(() => {
      this.species = this.species.filter(specie => specie.id !== id);
    });
  }

}
