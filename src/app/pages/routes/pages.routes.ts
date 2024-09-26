import { Routes } from '@angular/router';

export default [
  {
    path: 'home',
    loadComponent: () => import('../home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'detail',
    loadComponent: () =>
      import('../detail/detail.page').then((m) => m.DetailPage),
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('../categories/categories.page').then((m) => m.CategoriesPage),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('../favorites/favorites.page').then((m) => m.FavoritesPage),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('../search/search.page').then((m) => m.SearchPage),
  },

] as Routes;
