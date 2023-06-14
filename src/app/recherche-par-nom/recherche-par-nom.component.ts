import { Component, OnInit } from '@angular/core';
import { Donateur } from '../model/donateur.model';
import { DonateurService } from '../services/donateur.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css'],
})
export class RechercheParNomComponent implements OnInit {
  nom!: string;
  donateurs!: Donateur[];

  searchTerm!: string;

  constructor(private donateurService: DonateurService) {}
  ngOnInit(): void {
  
  }
  //rechercher donateur par nom coté backend (si on a des milliers de noms)
  rechercherDonas() {
    this.donateurService.rechercherParNom(this.nom).subscribe((donas) => {
      this.donateurs = donas;
      console.log(donas);
    });
  }
}
