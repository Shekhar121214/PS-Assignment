import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FifthRouteComponent } from './fifth-route.component';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



const routes: Routes = [
  {
    path: '',
    component: FifthRouteComponent
  },
];

@NgModule({
  declarations: [FifthRouteComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AgGridModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FifthRouteModule { }
