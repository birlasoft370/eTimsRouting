import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./citepro-layout/citepro-layout.module').then(m => m.CiteproLayoutModule),
    canActivate:[AuthGuard]
  },
  { path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },

  { path: 'change-password', loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule) },

  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },

  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
