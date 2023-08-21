import { Component } from '@angular/core';
import { Course } from '../model/course';   //aqui ele importa a lista de ids, cursos e categorias da pasta model/course.ts

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [
    { _id: "1", name: 'Angular', category: 'front-end'}
  ];
  displayedColumns = ['name' , 'category' ];

}
