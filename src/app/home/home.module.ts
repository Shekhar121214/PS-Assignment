import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'firstRoute',
        loadChildren: () =>
          import('./../first-route/first-route.module').then(
            m => m.FirstRouteModule
          ),
      },
      {
        path: '**',
        redirectTo: '/firstRoute',
      },
    ],
  },
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
