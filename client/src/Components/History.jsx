import React, { useState } from "react";
import SubHeader from "./SubHeader";
import HistoryChange from "./HistoryChange";
import "../scss/History.scss";

const History = () => {
  const [button, setButton] = useState("2022");

  const buttonOnclick = (e) => {
    setButton(e.target.value);
  };

  const title = {
    pageSection: "회사 소개",
    pageTitle: "회사 연혁",
    img: "SubHeader-Img",
  };
  return (
    <>
      <SubHeader title={title} />
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
