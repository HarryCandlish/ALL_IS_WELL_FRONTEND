import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import ageChartStyles from "../modules/ageChart.module.scss";

class AgeChart extends Component {
  constructor() {
    super();

    this.state = {
      youthChartData: {
        labels: ["15-19", "20-24", "25-29", "30-34"],
        datasets: [
          {
            label: "Female",
            data: [13.06, 12.22, 7.52, 7.7],
            backgroundColor: "#bc4639",
            pointBorderColor: "#bc4639",
            fill: false,
            borderColor: "#bc4639"
          },
          {
            label: "Male",
            data: [20.49, 29.5, 26.31, 23.47],
            backgroundColor: "#f4976c",
            pointBorderColor: "#f4976c",
            fill: false,
            borderColor: "#f4976c"
          },
          {
            label: "Total",
            data: [16.88, 21.21, 17.1, 15.42],
            backgroundColor: "#303c6c",
            pointBorderColor: "#303c6c",
            fill: false,
            borderColor: "#303c6c"
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    };
  }

  render() {
    return (
      <div>
        <h1 className={ageChartStyles.title}>Suicide by Age</h1>
        <p className={ageChartStyles.paragraph}>
          Suicides per 100,000 people by age in New Zealand.
        </p>
        <div className={ageChartStyles.ageChart}>
          <Line
            data={this.state.youthChartData}
            options={{
              legend: {
                diplay: true,
                position: "bottom"
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default AgeChart;
