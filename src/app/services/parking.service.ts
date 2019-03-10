import { Injectable } from "@angular/core";

import { Attendant, Parking } from "../interfaces/parking";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: "root"
})
export class ParkingService {
  attendants: Attendant[];
  activeAttendant: Attendant;
  cash: number;
  parkings: Parking[];

  constructor(private http: HttpService) {}

  loadDashboardData(): Promise<void> {
    const all = Promise.all([this.loadCashAmount(), this.loadParkings()]);
    return new Promise<void>((resolve, reject) => {
      all
        .then(() => {
          resolve();
        })
        .catch(reject);
    });
  }

  loadAttendantList(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http
        .getAttendantList()
        .then(result => {
          this.attendants = result;
          resolve();
        })
        .catch(reject);
    });
  }

  private loadCashAmount(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http
        .getCashAmount()
        .then(result => {
          this.cash = result;
          resolve();
        })
        .catch(reject);
    });
  }

  private loadParkings(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http
        .getParkings()
        .then(result => {
          this.parkings = result;
          resolve();
        })
        .catch(reject);
    });
  }

  getAttendantByName(name: string): Attendant {
    return this.attendants.find(e => {
      return e.name === name;
    });
  }

  setActiveAttendant(newAttendant: Attendant): void {
    this.activeAttendant = newAttendant;
  }
}
