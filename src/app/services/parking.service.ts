import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ParkingService {
  attendants: string[];
  activeAttendant: string;

  constructor() {
    this.attendants = ["Attila", "Bálint", "Dénes", "Károly", "Tamás"];
  }

  getAttendantList(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      resolve(this.attendants);
    });
  }

  setActiveAttendant(a: string): void {
    this.activeAttendant = a;
  }
}
