import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstRouteComponent } from './first-route.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FirstRouteComponent
  },
];

@NgModule({
  declarations: [FirstRouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FirstRouteModule { }
