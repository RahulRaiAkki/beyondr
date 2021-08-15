import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from "./utils/auth-guard.service";

const routes: Routes = [
  {
    path: 'app',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: '**', redirectTo: 'app'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
