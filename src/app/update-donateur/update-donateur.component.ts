import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Donateur } from '../model/donateur.model';

import { DonateurService } from '../services/donateur.service';

@Component({
  selector: 'app-update-donateur',
  templateUrl: './update-donateur.component.html',
  styleUrls: ['./update-donateur.component.css'],
})
export class UpdateDonateurComponent implements OnInit {
  currentDonateur = new Donateur();

  updatedCatId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private donateurService: DonateurService
  ) {}

  ngOnInit(): void {
    //console , params ,le parametre snapshot pour récuperer mon donateur
    this.donateurService
      .consulterDonateur(this.activatedRoute.snapshot.params['id'])
      .subscribe((dona) => {
        this.currentDonateur = dona;
      });
  }

  updateDonateur() {
    this.donateurService.updateDonateur(this.currentDonateur).subscribe(() => {
    
      this.router.navigate(['donateurs']);
       
    });
  }
}
