import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'firstRoute',
    loadChildren: () => import('./first-route/first-route.module').then(m => m.FirstRouteModule)
  },
  {
    path: 'secondRoute',
    loadChildren: () => import('./second-route/second-route.module').then(m => m.SecondRouteModule)
  },
  {
    path: 'thirdRoute',
    loadChildren: () => import('./third-route/third-route.module').then(m => m.ThirdRouteModule)
  },
  {
    path: 'fourthRoute',
    loadChildren: () => import('./fourth-route/fourth-route.module').then(m => m.FourthRouteModule)
  },
  {
    path: 'fifthRoute',
    loadChildren: () => import('./fifth-route/fifth-route.module').then(m => m.FifthRouteModule)
  },
  {
    path: 'sixthRoute',
    loadChildren: () => import('./sixth-route/sixth-route.module').then(m => m.SixthRouteModule)
  },
  {
    path: '**',
    redirectTo: '/firstRoute',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
