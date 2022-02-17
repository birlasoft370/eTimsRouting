import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpDashboardComponent } from './components/gp-dashboard/gp-dashboard.component';
import { GpEventEntityComponent } from './components/gp-event-entity/gp-event-entity.component';
import { GeneralProcessComponent } from './general-process.component';

const routes: Routes = [{
  path: '', component: GeneralProcessComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
    { path: 'dashboard', component: GpDashboardComponent },
    { path: 'event/:ticketNo/:eventId', component: GpEventEntityComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralProcessRoutingModule { }
