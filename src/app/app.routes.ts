import { Routes } from '@angular/router';
import { PageComponent } from './page/page';


export const routes: Routes = [

 
 

  // default route
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // explicit home
  { path: 'home', component: PageComponent },

  // catch-all dynamic route for up to 3 segments
  { path: ':section/:subsection/:page', component: PageComponent },
  { path: ':section/:page', component: PageComponent },
  { path: ':page', component: PageComponent },

  // wildcard for unknown paths
  { path: '**', redirectTo: 'home' }
];
