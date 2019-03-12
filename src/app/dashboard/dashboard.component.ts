import {
  Component,
  OnInit,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";

import { ParkingService } from "../services/parking.service";
import { Attendant, Parking } from "../interfaces/parking";
import { AddParkingDialogComponent } from "./add-parking-dialog/add-parking-dialog.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  attendant: Attendant;
  cash: number;
  numberOfFilledSpots: number;
  @Output() parkings: Parking[];
  filteredParkings: Parking[];
  @ViewChild("filter") filter: ElementRef;

  constructor(
    private parkingService: ParkingService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    // if (this.parkingService.activeAttendant) {
    //   this.attendant = this.parkingService.activeAttendant;
    // } else {
    //   this.router.navigateByUrl("login");
    // }
    this.parkingService.loadDashboardData().then(() => {
      this.parkings = this.parkingService.parkings;
      this.refreshData();
    });
    this.attendant = { name: "Dénes", cut: 0 };
    this.parkingService.activeAttendant = this.attendant;
  }

  filterParkings(): void {
    const value = this.filter.nativeElement.value.trim().toLowerCase();

    if (!value) {
      this.filteredParkings = this.parkings.slice(0);
    } else {
      this.filteredParkings = this.parkings.filter(p => {
        return (
          p.name
            .trim()
            .toLowerCase()
            .indexOf(value) > -1 ||
          p.email
            .trim()
            .toLowerCase()
            .indexOf(value) > -1 ||
          p.plate
            .trim()
            .toLowerCase()
            .indexOf(value) > -1
        );
      });
    }
  }

  refreshData(): void {
    this.numberOfFilledSpots = this.parkings.length;
    this.cash = this.parkingService.cash;
    this.filterParkings();
  }

  leaveCar(p): void {
    this.parkingService.leave(p);
    this.refreshData();
  }

  openAddParkingDialog(): void {
    this.dialog.open(AddParkingDialogComponent, { width: "400px" });
  }
}
