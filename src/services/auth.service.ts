import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private router: Router
  ) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, password })
        .pipe(map(async (user) => {
          await this.storage.set('currentUser', JSON.stringify(user));

            return user;
    }));
  }

  async logout() {
    await this.storage.remove('currentUser');
    this.router.navigate(['/login']);
  }

  getMe() {
      return this.http.get<any>(`${environment.apiUrl}/auth/me`);
  }

  getUsers() {
    return this.http.get<any>(`${environment.apiUrl}/users/all`);
}


}
