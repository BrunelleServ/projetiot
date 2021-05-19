import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: 'connexion.page.html',
  styleUrls: ['connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  utilisateurs=[
    {
      identifiant: 'Brunelle',
      mdp: 'coucou',
      id: 0,
    },
    {
      identifiant: 'Brubru',
      mdp: 'yoo',
      id: 1,
    },
  ];
  users: any;
  identifiant1='';
  mdp1='';
  id1='';
  Data;

  constructor(
    public toastController: ToastController,
    private router: Router,
    private auth: AuthService
  ) {}

  async ngOnInit() {
    this.users = await this.auth.getUsers().toPromise();


    console.log(this.users)
  }

  goToHome() {
    this.router.navigate(['/home']);

  }

  goToHomeCourse() {
    for(let i=0; i < this.utilisateurs.length; i++){
      if(this.identifiant1== this.utilisateurs[i].identifiant && this.mdp1 == this.utilisateurs[i].mdp){
        console.log(this.utilisateurs[i]);
        this.router.navigate(['/demarre-course']);

        return
      }
      else {
        console.log('coucou')
        this.presentToast()
      }
    }

  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Identifiant ou Mot de passe incorects',
      duration: 2000,
       color: "danger",
       position: "middle"

    });
    toast.present();
  }

  goToInscription(){
    this.router.navigate(['/inscription'])
  }

}
