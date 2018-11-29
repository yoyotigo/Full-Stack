import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any; 
  admin: any;
  constructor(private http: Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/register', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

    authenticateUser(admin) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get('/admin', admin)
        .pipe(map(res => res.json()));
    }

    getProfile() {
      let headers = new Headers();
      this.loadToken();
      headers.append('Authorization', this.authToken);
      headers.append('Content-Type', 'application/json');
      return this.http.get('users/profile', {headers: headers})
        .pipe(map(res => res.json()));
    }

    storeUserData(token, admin) {
      localStorage.setItem('id_token', token);
      localStorage.setItem('admin', JSON.stringify(admin));
      this.authToken = token;
      this.admin = admin;
    }

    loadToken() {
      const token = localStorage.getItem('id_token');
      this.authToken = token;
    }

    loggedIn() {
      if (localStorage.id_token == undefined) {
        return false
      } else {
        const helper = new JwtHelperService();
        return !helper.isTokenExpired(localStorage.id_token);
      }
     
    }

    logout() {
      this.authToken = null;
      this.admin = null;
      localStorage.clear();
    }

}