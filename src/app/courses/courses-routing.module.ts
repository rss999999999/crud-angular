import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesComponent } from './courses/courses.component';

// Definir as rotas para o módulo de cursos
const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'new', component: CourseFormComponent }   //componente paraa adicionar curso, pasta course-form
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importar as rotas definidas
  exports: [RouterModule] // Exportar o módulo de rotas
})
export class CoursesRoutingModule { }
