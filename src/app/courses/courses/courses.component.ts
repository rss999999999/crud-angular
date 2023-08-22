import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Observable <Course[]>;
  //courses: Course[] = [];
  displayedColumns = ['name' , 'category' ];

  //CoursesService: CoursesService;

  constructor(private coursesService: CoursesService ) {  //isso funcionará por causa do injectable no courses.service.ts
    //this.CoursesService = new CoursesService();
    //this.coursesService.list().subscribe(courses => this.courses = courses);
    this.courses = this.coursesService.list();
  }
}
