import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourthRouteComponent } from './fourth-route.component';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';
import { LogsComponent } from './logs/logs.component';
import { TimerComponent } from './timer/timer.component';
import { StartPauseComponent } from './start-pause/start-pause.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: '',
    component: FourthRouteComponent
  },
];

@NgModule({
  declarations: [FourthRouteComponent, DataComponent, LogsComponent, TimerComponent, StartPauseComponent],
  imports: [
    CommonModule,
    FormsModule,  ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class FourthRouteModule { }
