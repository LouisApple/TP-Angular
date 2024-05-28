import {Component, OnInit} from '@angular/core';

import {Animals} from '../animals';
import {AnimalsService} from "../../animals-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-species-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './animals-list.component.html',
  styleUrl: './species-list.component.scss'
})
export class AnimalListComponent implements OnInit {
  animals: Animals[] = [];

  constructor(private animalsService: AnimalsService, protected authService: AuthService) {
  }

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalsService.getAnimals().subscribe(animals => this.animals = animals);
  }
}
