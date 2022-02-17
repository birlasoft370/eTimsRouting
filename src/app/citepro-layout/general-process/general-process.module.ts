import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralProcessRoutingModule } from './general-process-routing.module';
import { GeneralProcessComponent } from './general-process.component';
import { GpDashboardComponent } from './components/gp-dashboard/gp-dashboard.component';
import { GpSearchComponent } from './components/gp-search/gp-search.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GpEventEntityComponent } from './components/gp-event-entity/gp-event-entity.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GeneralProcessComponent,
    GpDashboardComponent,
    GpSearchComponent,
    GpEventEntityComponent
  ],
  imports: [
    CommonModule,
    GeneralProcessRoutingModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GeneralProcessModule { }
