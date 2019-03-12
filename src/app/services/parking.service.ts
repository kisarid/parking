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
  hourlyFee = 500;
  cutRate = 0.1;

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

  getParkingIndexById(id: number): number {
    let index = -1;
    this.parkings.forEach((e, i) => {
      if (e.id === id) {
        index = i;
      }
    });
    return index;
  }

  add(p: Parking): void {
    this.parkings.push(p);
  }

  leave(p: Parking): void {
    const index = this.getParkingIndexById(p.id);
    if (index > -1) {
      const fee = this.calculateFee(p);
      const cut = this.calculateCut(fee);
      this.cash += fee;
      this.activeAttendant.cut += cut;
      this.parkings.splice(index, 1);
    }
  }

  calculateFee(p: Parking): number {
    const diffInMilis = Date.now() - p.date.getTime();
    const diffInHours = Math.ceil(diffInMilis / (1000 * 60 * 60));
    return diffInHours * this.hourlyFee;
  }

  calculateCut(fee: number): number {
    return fee * this.cutRate;
  }
}
