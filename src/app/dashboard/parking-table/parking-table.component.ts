import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
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
  @Input() noCarsInLot: boolean;
  sortedBy: string;
  isReverseSorted: boolean;
  @Output() leaveEmitter: EventEmitter<Parking>;

  constructor(private dialog: MatDialog) {
    this.leaveEmitter = new EventEmitter();
    this.isReverseSorted = false;
  }

  ngOnInit() {}

  sort(by: string) {
    if (this.sortedBy === by && !this.isReverseSorted) {
      this.parkings.sort((a, b) => {
        return a[by] > b[by] ? -1 : a[by] < b[by] ? 1 : 0;
      });
      this.isReverseSorted = true;
    } else {
      this.parkings.sort((a, b) => {
        return a[by] > b[by] ? 1 : a[by] < b[by] ? -1 : 0;
      });
      this.sortedBy = by;
      this.isReverseSorted = false;
    }
  }

  openDetailsDialog(selectedParking: Parking): void {
    this.dialog.open(ViewParkingDialogComponent, {
      width: "300px",
      data: selectedParking
    });
  }

  leaveCar(p: Parking): void {
    this.leaveEmitter.emit(p);
  }

  checkSort(header: string): string {
    return header === this.sortedBy ? "inline" : "none";
  }
}
