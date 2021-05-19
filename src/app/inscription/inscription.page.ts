import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: 'inscription.page.html',
  styleUrls: ['inscription.page.scss'],
})
export class InscriptionPage {
  identifiant='';
  adressemail='';
  motdepasse='';
  utilisateur=[];
  id=1;

  constructor(
    private router: Router
  ) {}

  goToHome() {
    this.router.navigate(['/home']);

  }

  goToHomeCourse() {
    this.utilisateur.push({nom: this.identifiant, email: this.adressemail, mdp: this.motdepasse, id: this.id})
    this.id++;
    console.log(this.utilisateur);
    this.router.navigate(['/demarre-course'])
  }

  goToConnect(){
    this.router.navigate(['/connexion'])
  }
}
