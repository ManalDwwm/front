import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //mon attribut user de type User
  user = new User();
  erreur = 0;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLoggedin() {
    console.log(this.user);
    //je declare ma variable locale isValidUser
    //reçoit resultat de signIn() (dans authService) à qui je
    // passe user saisie dans le formulaire pour vérification
    let isValidUser: Boolean = this.authService.SignIn(this.user);
   //true, je peux naviguer sur la racine de mon site
    if (isValidUser) this.router.navigate(['/']);
    //false
    else this.erreur = 1;
  }
}
