import { Route } from "@angular/router";
export type CustomRoute = Omit<Route, 'children'> & { children?: CustomRoute[], icon?: string }
