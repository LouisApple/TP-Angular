import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Species} from '../species';
import {SpeciesService} from "../../species-service.service";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-species-edit',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './species-edit.component.html',
  styleUrl: './species-edit.component.scss'
})
export class SpeciesEditComponent implements OnInit {
  species: Species | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private speciesService: SpeciesService
  ) {
  }

  ngOnInit(): void {
    this.getSpecies();
  }

  getSpecies(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.speciesService.getSpeciesById(id).subscribe(species => this.species = species);
  }

  updateSpecies(): void {
    if (this.species) {
      this.speciesService.updateSpecies(this.species).subscribe(() => this.router.navigate(['/species', this.species?.id]));
    }
  }
}
