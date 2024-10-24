import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OtherRouteComponent } from './other-route.component';
import { MainRouteComponent } from './main-route.component';

export const routes: Routes = [
  {
    title: 'Main',
    path: 'main',
    component: MainRouteComponent
  },
  {
    title: 'Other',
    path: 'other',
    component: OtherRouteComponent
  }
];
