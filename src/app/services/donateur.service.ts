import { Injectable } from '@angular/core';
import { Donateur } from '../model/donateur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURLD } from '../config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class DonateurService {
  donateurs!: Donateur[];

  constructor(private http: HttpClient) {}

  listeDonateur(): Observable<Donateur[]> {
    return this.http.get<Donateur[]>(apiURLD);
  }

  ajouterDonateur(dona: Donateur): Observable<Donateur> {
    return this.http.post<Donateur>(apiURLD, dona, httpOptions);
  }

  supprimerDonateur(id: number) {
    const url = `${apiURLD}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterDonateur(id: number): Observable<Donateur> {
    const url = `${apiURLD}/${id}`;
    return this.http.get<Donateur>(url);
  }

  trierDonateur() {
    this.donateurs = this.donateurs.sort((n1, n2) => {
      if (n1.id > n2.id) {
        return 1;
      }
      if (n1.id < n2.id) {
        return -1;
      }
      return 0;
    });
  }

  updateDonateur(dona: Donateur): Observable<Donateur> {
    return this.http.put<Donateur>(apiURLD, dona, httpOptions);
  }

  //pour rechercher des donateurs par nom
  //http://localhost:8080/gestion/apiDonateurs/donasByName/...(le nom)
  rechercherParNom(nom: string): Observable<Donateur[]> {
    const url = `${apiURLD}/donasByName/${nom}`;
    return this.http.get<Donateur[]>(url);
  }
}
