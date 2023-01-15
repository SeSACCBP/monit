import React from "react";
import "../scss/MainSectionComponent03.scss";
import "../scss/MainSectionCommon.scss";
import "../scss/style.scss";

const MainSectionComponent03 = () => {
  return (
    <div className="main-section-component03-container">
      <section className="main-section-component03">
        <div
          className="main-section-component03-text-wrapper"
          data-aos="fadeInUp">
          <div className="main-section-component03-text">
            <h2 className="main-section-component03-title">
              지금 <span>MECS</span>와 함께,
              <br /> 더욱 편한 간병 생활을 시작하세요!
            </h2>
            <div className="main-section-component03-nb">
              상담 전화 : 070 - 4349 - 0184
            </div>
          </div>
        </div>
        <div
          className="main-section-component03-circle-wrapper"
          data-aos="fadeInUp">
          <div className="main-section-component03-circle01">
            <div className="main-section-component03-circle01-inner">
              <div className="main-section-component03-circle01-inner-nb">
                01
              </div>
              <h3>맥스 자세히 보기</h3>
            </div>
          </div>
          <div className="main-section-component03-circle01">
            <div className="main-section-component03-circle01-inner">
              <div className="main-section-component03-circle01-inner-nb">
                02
              </div>
              <h3>구매하러 가기</h3>
            </div>
          </div>
          <div className="main-section-component03-circle01">
            <div className="main-section-component03-circle01-inner">
              <div className="main-section-component03-circle01-inner-nb">
                03
              </div>
              <h3>
                무료체험 신청하고
                <br />
                기저귀 받기
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSectionComponent03;
