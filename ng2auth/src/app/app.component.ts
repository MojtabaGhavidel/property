import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'daily-deals',
  template: `
  <div class="container">
    <nav class="navbar navbar-default">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/dashboard">{{title}}</a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <a routerLink="/deals" routerLinkActive="active">Deals</a>
          </li>
          <li>
            <a routerLink="/upload" *ngIf="authService.loggedIn()" routerLinkActive="active">Upload</a>
          </li>
          <li>
            <a routerLink="/list" *ngIf="authService.loggedIn()" routerLinkActive="active">List</a>
          </li>
          <li>
            <a routerLink="/http" *ngIf="authService.loggedIn()" routerLinkActive="active">Http</a>
          </li>
           <li>
            <a routerLink="/submit-property" *ngIf="authService.loggedIn()" routerLinkActive="active">Submit Property</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a (click)=authService.login() *ngIf="!authService.loggedIn()">Log In</a>
          </li>
          <li>
            <a (click)=authService.logout() *ngIf="authService.loggedIn()">Log Out</a>
          </li>
        </ul>
    </nav>
    <div class="col-sm-12">
      <router-outlet></router-outlet>
    </div>
  </div>
  
  `,
  styles : ['.navbar-right { margin-right: 0px !important}']
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  title = 'Daily Deals';

}
