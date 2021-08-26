import React, { useState, useCallback, useEffect } from "react";
import { Line as LineChart } from "react-chartjs-2";
import Header from "../component/Header";
import Pil from "../component/Pil";
import "@natscale/react-calendar/dist/main.css";
import { Calendar } from "@natscale/react-calendar";
import Box from "../component/Box";

function Overview() {
  const [tarih, setTarih] = useState();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    document.querySelectorAll(".arc_view_weekdays_cell span").forEach((e) => {
      e.innerHTML = e.innerText.charAt(0);
    });
  }, []);

  const tarihChange = useCallback(
    (value) => {
      setTarih(value);
    },
    [setTarih]
  );

  const data2 = (canvas) => {
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

  return (
    <div className="ov">
      <Header title="Overview" />
      <div className="mb-3"></div>
      <div className="overview-top">
        <div className="sol">
          <div className="sp box">
            <div className="box__title parlat">Router</div>
            <div className="box__sag">
              <Pil val={20} />
              <div className="info">
                <span>53%</span>
                <img src="svg/damla.svg" alt="" />
              </div>

              <div className="info">
                <span>23°</span>
                <img src="svg/wind.svg" alt="" />
              </div>

              <div className="info">
                <span>15min</span>
                <img src="svg/saat.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="sp box">
            <div className="box__title parlat">Bedroom</div>
            <div className="box__sag">
              <Pil val={90} />
              <div className="info">
                <span>53%</span>
                <img src="svg/damla.svg" alt="" />
              </div>

              <div className="info">
                <span>23°</span>
                <img src="svg/wind.svg" alt="" />
              </div>

              <div className="info">
                <span>15min</span>
                <img src="svg/saat.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="sp box">
            <div className="box-y-center">
              <div className="box__title block-self sari">
                Alarm <img src="svg/zil.svg" alt="" />
              </div>
              <div className="box__title parlat">Humidor</div>
            </div>
            <div className="box__sag">
              <Pil val={20} />
              <div className="info">
                <span>53%</span>
                <img src="svg/damla.svg" alt="" />
              </div>

              <div className="info">
                <span>23°</span>
                <img src="svg/wind.svg" alt="" />
              </div>

              <div className="info">
                <span>15min</span>
                <img src="svg/saat.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="sp box31">
            <div className="box31__sol">
              <div className="d-flex">
                <img src="svg/damla.svg" alt="" />
                <div className="check"></div>
              </div>
              <div className="title">Humidity</div>
            </div>
            <div className="box31__sag">
            <div className="d-flex">
                <img src="svg/wind.svg" alt="" />
                <div className="check"></div>
              </div>
              <div className="title">Temperature</div>
            </div>
          </div>
        </div>
        <div className="sag sp">
          <div className="takvim ">
            <div className="takvim-header">
              <div className="calendar-title">Calendar</div>
              <div className="day">{days[new Date().getDay()]}</div>
            </div>
            <div className="takvim-date">
              {new Date().getDate() +
                " " +
                monthNames[new Date().getMonth()] +
                " " +
                new Date().getFullYear()}
            </div>
            <div className="border-mavi"></div>
            <Calendar
              size={224}
              lockView={true}
              value={tarih}
              onChange={tarihChange}
            />
            <div className="takvim-copyright">2020 | Húmedo</div>
          </div>
        </div>
      </div>
      <div className="overview-bottom">
        <div className="chart-con">
          <div className="sol sp">
            <div className="sol__header">
              <div className="temp">Temperature</div>
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

            <div className="btn">ADD Sensor</div>
          </div>

          <div className="sag">
            <Box icon="damla" title="Humidity" val="53%" />

            <Box icon="wind" title="Temperature" val="23°C" />

            <Box icon="saat" title="Intervall" val="15" min={true} />

            <Box icon="sync" title="last sync" val="13:45" />

            <Box icon="stat" title="Statistic" noVal={true} />

            <Box icon="ayar" title="Edit Sensor" noVal={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
