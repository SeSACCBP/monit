import React from "react";
import Vision from "./Vision";
import Spinoff from "./Spinoff";
import "../scss/Overview.scss";

const Overview = () => {
  return (
    <div className="overview-section">
      <div className="overivew-bg"></div>
      {/* vision */}
      <Vision />
      <div className="overview-middlebar"></div>
      {/* spinoff story */}
      <Spinoff />
    </div>
  );
};

export default Overview;
