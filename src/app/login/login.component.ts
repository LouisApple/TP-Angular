import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from '../auth.service';

interface AuthResponse {
  id_token: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
  }

  onSubmit() {
    const body = {
      username: this.username,
      password: this.password
    };

    this.http.post<AuthResponse>('http://localhost:8080/auth', body).subscribe(response => {
      console.log(response);
      const token = response.id_token;
      console.log(token); // Log the token
      localStorage.setItem('token', token); // Save the token in local storage

      // If the token exists, redirect to the home page
      if (token) {
        this.router.navigate(['/home']); // Redirect to home page
      }
    }, error => {
      console.error(error);
    });
  }

  // Add the logout method here
  logout() {
    this.authService.logout();
  }
}
