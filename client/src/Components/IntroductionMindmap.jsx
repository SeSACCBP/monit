import logo from "../imgs/Fragment_img/monitLogo_white.png";

import React from "react";

const IntroductionMindmap = () => {
  return (
    <div className="introduction-mindmap" data-aos="fadeInUp">
      <div className="introduction-circles-wrapper">
        <div className="center-line"></div>
        <div className="cicle-top-left">
          <div className="circle-line line-top-left"></div>
          <div className="circle upper-half img01"></div>
          <div className="circle lower-half">
            <p className="letter-in-circle">베이비 모니터</p>
          </div>
        </div>

        <div className="cicle-bottom-left">
          <div className="circle-line line-bottom-left"></div>
          <div className="circle upper-half img03"></div>
          <div className="circle lower-half">
            <p className="letter-in-circle">
              베베핏
              <br />
              스마트 기어
            </p>
          </div>
        </div>
        <div className="centerC-wrapper">
          <div className="centerC">
            <div className="logo-img"></div>
            <p>AI 데이터 분석 기반 </p>
            <p> 디지털 헬스케어 플랫폼</p>
          </div>
        </div>

        <div className="circle-top-right">
          <div className="circle-line line-top-right"></div>
          <div className="circle upper-half img02"></div>
          <div className="circle lower-half">
            <p className="letter-in-circle">펫 케어</p>
          </div>
        </div>

        <div className="cicle-bottom-right">
          <div className="circle-line line-bottom-right"></div>
          <div className="circle upper-half img04"></div>
          <div className="circle lower-half">
            <p className="letter-in-circle">
              시니어
              <br />
              케어 시스템
            </p>
          </div>
        </div>
      </div>

      {/* <div className="introduction-lines-wrapper">
        <div className="line top-left"></div>
        <div className="line bottom-left"></div>
        <div className="line top-right"></div>
        <div className="line bottom-right"></div>
        <div className="line responsive-center"></div>
      </div> */}
    </div>
  );
};

export default IntroductionMindmap;
