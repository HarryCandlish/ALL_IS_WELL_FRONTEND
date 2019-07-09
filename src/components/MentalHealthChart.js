import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

import mentalHealthChartStyles from "../modules/mentalHealthChart.module.scss";

class MentalHealthChart extends Component {
  constructor() {
    super();
    this.state = {
      mentalHealthData: {
        labels: ["2008", "2010", "2012", "2014", "2016", "2018"],
        datasets: [
          {
            label: "Depression",
            data: [100, 157, 209, 250, 308],
            backgroundColor: "black",
            pointBorderColor: "black",
            fill: false,
            borderColor: "black"
          },
          {
            label: "Anxiety",
            data: [94, 123, 270, 309, 350],
            backgroundColor: "#3cc47c",
            fill: false,
            borderColor: "#3cc47c",
            pointBorderColor: "#3cc47c"
          },
          {
            label: "Addiction",
            data: [80, 130, 201, 247, 304],
            backgroundColor: "grey",
            fill: false,
            borderColor: "grey",
            pointBorderColor: "grey"
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
        <div className={mentalHealthChartStyles.chart}>
          <Bar
            data={this.state.mentalHealthData}
            options={{
              title: {
                display: true,
                text: "Mental Health",
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

export default MentalHealthChart;
