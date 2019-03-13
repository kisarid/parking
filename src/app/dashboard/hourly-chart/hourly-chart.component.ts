import { Component, OnInit, OnChanges, Input } from "@angular/core";

import { Chart } from "angular-highcharts";
import { Parking } from "src/app/interfaces/parking";

@Component({
  selector: "app-hourly-chart",
  templateUrl: "./hourly-chart.component.html",
  styleUrls: ["./hourly-chart.component.scss"]
})
export class HourlyChartComponent implements OnInit, OnChanges {
  @Input() data: Parking[];
  @Input() date: Date;
  chart: Chart;
  summary: {};

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.loadChart();
  }

  loadChart(): void {
    this.summarize();
    this.createChart();
  }

  summarize(): void {
    this.resetSummary();
    this.data.forEach(e => {
      if (e.date.getDay() === this.date.getDay()) {
        this.summary[e.date.getHours()]++;
      }
    });
  }

  createChart(): void {
    this.chart = new Chart({
      chart: {
        type: "column",
        backgroundColor: "#FFFAF0"
      },
      xAxis: {
        title: {
          text: "A nap órái"
        },
        categories: [
          "00",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23"
        ],
        crosshair: true
      },
      yAxis: {
        title: { text: "Vendégek száma" }
      },
      tooltip: {
        headerFormat: "<span>{point.key}. óra: </span><table>",
        pointFormat: "<b>{point.y} autó</b>",
        shared: true
      },
      title: {
        text: ""
      },
      legend: { enabled: false },
      credits: {
        enabled: false
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        {
          type: "column",
          data: [
            this.summary[0],
            this.summary[1],
            this.summary[2],
            this.summary[3],
            this.summary[4],
            this.summary[5],
            this.summary[6],
            this.summary[7],
            this.summary[8],
            this.summary[9],
            this.summary[10],
            this.summary[11],
            this.summary[12],
            this.summary[13],
            this.summary[14],
            this.summary[15],
            this.summary[16],
            this.summary[17],
            this.summary[18],
            this.summary[19],
            this.summary[20],
            this.summary[21],
            this.summary[22],
            this.summary[23]
          ],
          animation: true
        }
      ]
    });
  }

  resetSummary(): void {
    this.summary = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
      21: 0,
      22: 0,
      23: 0
    };
  }
}
