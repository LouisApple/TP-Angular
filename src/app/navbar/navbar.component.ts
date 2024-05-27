import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from '../auth.service';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(protected authService: AuthService) {
  }

  //logout method from the AuthService
  logout() {
    this.authService.logout();
  }
}
