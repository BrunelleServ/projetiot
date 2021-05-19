import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopCourse',
  templateUrl: 'stopCourse.page.html',
  styleUrls: ['stopCourse.page.scss'],
})
export class StopCoursePage {

  course={temps: '00:00', battementsPM: '000', o2L: '00,00', kilometre: '00,00', nombreDP: '0000000'};

  constructor(
    private router: Router
  ) {}

  goToHomeCourse() {
    this.router.navigate(['/demarre-course'])
  }
  goToCourse() {
    this.router.navigate(['/course-en-cours'])
  }
}
