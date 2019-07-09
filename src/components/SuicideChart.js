import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import suicideChartStyles from "../modules/suicideChart.module.scss";

class SuicideChart extends Component {
  constructor() {
    super();

    this.state = {
      suicideChartData: {
        labels: ["2007", "2009", "2011", "2013", "2015", "2017"],
        datasets: [
          {
            label: "Female",
            data: [6.2, 6.29, 6.3, 6.26, 7.13, 7.79],
            backgroundColor: "#f76c6c",
            pointBorderColor: "#f76c6c",
            fill: false,
            borderColor: "#f76c6c"
          },
          {
            label: "Male",
            data: [19.35, 18.7, 18.58, 17.5, 17.71, 19.72],
            backgroundColor: "#F8E9A1",
            pointBorderColor: "#F8E9A1",
            fill: false,
            borderColor: "#F8E9A1"
          },
          {
            label: "Total",
            data: [12.2, 12.26, 12.34, 11.73, 12.33, 13.67],
            backgroundColor: "#3cc47c",
            pointBorderColor: "#3cc47c",
            fill: false,
            borderColor: "#3cc47c"
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
        <div className={suicideChartStyles.suicideChart}>
          <h1 className={suicideChartStyles.title}>Suicide</h1>
          <p className={suicideChartStyles.paragraph}>
            Suicide in New Zealand per 100,000 people
          </p>
          <Line
            data={this.state.suicideChartData}
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

export default SuicideChart;
