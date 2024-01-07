import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'login', loadComponent: ()=> import('./components/external/login/login.component')
  },

  {
    path: 'messages', loadComponent: ()=> import('./components/internal/interanl.component')
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }

];
