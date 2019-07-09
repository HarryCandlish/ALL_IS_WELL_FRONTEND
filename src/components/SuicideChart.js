import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import suicideChartStyles from "../modules/suicideChart.module.scss";

class SuicideChart extends Component {
  constructor() {
    super();

    this.state = {
      suicideChartData: {
        labels: ["1985", "1995", "2005", "2010", "2019"],
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
          <Line
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
