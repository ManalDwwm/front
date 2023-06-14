import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonateursComponent } from './donateurs/donateurs.component';
import { AddDonateurComponent } from './add-donateur/add-donateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateDonateurComponent } from './update-donateur/update-donateur.component';
import { HttpClientModule } from '@angular/common/http';

import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DonateursComponent,
    AddDonateurComponent,
    UpdateDonateurComponent,
    RechercheParNomComponent,
    LoginComponent,
    ForbiddenComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
