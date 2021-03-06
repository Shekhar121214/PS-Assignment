import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondRouteComponent } from './second-route.component';
import { Routes, RouterModule } from '@angular/router';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SecondRouteComponent
  },
];

@NgModule({
  declarations: [SecondRouteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class SecondRouteModule { }
