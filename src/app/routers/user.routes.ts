import { CustomRoute } from "../types/custom-route";

export const UserRoutes: CustomRoute = {
  icon: 'account_circle',
  path: 'users',
  title: 'Users',
  loadComponent: () => import('../layouts/users/users.component'),
  children: [
    {
      path: '',
      redirectTo: 'employeds',
      pathMatch: 'full'
    },
    {
      icon: 'badge',
      path: 'employeds',
      title: 'employed',
      loadComponent: () => import('../layouts/users/users.component'),
    },
    {
      icon: 'supervised_user_circle',
      path: 'consumiers',
      title: 'consumier',
      loadComponent: () => import('../layouts/users/users.component'),
    },
    {
      icon: 'person',
      path: 'distributors',
      title: 'distributors',
      loadComponent: () => import('../layouts/users/users.component'),
    }
  ]
}
