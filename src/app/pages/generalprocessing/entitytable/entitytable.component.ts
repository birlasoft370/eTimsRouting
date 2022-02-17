import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EntitytableDataSource, EntitytableItem } from './entitytable-datasource';

@Component({
  selector: 'app-entitytable',
  templateUrl: './entitytable.component.html',
  styleUrls: ['./entitytable.component.scss']
})
export class EntitytableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EntitytableItem>;
  dataSource: EntitytableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'VehicleInformation', 'EffectiveDatedob', 'ResidentAddress', 'OpenTickets',];

  constructor() {
    this.dataSource = new EntitytableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
