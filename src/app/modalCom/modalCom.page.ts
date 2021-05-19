import { Component, OnInit } from '@angular/core';
import {
ModalController,
NavParams
} from '@ionic/angular';

@Component({
  selector: 'app-modal-com',
  templateUrl: './modalCom.page.html',
  styleUrls: ['./modalCom.page.scss'],
})
export class ModalComPage implements OnInit {

  commentaire=''
  courses;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    console.log(this.courses)

  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  valider(){
    this.courses.commentaires.push(this.commentaire)
    console.log(this.courses.commentaires)
    this.closeModal()
  }

}
