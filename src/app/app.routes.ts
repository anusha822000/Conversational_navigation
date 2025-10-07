import { Routes } from '@angular/router';
import { PageComponent } from './page/page';
import { BrokenlinkComponent } from './brokenlink.component/brokenlink.component';
import { AddLinkComponent } from './add-link.component/add-link.component';
import { LinkListComponent } from './link-list.component/link-list.component';
import { UploadDocumentComponent } from './upload-document.component/upload-document.component';
import { ViewDocumentsComponent } from './view-documents.component/view-documents.component';


export const routes: Routes = [



  // default route
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  

  // explicit home
  { path: 'home', component: PageComponent },
   
 {
    path: 'brokenlink',
    component: BrokenlinkComponent,
    children: [
      { path: 'add-link', component: AddLinkComponent },
      { path: 'links', component: LinkListComponent },
      { path: 'upload-document', component: UploadDocumentComponent },
      { path: 'view-documents', component: ViewDocumentsComponent },
      { path: '', redirectTo: 'links', pathMatch: 'full' } // default child
    ]
  },

  // catch-all dynamic route for up to 3 segments
  { path: ':section/:subsection/:page', component: PageComponent },
  { path: ':section/:page', component: PageComponent },
  { path: ':page', component: PageComponent },


  // wildcard for unknown paths
  { path: '**', redirectTo: 'home' }
];
