import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Action } from 'rxjs/internal/scheduler/Action';
import { EventtableDataSource, EventtableItem } from './eventtable-datasource';

@Component({
  selector: 'app-eventtable',
  templateUrl: './eventtable.component.html',
  styleUrls: ['./eventtable.component.scss']
})
export class EventtableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EventtableItem>;
  dataSource: EventtableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Eventid', 'VoilationdateTime', 'status', 'Dategory', 'DeploymentID', 'LocationDescription', 'LaneNumber', 'AmyDue', 'abc' ];

  constructor() {
    this.dataSource = new EventtableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
