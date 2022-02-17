import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularmaterialModule } from 'src/app/angular-material/angular-material.module';

import { CiteproLayoutRoutingModule } from './citepro-layout-routing.module';
import { CiteproLayoutComponent } from './citepro-layout.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    CiteproLayoutComponent,
    TopHeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CiteproLayoutRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    AngularmaterialModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class CiteproLayoutModule { }
