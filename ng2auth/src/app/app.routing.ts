import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { PublicDealsComponent } from './public-deals.component';
import { PrivateDealsComponent } from './private-deals.component';
import { UploadComponent } from './upload.component.ts';
import { ListComponent } from "./list.component";
import {SimpleHTTPComponent} from "./components/SimpleHTTPComponent";



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/deals',
    pathMatch: 'full'
  },
  {
    path: 'deals',
    component: PublicDealsComponent
  },
  {
    path: 'special',
    component: PrivateDealsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'upload',
    component: UploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'http',
    component: SimpleHTTPComponent,
    canActivate: [AuthGuard]
  }
  
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [PublicDealsComponent, PrivateDealsComponent];
