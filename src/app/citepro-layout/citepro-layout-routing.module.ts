import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiteproLayoutComponent } from './citepro-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CiteproLayoutComponent,
    children: [
      { path: '', redirectTo: 'general-process', pathMatch: 'prefix' },
      {
        path: 'general-process',
        loadChildren: () => import('./general-process/general-process.module').then(m => m.GeneralProcessModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiteproLayoutRoutingModule { }
