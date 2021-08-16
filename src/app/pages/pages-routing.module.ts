import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        // canActivate: [AuthGuardService],
        component: HomeComponent,
        data: {
          title: 'Home'
        }
      },
      // {
      //   path: 'admin',
      //   canActivate: [AuthGuardService],
      //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
