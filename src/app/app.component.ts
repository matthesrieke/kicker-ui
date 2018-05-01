import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  authenticated: boolean;
  players: Object;
  title = 'app';

  constructor(private http: HttpClient, private appService: AppService) {
    console.log('yikes');
  }

  ngOnInit() {
    this.http.get('http://localhost:8081/players').subscribe(data => {
      this.players = JSON.stringify(data);
      this.authenticated = this.appService.authenticated;
    });
  }

}
