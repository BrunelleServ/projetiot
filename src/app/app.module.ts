import { DemarreCoursePage } from './DemarreCourse/demarreCourse.page';
import { ModalComPage } from './modalCom/modalCom.page';
import { CoursePage } from './course/course.page';
import { ModifProfilPage } from './modifProfil/modifProfil.page';
import { MenuPage } from './menu/menu.page';
import { StopCoursePage } from './stopCourse/stopCourse.page';
import { InscriptionPage } from './inscription/inscription.page';
import { ConnexionPage } from './connexion/connexion.page';
import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseEnCoursPage } from './courseEnCours/courseEnCours.page';
import { ModalPage } from './modal/modal.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent, HomePage, ConnexionPage, InscriptionPage, CourseEnCoursPage, StopCoursePage, MenuPage, ModifProfilPage, CoursePage, ModalPage, ModalComPage, DemarreCoursePage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule,
    AppRoutingModule, FormsModule, HttpClientModule,  IonicStorageModule.forRoot(),
    ReactiveFormsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
