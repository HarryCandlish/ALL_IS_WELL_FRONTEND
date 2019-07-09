import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import mentalHealthChartStyles from "../modules/mentalHealthChart.module.scss";

class MentalHealthChart extends Component {
  constructor() {
    super();
    this.state = {
      mentalHealthData: {
        labels: ["2006", "2011", "2013", "2015", "2017"],
        datasets: [
          {
            label: "Depression",
            data: [10.4, 14.3, 15.5, 15.4, 16.6],
            backgroundColor: "#d4a592",
            pointBorderColor: "#d4a592",
            fill: false,
            borderColor: "#d4a592"
          },
          {
            label: "Mood Disorders",
            data: [12.7, 16.3, 18.6, 18.8, 20.9],
            backgroundColor: "#f79e02",
            fill: false,
            borderColor: "#f79e02",
            pointBorderColor: "#f79e02"
          },
          {
            label: "Anxiety",
            data: [4.3, 6.1, 8.4, 9.5, 11.1],
            backgroundColor: "#A8d0e6",
            fill: false,
            borderColor: "#A8d0e6",
            pointBorderColor: "#A8d0e6"
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
        <div className={mentalHealthChartStyles.healthChart}>
          <h1 className={mentalHealthChartStyles.title}>Mental Health</h1>
          <p className={mentalHealthChartStyles.paragraph}>
            Data demonstrating the (%) of people living in New Zealand with
            specific mental health issues.
          </p>
          <Line
            data={this.state.mentalHealthData}
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

export default MentalHealthChart;
