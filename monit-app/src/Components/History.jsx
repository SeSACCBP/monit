import React, { useState } from "react";
import "../scss/History.scss";
import HistoryChange from "./HistoryChange";
import HeaderHistory from "./SubHeader/HeaderHistory";

const History = () => {
  const [button, setButton] = useState("2022");

  const buttonOnclick = (e) => {
    setButton(e.target.value);
  };

  return (
    <>
      <HeaderHistory />
      <div className="map-title">
        History <br />
        <p>회사 연혁</p>
      </div>
      <div className="history">
          <div className="history-mainBox">
            <div className="history-leftBox">
              <div className="history-line"></div>
              <input
                className="history-btn1"
                type="radio"
                value="2022"
                name="tory"
                onClick={buttonOnclick}
                defaultChecked
              ></input>
              <input
                className="history-btn2"
                type="radio"
                value="2021"
                name="tory"
                onClick={buttonOnclick}
              ></input>
              <input
                className="history-btn3"
                type="radio"
                value="2020"
                name="tory"
                onClick={buttonOnclick}
              ></input>
              <input
                className="history-btn4"
                type="radio"
                value="2019"
                name="tory"
                onClick={buttonOnclick}
              ></input>
              <input
                className="history-btn5"
                type="radio"
                value="2018"
                name="tory"
                onClick={buttonOnclick}
              ></input>
              <input
                className="history-btn6"
                type="radio"
                value="2017"
                name="tory"
                onClick={buttonOnclick}
              ></input>
            </div>
            <HistoryChange button={button} />
          </div>
      </div>
    </>
  );
};

export default History;
