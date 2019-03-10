import { Component, OnInit } from "@angular/core";
import { ParkingService } from "../services/parking.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.scss"]
})
export class PageNotFoundComponent implements OnInit {
  constructor(private parkingService: ParkingService, private router: Router) {}

  ngOnInit() {}

  goBack(): void {
    this.router.navigateByUrl("login");
  }
}
