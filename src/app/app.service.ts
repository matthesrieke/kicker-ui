import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  user: Object;
  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {

    const options = credentials ? {
      headers: {
        'Authorization': 'Basic ' + btoa(credentials.username + ':' + credentials.password)
      }
    } : {};

      this.http.get('http://localhost:8081/players/me', options).subscribe(response => {

      if (response['nickName']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }

      this.user = response;

      return callback && callback();
    });

  }

}
