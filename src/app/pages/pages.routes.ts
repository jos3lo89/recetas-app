import { Routes } from '@angular/router';

export default [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
] as Routes;
