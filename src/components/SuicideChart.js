import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

import suicideChartStyles from "../modules/suicideChart.module.scss";

class SuicideChart extends Component {
  constructor() {
    super();

    this.state = {
      suicideChartData: {
        labels: ["2008", "2010", "2012", "2014", "2016", "2018"],
        datasets: [
          {
            label: "Youth Suicide",
            data: [100, 157, 209, 250, 308],
            backgroundColor: "black",
            pointBorderColor: "black",
            fill: false,
            borderColor: "black"
          },
          {
            label: "Adult Suicide",
            data: [45, 120, 140, 200, 262],
            backgroundColor: "#3cc47c",
            pointBorderColor: "#3cc47c",
            fill: false,
            borderColor: "#3cc47c"
          }
        ]
      },
      options: {
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
        <div className={suicideChartStyles.chartTwo}>
          <Bar
            data={this.state.suicideChartData}
            options={{
              title: {
                display: true,
                text: "Suicide",
                fontSize: "20"
              },
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
