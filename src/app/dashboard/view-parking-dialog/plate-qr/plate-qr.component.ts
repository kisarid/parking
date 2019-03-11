import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-plate-qr",
  templateUrl: "./plate-qr.component.html",
  styleUrls: ["./plate-qr.component.scss"]
})
export class PlateQrComponent implements OnInit {
  @Input() value: string;

  constructor() {}

  ngOnInit() {}
}
