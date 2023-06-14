import { Component, OnInit } from '@angular/core';
import { Donateur } from '../model/donateur.model';
import { AuthService } from '../services/auth.service';
import { DonateurService } from '../services/donateur.service';

@Component({
  selector: 'app-donateurs',
  templateUrl: './donateurs.component.html',
  styleUrls: ['./donateurs.component.css'],
})
export class DonateursComponent implements OnInit {
  //un tableau de ma classe Donateur
  donateurs!: Donateur[];

  constructor(
    private donateurService: DonateurService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerDonateurs();
  }

  chargerDonateurs() {
    this.donateurService.listeDonateur().subscribe((prods) => {
      console.log(prods);
      this.donateurs = prods;
    });
  }
  supprimerDonateur(d: Donateur) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.donateurService.supprimerDonateur(d.id).subscribe(() => {
        console.log('donateur supprimé');
        this.chargerDonateurs();
      });
  }
}
