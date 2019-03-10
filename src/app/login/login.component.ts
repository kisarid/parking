import { Component, OnInit } from "@angular/core";
import { ParkingService } from "../services/parking.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  attendants: string[];
  selectedUser: string;

  constructor(private parkingService: ParkingService, private router: Router) {}

  ngOnInit() {
    this.parkingService.getAttendantList().then(result => {
      this.attendants = result;
    });
  }

  loginWithSelectedUser(): void {
    if (this.selectedUser) {
      this.router.navigateByUrl("dashboard");
    }
  }
}
