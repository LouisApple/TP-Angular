import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Animals} from '../animals';
import {FormsModule} from "@angular/forms";
import {AnimalsService} from "../../animals-service.service";

@Component({
  selector: 'app-animal-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './animal-create.component.html',
  styleUrl: './animal-create.component.scss'
})
export class AnimalCreateComponent implements OnInit {
  animals: Animals = new Animals();

  constructor(
    private router: Router,
    private animalsService: AnimalsService
  ) {
  }

  ngOnInit(): void {
  }

  createAnimal(): void {
    console.log(this.animals)
    this.animalsService.createAnimals(this.animals).subscribe(() => this.router.navigate(['/animals']));
  }
}
