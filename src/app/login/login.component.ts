import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http'; // Import HttpClient
import {FormsModule} from "@angular/forms";

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

  constructor(private http: HttpClient) {} // Inject HttpClient

  onSubmit() {
    const body = {
      username: this.username,
      password: this.password
    };

    this.http.post('http://localhost:8080/auth', body).subscribe(response => {
      console.log(response);

    }, error => {
      console.error(error);

    });
  }
}
