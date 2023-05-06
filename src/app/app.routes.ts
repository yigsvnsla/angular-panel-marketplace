import { Routes } from '@angular/router';
import { AuthRoutes } from './routers/auth.routes';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'auth',
  },
  ...AuthRoutes
];
