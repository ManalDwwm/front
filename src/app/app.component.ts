import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'GestionDonationsA';

  constructor(public authService: AuthService, private router: Router) {}
//vérifier localStorage si admin ou user existe 
  ngOnInit() {
    let isloggedin: string | null;
    let loggedUser: string | null;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
//vers page de login si pas déjà connecté
    if (isloggedin != 'true' || !loggedUser) 
    this.router.navigate(['/login']);
    //vers cette methode setLoggedUserFromLocalStorage(loggedUser)
    else this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }

  onLogout() {
    this.authService.logout();
  }
}
