import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'courses' },
  { path: 'courses',  loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)}          //o . faz referencia a pasta app, lazy load (carregamento por demanda), dessa forma precisa modificar apenas o courses-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



