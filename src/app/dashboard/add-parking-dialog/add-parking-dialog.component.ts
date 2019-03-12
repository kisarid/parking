import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { Parking } from "src/app/interfaces/parking";

@Component({
  selector: "app-add-parking-dialog",
  templateUrl: "./add-parking-dialog.component.html",
  styleUrls: ["./add-parking-dialog.component.scss"]
})
export class AddParkingDialogComponent implements OnInit {
  @ViewChild("name") name: ElementRef;
  @ViewChild("email") email: ElementRef;
  @ViewChild("date") date: ElementRef;
  @ViewChild("time") time: ElementRef;
  @ViewChild("plate") plate: ElementRef;

  maxNameLength = 100;
  nameValidator = new FormControl("", [
    Validators.required,
    Validators.maxLength(this.maxNameLength)
  ]);

  re1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))/;
  re2 = /@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  validEmailPattern = new RegExp(this.re1.source + this.re2.source);
  emailValidator = new FormControl("", [
    Validators.required,
    Validators.pattern(this.validEmailPattern)
  ]);

  maxDate = new Date(Date.now());

  validPlatePattern = /^((\w{3}-\d{3})|(\w{4}-\d{2})|(\w{5}-\d{1}))$/;
  plateValidator = new FormControl("", [
    Validators.required,
    Validators.pattern(this.validPlatePattern)
  ]);

  constructor(private dialogRef: MatDialogRef<AddParkingDialogComponent>) {}

  ngOnInit() {}

  getNameErrorMessage(): string {
    return this.nameValidator.hasError("required")
      ? "Kérlek, add meg a nevet!"
      : this.nameValidator.hasError("maxlength")
      ? "A név maximum 100 karakter hosszú lehet."
      : "";
  }

  getEmailErrorMessage(): string {
    return this.emailValidator.hasError("required")
      ? "Kérlek, add meg az email címet!"
      : this.emailValidator.hasError("pattern")
      ? "A megadott email cím hibás."
      : "";
  }

  getPlateErrorMessage(): string {
    return this.plateValidator.hasError("required")
      ? "Kérlek, add meg a rendszámot!"
      : this.plateValidator.hasError("pattern")
      ? "A megadott rendszám hibás."
      : "";
  }

  toUpperCase(): void {
    this.plate.nativeElement.value = this.plate.nativeElement.value.toUpperCase();
  }

  checkAll(): boolean {
    this.nameValidator.markAsTouched();
    this.emailValidator.markAsTouched();
    this.plateValidator.markAsTouched();

    return (
      this.nameValidator.valid &&
      this.emailValidator.valid &&
      this.plateValidator.valid
    );
  }

  addParking(): void {
    if (this.checkAll()) {
      this.closeDialog(this.buildNewParking());
    }
  }

  private buildNewParking(): Parking {
    const newParking: Parking = {
      id: null,
      name: this.name.nativeElement.value,
      email: this.email.nativeElement.value,
      date: this.buildDateTime(),
      plate: this.plate.nativeElement.value
    };

    return newParking;
  }

  private buildDateTime(): Date {
    const d = Date.parse(this.date.nativeElement.value);
    const t =
      Number.parseFloat(this.time.nativeElement.value.substr(0, 2)) *
        60 *
        60 *
        1000 +
      Number.parseFloat(this.time.nativeElement.value.substr(3, 2)) * 60 * 1000;

    return new Date(d + t);
  }

  closeDialog(p?: Parking): void {
    if (p) {
      this.dialogRef.close(p);
    } else {
      this.dialogRef.close();
    }
  }
}
