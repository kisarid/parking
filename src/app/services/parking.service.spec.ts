import { TestBed } from "@angular/core/testing";

import { ParkingService } from "./parking.service";

describe("CashService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ParkingService = TestBed.get(ParkingService);
    expect(service).toBeTruthy();
  });
});
