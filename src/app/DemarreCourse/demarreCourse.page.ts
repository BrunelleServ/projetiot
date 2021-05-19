import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demarreCourse',
  templateUrl: 'demarreCourse.page.html',
  styleUrls: ['demarreCourse.page.scss'],
})
export class DemarreCoursePage {

  constructor(
    private router: Router
  ) {}

  goToCourse() {
    this.router.navigate(['/course-en-cours'])
  }

  goToMenu() {
    this.router.navigate(['/menu'])
  }

  goToHistoric() {
    this.router.navigate(['/courses-enregistrees'])
  }


}
