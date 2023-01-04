import React from "react";
import Vision from "./Vision";
import Spinoff from "./Spinoff";
import "../scss/Overview.scss";
import HeaderOver from "./SubHeader/HeaderOver";

const Overview = () => {
  return (
    <div>
      <HeaderOver />
      <div className="overview-section">
        <div className="overivew-bg"></div>
        {/* vision */}
        <Vision />
        <div className="overview-middlebar"></div>
        {/* spinoff story */}
        <Spinoff />
      </div>
    </div>
  );
};

export default Overview;
