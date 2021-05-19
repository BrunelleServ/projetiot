import { Router } from '@angular/router';
import { ModalComPage } from './../modalCom/modalCom.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-course',
  templateUrl: 'course.page.html',
  styleUrls: ['course.page.scss'],
})
export class CoursePage {
  dataReturned: any;
  dataReturned2: any;

  courses = [{date: '22/04/21', temps: '15:00', kilometre: '4,01', battementsPM: '160', o2l: '', nombreDP: '5800', commentaires: ['1er commentaire', '2e commentaire', '3e commentaire', '4e commentaire', '5e commentaire', '6e commentaire', '7e commentaire', '8e commentaire',], poucebool: true, id: 4
  },
  {
    date: '20/04/21', temps: '10:00', kilometre: '3,03', battementsPM: '160', o2l: '', nombreDP: '5000', commentaires: ['1er commentaire', '2e commentaire', '3e commentaire', '4e commentaire', '5e commentaire', '6e commentaire', '7e commentaire', '8e commentaire',], poucebool: true, id: 3
  },
  {
    date: '18/04/21', temps: '05:00', kilometre: '1,50', battementsPM: '165', o2l: '', nombreDP: '3000', commentaires: ['1er commentaire', '2e commentaire', '3e commentaire', '4e commentaire', '5e commentaire', '6e commentaire', '7e commentaire', '8e commentaire',], poucebool: true, id: 2
  },
  {
    date: '16/04/21', temps: '07:00', kilometre: '1,50', battementsPM: '170', o2l: '', nombreDP: '4000', commentaires: ['1er commentaire', '2e commentaire', '3e commentaire', '4e commentaire', '5e commentaire', '6e commentaire', '7e commentaire', '8e commentaire',], poucebool: false, id: 1
  },
  {
    date: '14/04/21', temps: '09:00', kilometre: '2,50', battementsPM: '180', o2l: '', nombreDP: '4500', commentaires: ['1er commentaire', '2e commentaire', '3e commentaire', '4e commentaire', '5e commentaire', '6e commentaire', '7e commentaire', '8e commentaire',], poucebool: false, id: 0
  }];

  constructor(
    public modalController: ModalController,
    private router: Router
  ) {}

  async openModal(id) {


    for(let i=0; i < this.courses.length; i++){
      if (this.courses[i].id==id){

        const modal = await this.modalController.create({
          component: ModalPage,
          componentProps: {
            courses: this.courses[i]
          }
        });
      return await modal.present();
      }
    }
  }

  async openModalCom(id) {
    for(let i=0; i < this.courses.length; i++){
      if (this.courses[i].id==id){
    const modalCom = await this.modalController.create({
      component: ModalComPage,
      componentProps: {
        courses: this.courses[i]
      }
    });



    return await modalCom.present();
  }
  }
  }

  goToHomeCourse() {
    this.router.navigate(['/demarre-course'])
  }

  // changePouce(id){
  //   for(let i=0; i < this.courses.length; i++) {
  //     if (this.courses[i].id==id){
  //       if (this.courses[i].poucebool= true){
  //         this.courses[i].poucebool= false
  //       }
  //       else(this.courses[i].poucebool=false)
  //       this.courses[i].poucebool=true
  //     }
  //   }
  // }
}
