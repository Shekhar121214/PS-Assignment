import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdRouteComponent } from './third-route.component';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { StartPauseComponent } from './start-pause/start-pause.component';
import { LogsComponent } from './logs/logs.component';
import { DataComponent } from './data/data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: '',
    component: ThirdRouteComponent
  },
];

@NgModule({
  declarations: [ThirdRouteComponent, TimerComponent, StartPauseComponent, LogsComponent, DataComponent],
  imports: [
    CommonModule,
    FormsModule,  ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ThirdRouteModule { }
