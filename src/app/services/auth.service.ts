import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //par la suite ils seront stockés dans la bdd
  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'manal', password: '123', roles: ['USER'] },
  ];
//pour stocker valeurs user connecté
  public loggedUser!: string;
  //s'il est conncté ou pas
  public isloggedIn: Boolean = false;
  //pour stocker les roles de user qui est connecté
  public roles!: string[];

  constructor(private router: Router) {}

  //methode qui vérifie si le mdp et username sont correct ou pas et elle prend comme parametre user et retourne boolean
  SignIn(user: User): Boolean {
    
    let validUser: Boolean = false;
    //parcourir mon tableau users pour vérifier si curUser passsé en argument existe dans mon tableau
    this.users.forEach((curUser) => {
      if (
        user.username == curUser.username &&
        user.password == curUser.password
      ) {
        //user trouvé
        validUser = true;

//loggedUser je lui affecte username qui est connecté
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
//roles je lui affecte les roles de username qui est connecté
        this.roles = curUser.roles;

      //j'ai crée un Item qui s'appelle loggedUser dans localStoragge
      //et sa valeur: username de l'utilisateur connecté
        localStorage.setItem('loggedUser', this.loggedUser);

      //j'ai crée un Item qui s'appelle isLoggedIn dans localStoragge
      //et sa valeur: boolean convertie en string
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
        this.router.navigate(['/login']);
      }
    });
    //boolean
    return validUser;
  }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }
//pour la contextualisation du menu
  isAdmin(): Boolean {
    if (!this.roles)
      //this.roles== undefiened, pas de role je ne suis pas connecté
      return false;
    return this.roles.indexOf('ADMIN') > -1;
  }
  isUser(): Boolean {
    if (!this.roles)
      //this.roles== undefiened, pas de role je ne suis pas connecté
      return false;
    return this.roles.indexOf('USER') > -1;
  }

  //pour le local storage utilisateur connecté ou pas
  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }
  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });
  }
}
