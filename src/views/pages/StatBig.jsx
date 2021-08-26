import React from "react";
import Header from "../component/Header";

function StatBig() {
  return (
    <div className="ov flex-center">
        <Header width="704px" title="Statistics"/>
      <div class="parent mt-3">
        <div class="div1 sp">
          <div className="yeni-box">
            <div className="yeni-box__header">
              <img src="svg/wind.svg" alt="" />
              <div className="check"></div>
            </div>
            <div className="title">Temperature</div>
          </div>
        </div>
        <div class="div2 sp">
          <div className="yeni-box">
            <div className="yeni-box__header">
              <img src="svg/damla.svg" alt="" />
              <div className="check"></div>
            </div>
            <div className="title">Humidity</div>
          </div>
        </div>
        <div class="div3 sp">
          <div className="yeni-box">
            <div className="yeni-box__header">
              <img src="svg/kumanda.svg" alt="" />
              <div className="check"></div>
            </div>
            <div className="title">All Sensors</div>
          </div>
        </div>
        <div class="div4 sp">
          {" "}
          <div className="yeni-box box-2">
            <div className="yeni-box__header">
              <img src="svg/zil.svg" alt="" />
              <div className="check"></div>
            </div>
            <div className="title">Notifications</div>
          </div>
        </div>
        <div class="div5 sp">
          <div className="yeni-box box-2">
            <div className="yeni-box__header">
              <img src="svg/takvim.svg" alt="" />
              <div className="check"></div>
            </div>
            <div className="yan-title">Year</div>
            <div className="val">2019</div>
          </div>
        </div>
        <div class="div6 sp">
          <div className="yeni-box box-2">
            <div className="yeni-box__header">
              <img src="svg/takvim.svg" alt="" />
              <div className="check"></div>
            </div>
            <div className="yan-title">Year</div>
            <div className="val">2020</div>
          </div>
        </div>
        <div class="div7 sp">
          <ul className="sensor-list">
            <li>
              Sensor 1 <div className="check"></div>
            </li>
            <li>
              Sensor 2 <div className="check"></div>
            </li>
            <li>
              Sensor 3 <div className="check"></div>
            </li>
            <li>
              Sensor 4 <div className="check"></div>
            </li>
          </ul>
        </div>
        <div class="div8 sp">
          <ul className="sensor-list">
            <li>
              Sensor 1 <div className="check"></div>
            </li>
            <li>
              Sensor 2 <div className="check"></div>
            </li>
            <li>
              .. <div className="check"></div>
            </li>
            <li>
              .. <div className="check"></div>
            </li>
          </ul>
        </div>
        <div class="div9">
          <div className="stat-header2 sp">
            <div className="title">own selection</div>
            <div className="check"></div>
          </div>

          <div className="new-box-container">
            <div className="new-box sp">
              <div className="d-flex">
                <div>
                  <img src="svg/takvim.svg" alt="" />
                  <div className="from">from</div>
                </div>
                <div className="val">03</div>
              </div>
              <div className="yil">2019</div>
            </div>
            <div className="new-box sp">
              <div className="d-flex">
                <div>
                  <img src="svg/takvim.svg" alt="" />
                  <div className="from">to</div>
                </div>
                <div className="val">02</div>
              </div>
              <div className="yil">2020</div>
            </div>
          </div>
        </div>
        <div class="div10 sp p-2 border-box">
          <div className="d-flex">
            <img src="svg/takvim.svg" alt="" />{" "}
            <div className="title31">Report</div>{" "}
          </div>
          <ul className="sensor-list sl-new">
            <li>
              Monthly <div className="check"></div>
            </li>
            <li>
              Yearly <div className="check"></div>
            </li>
          </ul>
        </div>
        <div class="div11 sp p-relative">
          <div className="chart-info">
            <div className="alerts badge-sari">Alerts</div>
            <div className="val">69</div>
            <div className="until">until now</div>
          </div>
          <ul class="chart">
            <li>
              <span
                style={{ height: "5%" }}
                className="bg-acik"
                title="Jan"
              ></span>
            </li>
            <li>
              <span
                style={{ height: "5%" }}
                title="Feb"
                className="bg-acik"
              ></span>
            </li>
            <li>
              <span
                style={{ height: "20%" }}
                title="Mar"
                className="bg-acik"
              ></span>
            </li>
            <li>
              <span
                style={{ height: "10%" }}
                title="Mai"
                className="bg-acik"
              ></span>
            </li>

            <li>
              <span
                style={{ height: "30%" }}
                title="Jun"
                className="bg-acik"
              ></span>
            </li>

            <li>
              <span
                style={{ height: "50%" }}
                title="Jul"
                className="bg-koyu"
              ></span>
            </li>

            <li>
              <span
                style={{ height: "100%" }}
                title="Aug"
                className="bg-koyu"
              ></span>
            </li>

            <li>
              <span
                style={{ height: "20%" }}
                title="Sep"
                className="bg-koyu"
              ></span>
            </li>

            <li>
              <span
                style={{ height: "20%" }}
                title="Okt"
                className="bg-koyu"
              ></span>
            </li>

            <li>
              <span
                style={{ height: "20%" }}
                title="Nov"
                className="bg-koyu"
              ></span>
            </li>

            <li>
              <span
                style={{ height: "20%" }}
                title="Dec"
                className="bg-koyu"
              ></span>
            </li>
          </ul>
        </div>
      </div>
        <div className="btn w-25">Execute</div>
    </div>
  );
}

export default StatBig;
