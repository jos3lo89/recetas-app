import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'detail',
    loadComponent: () =>
      import('./detail/detail.page').then((m) => m.DetailPage),
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./categories/categories.page').then((m) => m.CategoriesPage),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.page').then((m) => m.ProfilePage),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./favorites/favorites.page').then((m) => m.FavoritesPage),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./search/search.page').then((m) => m.SearchPage),
  },
];
