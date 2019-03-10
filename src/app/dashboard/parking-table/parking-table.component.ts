import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { MatSort, MatTableDataSource } from "@angular/material";

import { Parking } from "src/app/interfaces/parking";

@Component({
  selector: "app-parking-table",
  templateUrl: "./parking-table.component.html",
  styleUrls: ["./parking-table.component.scss"]
})
export class ParkingTableComponent implements OnInit {
  @Input() parkings: Parking[];
  displayedColumns: string[] = ["name", "email", "date", "plate", "options"];
  dataSource: MatTableDataSource<Parking>;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.parkings);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  filterParking(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
