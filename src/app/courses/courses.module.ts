import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule  //esse import pega os módulos do app angular material na pasta shared\app-material, dessa forma não preciso ficar misturando os módulos de app com outros módulos, deixando o código mais organizado.

  ]
})
export class CoursesModule { }
