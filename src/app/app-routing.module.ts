import { DemarreCoursePage } from './DemarreCourse/demarreCourse.page';
import { CoursePage } from './course/course.page';
import { ModifProfilPage } from './modifProfil/modifProfil.page';
import { MenuPage } from './menu/menu.page';
import { StopCoursePage } from './stopCourse/stopCourse.page';
import { InscriptionPage } from './inscription/inscription.page';
import { ConnexionPage } from './connexion/connexion.page';
import { HomePage } from './home/home.page';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CourseEnCoursPage } from './courseEnCours/courseEnCours.page';

const routes: Routes = [
  {
    path: 'home',
   component: HomePage
  },
  {
    path: 'connexion',
   component: ConnexionPage
  },
  {
    path: 'inscription',
   component: InscriptionPage
  },
  {
  path: 'course-en-cours',
   component: CourseEnCoursPage
  },
  {
  path: 'stop-course',
   component: StopCoursePage
  },
  {
  path: 'menu',
   component: MenuPage
  },
  {
  path: 'modification-profil',
   component: ModifProfilPage
  },
  {
  path: 'courses-enregistrees',
   component: CoursePage
  },
  {
  path: 'demarre-course',
   component: DemarreCoursePage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
