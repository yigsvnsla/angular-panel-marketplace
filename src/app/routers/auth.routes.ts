import { Route, Routes } from "@angular/router";

export const AuthRoutes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>  import('../layouts/signin/signin.component')
  }
]
