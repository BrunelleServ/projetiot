import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courseEnCours',
  templateUrl: 'courseEnCours.page.html',
  styleUrls: ['courseEnCours.page.scss'],
})
export class CourseEnCoursPage {

  course={temps: '00:00', battementsPM: '000', o2L: '00,00', kilometre: '00,00', nombreDP: '0000000'};

  constructor(
    private router: Router
  ) {}

  goToStop() {

    this.router.navigate(['/stop-course'])
  }
}
