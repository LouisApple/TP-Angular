import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Animals} from "./animals/animals"

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private apiUrl = 'http://localhost:8080/api/animal';

  constructor(private http: HttpClient) {
  }

  getAnimals(): Observable<Animals[]> {
    return this.http.get<Animals[]>(this.apiUrl);
  }

  getAnimalsById(id: number): Observable<Animals> {
    return this.http.get<Animals>(`${this.apiUrl}/${id}`);
  }

  createAnimals(Animals: Animals): Observable<Animals> {
    return this.http.post<Animals>(this.apiUrl, Animals);
  }

  updateAnimals(Animals: Animals): Observable<Animals> {
    return this.http.put<Animals>(`${this.apiUrl}/${Animals.id}`, Animals);
  }

  deleteAnimals(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
