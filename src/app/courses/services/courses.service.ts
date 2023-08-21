import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private httpClient: HttpClient) { }  //injeção de independencia, httpClient eh uma instância que vai ser fornecida pela raiz do projeto 'root', ou seja, ela será global

  list(): Course[] {           //essa lista estava no arquivo courses.component.ts na pasta courses/courses
    return [
      { _id: "1", name: 'Angular', category: 'front-end'}
    ];
  }
}
