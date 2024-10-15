import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // URL del json-server

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/users?username=${username}&password=${password}`)
      .pipe(
        map(users => {
          if (users.length > 0) {
            // Suponiendo que el usuario está autenticado si se encuentra en la base de datos
            localStorage.setItem('isLoggedIn', 'true');
            return true;
          }
          return false;
        })
      );
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
