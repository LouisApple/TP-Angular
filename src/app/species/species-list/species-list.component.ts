import {Component, OnInit} from '@angular/core';

import {Species} from '../species';
import {SpeciesService} from "../../species-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../auth.service";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-species-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    FormsModule
  ],
  templateUrl: './species-list.component.html',
  styleUrl: './species-list.component.scss'
})
export class SpeciesListComponent implements OnInit {
  species: Species[] = [];
  filter: string = '';

  constructor(private speciesService: SpeciesService, protected authService: AuthService) {
  }

  ngOnInit(): void {
    this.getSpecies();
  }

  getSpecies(): void {
    this.speciesService.getSpecies(this.filter).subscribe(species => this.species = species);
  }

  applyFilter(eventarget: EventTarget | null): void {
    this.filter = (<HTMLInputElement>eventarget).value;
    this.getSpecies();
  }

  deleteSpecies(id: number): void {
    this.speciesService.deleteSpecies(id).subscribe(() => {
      this.species = this.species.filter(specie => specie.id !== id);
    });
  }

}
