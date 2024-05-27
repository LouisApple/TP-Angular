import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {
  }

  async onSubmit() {
    try {
      await this.authService.login(this.username, this.password);
      await this.router.navigate(['/home']);
    } catch (error) {
      this.errorMessage = 'Failed to login. Please check your username and password.';
    }
  }

  logout() {
    this.authService.logout();
  }
}
