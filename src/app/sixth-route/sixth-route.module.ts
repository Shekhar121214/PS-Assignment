import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SixthRouteComponent } from './sixth-route.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: SixthRouteComponent
  },
];

@NgModule({
  declarations: [SixthRouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SixthRouteModule { }
