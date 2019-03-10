import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatTableModule
} from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HourlyChartComponent } from "./dashboard/hourly-chart/hourly-chart.component";
import { ParkingTableComponent } from "./dashboard/parking-table/parking-table.component";
import { AddParkingDialogComponent } from "./dashboard/add-parking-dialog/add-parking-dialog.component";
import { ViewParkingDialogComponent } from "./dashboard/view-parking-dialog/view-parking-dialog.component";
import { PlateQrComponent } from "./dashboard/view-parking-dialog/plate-qr/plate-qr.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HourlyChartComponent,
    ParkingTableComponent,
    AddParkingDialogComponent,
    ViewParkingDialogComponent,
    PlateQrComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
