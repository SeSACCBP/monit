import React from "react";
import SubHeader from "./SubHeader";
import Vision from "./Vision";
import Spinoff from "./Spinoff";
import "../scss/Overview.scss";

const Overview = () => {
  const title = {
    pageSection: "회사 소개",
    pageTitle: "기업 이념",
    img: "SubHeader-Img",
  };
  return (
    <>
      <SubHeader title={title} />
        <div className="map-title">
          overivew <br />
          <p>기업 이념</p>
        </div>
      <div className="overview">
          <div className="overivew-bg-img"></div>
          {/* vision */}
          <Vision />
          <div className="overview-middlebar" data-aos="fadeInUp"></div>
          {/* spinoff story */}
          <Spinoff />
      </div>
    </>
  );
};

export default Overview;
