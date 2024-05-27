import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {jwtDecode} from 'jwt-decode';

interface AuthResponse {
  id_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  login(username: string, password: string) {
    const body = {
      username: username,
      password: password
    };

    return this.http.post<AuthResponse>('http://localhost:8080/auth', body).toPromise().then(response => {
      let token;
      if (response && "id_token" in response) {
        token = response.id_token;
      }
      if (token) {
        const decodedToken = jwtDecode<any>(token);
        localStorage.setItem('token', token);
        localStorage.setItem('role', decodedToken.auth);
        return token;
      } else {
        throw new Error('Token is undefined');
      }
    });
  }
}
