import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Species} from '../species';
import {SpeciesService} from "../../species-service.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-species-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './species-create.component.html',
  styleUrl: './species-create.component.scss'
})
export class SpeciesCreateComponent implements OnInit {
  species: Species = new Species();

  constructor(
    private router: Router,
    private speciesService: SpeciesService
  ) {
  }

  ngOnInit(): void {
  }

  createSpecies(): void {
    this.speciesService.createSpecies(this.species).subscribe(() => this.router.navigate(['/species']));
  }
}
