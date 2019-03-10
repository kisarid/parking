import { Injectable } from "@angular/core";

import { Attendant, Parking } from "../interfaces/parking";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor() {}

  getAttendantList(): Promise<Attendant[]> {
    return new Promise<Attendant[]>((resolve, reject) => {
      resolve([
        { name: "Attila", cut: 0 },
        { name: "Bálint", cut: 0 },
        { name: "Dénes", cut: 0 },
        { name: "Károly", cut: 0 },
        { name: "Tamás", cut: 0 }
      ]);
    });
  }

  getCashAmount(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      resolve(58400);
    });
  }

  getParkings(): Promise<Parking[]> {
    return new Promise<Parking[]>((resolve, reject) => {
      resolve([
        {
          name: "Laci",
          email: "laci@abc.hu",
          date: new Date(2019, 2, 18, 9, 30, 15),
          plate: "ABC-123"
        },
        {
          name: "Juli",
          email: "juli@abc.hu",
          date: new Date(2019, 2, 18, 10, 15, 26),
          plate: "DEF-567"
        },
        {
          name: "Béla",
          email: "bela@abc.hu",
          date: new Date(2019, 2, 19, 11, 40, 38),
          plate: "GHI-891"
        },
        {
          name: "Piri",
          email: "pirike@abc.hu",
          date: new Date(2019, 2, 19, 9, 28, 11),
          plate: "JKL-234"
        }
      ]);
    });
  }
}
