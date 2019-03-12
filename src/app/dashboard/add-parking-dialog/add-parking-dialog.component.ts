import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-parking-dialog",
  templateUrl: "./add-parking-dialog.component.html",
  styleUrls: ["./add-parking-dialog.component.scss"]
})
export class AddParkingDialogComponent implements OnInit {
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

  @ViewChild("plateInput") plateInput: ElementRef;
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
    this.plateInput.nativeElement.value = this.plateInput.nativeElement.value.toUpperCase();
  }

  addParking(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
