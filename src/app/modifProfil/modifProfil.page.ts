import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modifProfil',
  templateUrl: 'modifProfil.page.html',
  styleUrls: ['modifProfil.page.scss'],
})
export class ModifProfilPage {
  utilisateur=
    {
      nom: 'Brunelle Servat',
      email: 'brunelle13@hotmail.fr',
      motDePasse: 'brunelle',
      adresse: '13 Rue des Tulipiers, 13080 France',
      description: 'Salut je m\'appelle Brunelle, j\'ai 19ans et j\'aime le sport! Je cours tout les matins et je mange équilibré',
      id: 0
    }


  constructor(
    private router: Router
  ) {}

  goToMenu() {
    this.router.navigate(['/menu'])
  }

  goToMenuModif() {

console.log(this.utilisateur);
this.router.navigate(['/menu'])
  }
  goToHomeCourse() {
    this.router.navigate(['/demarre-course'])
  }
}
