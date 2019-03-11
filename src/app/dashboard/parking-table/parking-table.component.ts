import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialog } from "@angular/material";

import { Parking } from "src/app/interfaces/parking";
import { ViewParkingDialogComponent } from "../view-parking-dialog/view-parking-dialog.component";

@Component({
  selector: "app-parking-table",
  templateUrl: "./parking-table.component.html",
  styleUrls: ["./parking-table.component.scss"]
})
export class ParkingTableComponent implements OnInit {
  @Input() parkings: Parking[];
  sortedBy: string;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  sort(by: string) {
    if (this.sortedBy === by) {
      this.parkings.sort((a, b) => {
        return a[by] > b[by] ? -1 : a[by] < b[by] ? 1 : 0;
      });
      this.sortedBy = "";
    } else {
      this.parkings.sort((a, b) => {
        return a[by] > b[by] ? 1 : a[by] < b[by] ? -1 : 0;
      });
      this.sortedBy = by;
    }
  }

  openDetailsDialog(selectedParking: Parking): void {
    const dialogRef = this.dialog.open(ViewParkingDialogComponent, {
      width: "250px",
      data: selectedParking
    });
  }
}
