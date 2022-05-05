import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './shared/utils/constants';

const routes: Routes = [
  {
    path: APP_ROUTES.HOME.BASE_URL,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.NOT_FOUND
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
