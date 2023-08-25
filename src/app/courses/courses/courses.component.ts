import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable <Course[]>;
  //courses: Course[] = [];
  displayedColumns = ['name' , 'category', 'actions' ];

  //CoursesService: CoursesService;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,   //isso funcionará por causa do injectable no courses.service.ts
    private router: Router,
    private route: ActivatedRoute
    ) {
    //this.CoursesService = new CoursesService();
    //this.coursesService.list().subscribe(courses => this.courses = courses);
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
      });
    };

    onAdd() {
      this.router.navigate(['new'], {relativeTo: this.route});  //aqui eu não preciso declarar dentro do navigate courses/new, pois estou usando o relativeTo, dessa forma qndo apertar o botão do add, serei redirecionado ao localhost:4200/courses/new, em outras palavras posso trocar, por exemplo, o nome da rota (/shared/app-routing.module.ts) de courses para casa e acessarei de forma automática o localhost:4200/casa/new sem ter que ficar alterando as rotas de course para casa em vários arquivos.
    }
  }

