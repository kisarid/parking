import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeHu from "@angular/common/locales/hu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { NgxQRCodeModule } from "ngx-qrcode2";
import { NgxPrintModule } from "ngx-print";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";

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

registerLocaleData(localeHu);

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
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    NgxQRCodeModule,
    NgxPrintModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule.forRoot()
  ],
  providers: [{ provide: LOCALE_ID, useValue: "hu" }],
  entryComponents: [ViewParkingDialogComponent, AddParkingDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
