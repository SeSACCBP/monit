import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  return (
    <div className="overview" data-aos="fadeInUp">
      <div className="overview-title">
        <div className="overview-title-circle"></div>
        <div className="overview-title-text">Vision</div>
        <div className="overview-title-bg"></div>
      </div>
      <div className="overview-bar">
        <div className="overview-bar"></div>
        <div className="overview-bar-circle"></div>
      </div>
      <div className="overview-content">
        <span className="overview-content-b">모닛</span>
        은 디지털 헬스케어 기업으로 <br />
        기저귀 감지 기술을 독자적으로 개발하고 있습니다. <br />
        도움이 필요한 어르신들의 요로 감염, 욕창 문제를 해결하여 <br />
        보다 건강한 삶의 가치를 제공하고자 합니다.
      </div>
    </div>
  );
};

export default Vision;
