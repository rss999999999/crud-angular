import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

// Definir as rotas para o módulo de cursos
const routes: Routes = [
  { path: '', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importar as rotas definidas
  exports: [RouterModule] // Exportar o módulo de rotas
})
export class CoursesRoutingModule { }
