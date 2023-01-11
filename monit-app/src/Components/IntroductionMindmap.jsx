import logo from "../imgs/Fragment_img/monitLogo_white.png";

import React from "react";

const IntroductionMindmap = () => {
  return (
    <div>
      <div className="introduction-circles-wrapper">
        <div className="cicle-top-left">
          <div className="circle circle-c01-up"></div>
          <div className="circle circle-c01-down">
            <p className="circle-c01-down-t">베이비 모니터</p>
          </div>
        </div>

        <div className="cicle-bottom-left">
          <div className="circle circle-c03-up"></div>
          <div className="circle circle-c03-down">
            <p className="circle-c03-down-t">베베핏 스마트 기어</p>
          </div>
        </div>

        {/* <div className="centerC">
          <img src={logo} alt="" />
          <p>AI 데이터 분석 기반 </p>
          <p> 디지털 헬스케어 플랫폼</p>
        </div> */}

        <div className="bigC">
          <div className="smallC">
            <img src={logo} alt="" />
            <p>AI 데이터 분석 기반 </p>
            <p> 디지털 헬스케어 플랫폼</p>
          </div>
        </div>

        <div className="circle-top-right">
          <div className="circle circle-c02-up"></div>
          <div className="circle circle-c02-down">
            <p className="circle-c02-down-t">펫 케어</p>
          </div>
        </div>

        <div className="cicle-bottom-right">
          <div className="circle circle-c04-up"></div>
          <div className="circle circle-c04-down">
            <p className="circle-c04-down-t">시니어 케어 시스템</p>
          </div>
        </div>
      </div>

      <div className="introduction-lines-wrapper">
        <div className="line top-left"></div>
        <div className="line bottom-left"></div>
        <div className="line top-right"></div>
        <div className="line bottom-right"></div>
      </div>
    </div>
  );
};

export default IntroductionMindmap;
