import React, { useEffect, useState } from "react";
import "../scss/History.scss";
import "../scss/History.scss";
import HistoryChange from "./HistoryChange";
import HeaderHistory from "./SubHeader/HeaderHistory";

const History = () => {
  const [button, setButton] = useState("2022");

  const buttonOnclick = (e) => {
    setButton(e.target.value);
    // console.log(e.target.value);
    // console.log(typeof e.target.value);
  };

  return (
    <>
      <HeaderHistory />
      <div className="map-title">
        History <br />
        <p>회사 연혁</p>
      </div>
      <div className="history">
        <div className="history-container">
          <div className="history-mainBox">
            <div className="history-leftBox">
              <div className="history-line"></div>
              <input
                className="history-but1"
                type="radio"
                value="2022"
                id="history-inputId"
                name="tory"
                onClick={buttonOnclick}
                defaultChecked
              ></input>
              <br />
              <input
                className="history-but2"
                type="radio"
                value="2021"
                id="history-inputId"
                name="tory"
                onClick={buttonOnclick}
              ></input>
              <br />
              <input
                className="history-but3"
                type="radio"
                value="2020"
                id="history-inputId"
                name="tory"
                onClick={buttonOnclick}
              ></input>
              <br />
              <input
                className="history-but4"
                type="radio"
                value="2019"
                id="history-inputId"
                name="tory"
                onClick={buttonOnclick}
              ></input>
              <br />
              <input
                className="history-but5"
                type="radio"
                value="2018"
                id="history-inputId"
                name="tory"
                onClick={buttonOnclick}
              ></input>
              <br />
              <input
                className="history-but6"
                type="radio"
                value="2017"
                id="history-inputId"
                name="tory"
                onClick={buttonOnclick}
              ></input>
            </div>
            <HistoryChange button={button} />
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
