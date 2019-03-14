import {
  Component,
  OnInit,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog, MatSnackBar } from "@angular/material";

import { ParkingService } from "../services/parking.service";
import { Attendant, Parking } from "../interfaces/parking";
import { AddParkingDialogComponent } from "./add-parking-dialog/add-parking-dialog.component";
import { duration } from "moment";
import { ViewParkingDialogComponent } from "./view-parking-dialog/view-parking-dialog.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  today = new Date(Date.now());
  clock = Date.now();
  attendant: Attendant;
  cash: number;
  numberOfFilledSpots: number;
  @Output() parkings: Parking[];
  filteredParkings: Parking[];
  @ViewChild("filter") filter: ElementRef;
  @Output() selectedDate: Date = new Date(Date.now());

  constructor(
    private parkingService: ParkingService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    if (this.parkingService.activeAttendant) {
      this.attendant = this.parkingService.activeAttendant;
    } else {
      this.router.navigateByUrl("login");
    }
    this.parkingService.loadDashboardData().then(() => {
      this.parkings = this.parkingService.parkings;
      this.refreshData();
    });
    setInterval(() => {
      this.clock = Date.now();
    }, 1000);
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
    this.parkings = [].concat(this.parkingService.parkings);
    this.numberOfFilledSpots = this.parkings.length;
    this.cash = this.parkingService.cash;
    this.filterParkings();
  }

  leaveCar(p: Parking): void {
    this.parkingService.leave(p);
    this.refreshData();
    this.snackBar.open("A jármű sikeresen távozott.", "Bezárás", {
      duration: 3000
    });
  }

  addCar(p: Parking): void {
    this.parkingService.add(p);
    this.refreshData();
  }

  openAddParkingDialog(): void {
    if (this.numberOfFilledSpots >= 10) {
      this.snackBar.open("Nincs több hely a parkolóban.", "Bezárás", {
        duration: 3000
      });
      return;
    }

    const parkingDialog = this.dialog.open(AddParkingDialogComponent, {
      width: "400px",
      autoFocus: false
    });
    parkingDialog.afterClosed().subscribe(result => {
      if (result) {
        this.addCar(result);
        this.dialog.open(ViewParkingDialogComponent, { data: result });
        this.snackBar.open("Parkolás hozzáadva.", "Bezárás", {
          duration: 3000
        });
      }
    });
  }

  logout(): void {
    this.parkingService.setActiveAttendant(null);
    this.router.navigateByUrl("login");
  }
}
