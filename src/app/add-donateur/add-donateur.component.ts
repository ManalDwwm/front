import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donateur } from '../model/donateur.model';
import { DonateurService } from '../services/donateur.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-donateur',
  templateUrl: './add-donateur.component.html',
  styleUrls: ['./add-donateur.component.css'],
})
export class AddDonateurComponent implements OnInit {
  //j'instencie ma class avec cette attribut qui est vide et il sera rempli avec (le DatBiding ngModel )par le formulaire
  newDonateur = new Donateur();
  message!: string;

  newIdCat!: number;

  updatedCatId!: number;

  validationForm!:FormGroup;
  title = 'formvalidation';
  submitted=false;

  constructor(
    private donateurService: DonateurService,
    private formBuilder:FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
   
  }
  /* this.message =
      ' le donateur ' + this.newDonateur.nom + ' a bien été ajouter'; */

  // elle est appeler dans le html
  addDonateur() {
    this.donateurService
      .ajouterDonateur(this.newDonateur)
      .subscribe((dona) => {
        console.log(dona);
        this.router.navigate(['donateurs']);
      });
  }

}
