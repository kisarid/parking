import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Router } from "@angular/router";

import { ParkingService } from "../services/parking.service";
import { Attendant, Parking } from "../interfaces/parking";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, OnChanges {
  attendant: Attendant;
  cash: number;
  numberOfFilledSpots: number;
  @Output() parkings: Parking[];
  filteredParkings: Parking[];
  @ViewChild("filter") filter: ElementRef;

  constructor(private parkingService: ParkingService, private router: Router) {}

  ngOnInit() {
    // if (this.parkingService.activeAttendant) {
    //   this.attendant = this.parkingService.activeAttendant;
    // } else {
    //   this.router.navigateByUrl("login");
    // }
    this.parkingService.loadDashboardData().then(() => {
      this.cash = this.parkingService.cash;
      this.parkings = this.parkingService.parkings;
      this.filteredParkings = this.parkings.slice(0);
      this.calculateSpots();
    });
    this.attendant = { name: "Dénes", cut: 0 };
  }

  ngOnChanges(changes: SimpleChanges) {
    this.calculateSpots();
  }

  filterParkings(): void {
    const value = this.filter.nativeElement.value.trim().toLowerCase();
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

  calculateSpots(): void {
    this.numberOfFilledSpots = this.parkings.length;
  }
}
