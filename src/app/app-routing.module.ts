import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./module/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'activity',
    loadChildren: () => import('./module/activity/activity.module').then(m => m.ActivityModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'account',
    loadChildren: () => import('./module/acount/acount.module').then(m => m.AcountModule),
    canActivate: [AuthGuard]

  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
