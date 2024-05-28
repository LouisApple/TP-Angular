import {Component, OnInit} from '@angular/core';

import {Animals} from '../animals';
import {AnimalsService} from "../../animals-service.service";
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
export class AnimalListComponent implements OnInit {
  animals: Animals[] = [];

  constructor(private animalsService: AnimalsService) {
  }

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalsService.getAnimals().subscribe(animals => this.animals = animals);
  }
}
