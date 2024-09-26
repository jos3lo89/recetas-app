import { Routes } from '@angular/router';

export default [
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.page').then((m) => m.ProfilePage),
  },
] as Routes;
