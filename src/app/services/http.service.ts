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
      resolve(0);
    });
  }

  getParkings(): Promise<Parking[]> {
    return new Promise<Parking[]>((resolve, reject) => {
      resolve([
        {
          id: 1,
          name: "Laci",
          email: "laci@abc.hu",
          date: new Date(2019, 2, 11, 9, 30, 15),
          plate: "ABC-123"
        },
        {
          id: 2,
          name: "Juli",
          email: "juli@abc.hu",
          date: new Date(2019, 2, 11, 10, 15, 26),
          plate: "DEF-567"
        },
        {
          id: 3,
          name: "Béla",
          email: "bela@abc.hu",
          date: new Date(2019, 2, 12, 11, 40, 38),
          plate: "GHI-891"
        },
        {
          id: 4,
          name: "Piri",
          email: "pirike@abc.hu",
          date: new Date(2019, 2, 12, 9, 28, 11),
          plate: "JKL-234"
        },
        {
          id: 5,
          name: "Piri",
          email: "pirike@abc.hu",
          date: new Date(2019, 2, 12, 9, 28, 11),
          plate: "JKL-234"
        },
        {
          id: 6,
          name: "Piri",
          email: "pirike@abc.hu",
          date: new Date(2019, 2, 12, 9, 28, 11),
          plate: "JKL-234"
        },
        {
          id: 7,
          name: "Piri",
          email: "pirike@abc.hu",
          date: new Date(2019, 2, 12, 9, 28, 11),
          plate: "JKL-234"
        },
        {
          id: 8,
          name: "Piri",
          email: "pirike@abc.hu",
          date: new Date(2019, 2, 12, 9, 28, 11),
          plate: "JKL-234"
        },
        {
          id: 9,
          name: "Piri",
          email: "pirike@abc.hu",
          date: new Date(2019, 2, 12, 9, 28, 11),
          plate: "JKL-234"
        },
        {
          id: 10,
          name: "Piri",
          email: "pirike@abc.hu",
          date: new Date(2019, 2, 12, 9, 28, 11),
          plate: "JKL-234"
        }
      ]);
    });
  }
}
