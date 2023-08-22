import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { delay, first } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/ courses.json';

  constructor(private httpClient: HttpClient) { }

  // Retorna uma lista de cursos
  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(5000),                            //aqui eu dou um delay no carregamento para ver o spinning de carregamento courses/courses/courses.component.html : <mat-spinner></mat-spinner>
      tap(courses => console.log(courses)));  //aqui eu usarei manipulação reativa, os dados poderão passar por esse cano e serão manipulados.
  }
}
