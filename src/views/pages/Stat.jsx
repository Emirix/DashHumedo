import React,{useState,useEffect,useCallback} from "react";
import Header from "../component/Header";
import Pil from "../component/Pil";
import { Line as LineChart } from "react-chartjs-2";
import Box from "../component/Box";
import { Calendar } from "@natscale/react-calendar";

function Stat() {

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(3,218,197,1)");
    gradient.addColorStop(1, "rgba(0,220,255,0)");
    return {
      scaleFontColor: "white",

      labels: ["30", "20", "20", "20", "20", "2"],
      datasets: [
        {
          scaleStepWidth: 1,

          fill: true,
          lineTension: 0.5,
          backgroundColor: gradient,
          borderColor: "#30a8bb",
          borderWidth: 1,
          borderJoinStyle: "miter",
          borderCapStyle: "butt",
          pointBackgroundColor: "#51d7bf",
          pointBorderColor: "#51d7bf",
          pointBorderWidth: 1,
          pointRadius: 0.3,
          pointHoverRadius: 10,
          borderWidth: 3,
          data: [50, 100, 20, 74, 20, 0],
        },
      ],
    };
  };

  const data2 = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(214,181,89,1)");
    gradient.addColorStop(1, "rgba(123,105,54,0)");
    return {
      scaleFontColor: "white",

      labels: ["30", "20", "20", "20", "20", "2"],
      datasets: [
        {
          scaleStepWidth: 1,

          fill: true,
          lineTension: 0.5,
          backgroundColor: gradient,
          borderColor: "#D6B559",
          borderWidth: 1,
          borderJoinStyle: "miter",
          borderCapStyle: "butt",
          pointBackgroundColor: "#51d7bf",
          pointBorderColor: "#51d7bf",
          pointBorderWidth: 1,
          pointRadius: 0.3,
          pointHoverRadius: 10,
          borderWidth: 3,
          data: [21, 38, 210, 70, 20,2],
        },
      ],
    };
  };
  return (
    <div className="ov">
      <Header title="Statistic" />
      <div className="stat-header sp">
        <span className="parlat">Bedroom </span> <Pil />
      </div>
      <div className="chart-con">
        <div className="sol sp">
          <div className="sol__header w-100 jcenter">
            <div className="date">DATE</div>
          </div>
          <LineChart
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: false,

              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: "white",
                    font: {
                      size: 15,
                    },
                    beginAtZero: true,
                  },
                  grid: {
                    display: false,
                  },
                },
                y: {
                  ticks: {
                    color: "white",
                    font: {
                      size: 15,
                    },
                    beginAtZero: true,
                  },
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        </div>

        <div className="sag grid-1">
            <Box icon="sync" title="last sync" val="13:45"/>
            <Box icon="damla" title="Humidity" val="53%"  titleColor="#03DAC5" />
        </div>
      </div>

      <div className="chart-con mt-10">
        <div className="sol sp">
          <div className="sol__header w-100 jcenter">
            <div className="date">DATE</div>
          </div>
          <LineChart
            data={data2}
            options={{
              responsive: true,
              maintainAspectRatio: false,

              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: "white",
                    font: {
                      size: 15,
                    },
                    beginAtZero: true,
                  },
                  grid: {
                    display: false,
                  },
                },
                y: {
                  ticks: {
                    color: "white",
                    font: {
                      size: 15,
                    },
                    beginAtZero: true,
                  },
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        </div>
             <div className="sag grid-1">
            <Box icon="wind" title="Temperature" val="23°C" titleColor="#D6B559"/>
            <Box icon="takvim" calendar={true} title="Calendar" val={new Date().getFullYear()}  />
        </div>
      </div>

      <div className="btn w-25 mt-5 mx-auto">Back</div>
    </div>
  );
}

export default Stat;
