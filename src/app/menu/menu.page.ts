import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class MenuPage {

  utilisateur=
    {
      nom: 'Brunelle Servat',
      adresse: '13 Rue des Tulipiers, 13080 France',
      description: 'Salut je m\'appelle Brunelle, j\'ai 19ans et j\'aime le sport! Je cours tout les matins et je mange équilibré'
    }


  constructor(
    private router: Router
  ) {}

  goToHomeCourse() {
    this.router.navigate(['/demarre-course'])
  }

  goToHome() {
    this.router.navigate(['/home']);

  }

  goToModif() {
    this.router.navigate(['/modification-profil'])
  }

  goToHistoric() {
    this.router.navigate(['/courses-enregistrees'])
  }

}
