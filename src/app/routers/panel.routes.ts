import { Route, Routes } from "@angular/router";
import { CustomRoute } from "../types/custom-route";
import { UserRoutes } from "./user.routes";




export const PanelRoutes: CustomRoute = {
  path: 'panel',
  loadComponent: () => import('../layouts/panel/panel.component'),
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      icon: 'home',
      path: 'home',
      title: 'Home',
      loadComponent: () => import('../components/home/home.component')
    },
    UserRoutes,
    {
      icon: 'storefront',
      path: 'stock',
      title: 'Stock',
      loadComponent: () => import('../components/home/home.component')
    }
  ]
}

