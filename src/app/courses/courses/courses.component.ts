import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../model/course';   //aqui ele importa a lista de ids, cursos e categorias da pasta model/course.ts

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [];
  displayedColumns = ['name' , 'category' ];

  //CoursesService: CoursesService;

  constructor(private coursesService: CoursesService ) {  //isso funcionará por causa do injectable no courses.service.ts
    //this.CoursesService = new CoursesService();
    this.courses = this.coursesService.list();

  }


}
