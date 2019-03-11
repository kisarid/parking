import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Parking } from "src/app/interfaces/parking";

@Component({
  selector: "app-view-parking-dialog",
  templateUrl: "./view-parking-dialog.component.html",
  styleUrls: ["./view-parking-dialog.component.scss"]
})
export class ViewParkingDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ViewParkingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Parking
  ) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
