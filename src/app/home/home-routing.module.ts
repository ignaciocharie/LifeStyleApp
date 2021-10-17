import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/schedule/schedule.module').then(m => m.SchedulePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/about',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
