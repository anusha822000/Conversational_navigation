import { Routes } from '@angular/router';
import { Page } from './page/page'; // your new component

export const routes: Routes = [
  // default route
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // explicit home
  { path: 'home', component: Page },

  // catch-all dynamic route for up to 3 segments
  { path: ':section/:subsection/:page', component: Page },
  { path: ':section/:page', component: Page },
  { path: ':page', component: Page },

  // wildcard for unknown paths
  { path: '**', redirectTo: 'home' }
];
