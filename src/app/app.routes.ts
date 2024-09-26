import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';

export const routes: Routes = [
  /* ******** RUTAS LIBRES ******** */
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full',
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/routes/pages.routes'),
  },

  /* ******** RUTAS PUBLICAS ******** */
  {
    canActivateChild: [publicGuard()],
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes'),
  },

  /* ******** RUTAS PRIVADAS ******** */
  {
    canActivate: [privateGuard()],
    path: 'private',
    loadChildren: () => import('./pages/private/private.routes'),
  },

  /* ******** All routes ******** */

  {
    path: '**',
    redirectTo: '/pages/home',
  },
];
