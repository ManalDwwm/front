import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDonateurComponent } from './add-donateur/add-donateur.component';
import { DonateurGuard } from './donateur.guard';
import { DonateursComponent } from './donateurs/donateurs.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

import { LoginComponent } from './login/login.component';

import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateDonateurComponent } from './update-donateur/update-donateur.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'donateurs', component: DonateursComponent },
  {path: 'home', component:HomeComponent},
  {
    path: 'add-donateur',
    component: AddDonateurComponent,
    canActivate: [DonateurGuard],
  },
  {
    path: 'updateDonateur/:id',
    component: UpdateDonateurComponent,
    canActivate: [DonateurGuard],
  },

  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
