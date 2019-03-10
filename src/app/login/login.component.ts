import { Component, OnInit } from "@angular/core";
import { ParkingService } from "../services/parking.service";
import { Router } from "@angular/router";
import { Attendant } from "../interfaces/parking";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  attendants: Attendant[];

  constructor(private parkingService: ParkingService, private router: Router) {}

  ngOnInit() {
    this.parkingService.setActiveAttendant(null);
    this.parkingService.loadAttendantList().then(() => {
      this.attendants = this.parkingService.attendants;
    });
  }

  selectAttendant(newAttendant: Attendant): void {
    this.parkingService.setActiveAttendant(newAttendant);
  }

  loginWithSelectedUser(): void {
    if (this.parkingService.activeAttendant) {
      this.router.navigateByUrl("dashboard");
    }
  }
}
