import React from "react";
import "../scss/MainSectionComponent04.scss";
import "../scss/MainSectionCommon.scss";
import "../scss/style.scss";

const MainSectionComponent04 = () => {
  return (
    <div className="main-section-component04-container">
      <section className="main-section-component04">
        <div className="main-section-component04-contact-wrapper">
          <h2 className="main-section-component04-contact" data-aos="fadeInUp">
            Contact Us
          </h2>
          <div
            className="main-section-component04-contact-inquiry"
            data-aos="fadeInUp">
            <div className="main-section-component04-contact-icon icon-top"></div>
            <div className="main-section-component04-contact-inquiry-wrapper inquiry-top">
              <h3>제품문의</h3>
              <div className="main-section-component04-contact-inquiry-shortcut">
                <p>
                  제품에 관해 문의하실 내용을 보내주시면,
                  <br /> 빠르게 확인 후 회신드리겠습니다.
                </p>
                <a href="#">바로가기 &gt;</a>
              </div>
            </div>
          </div>
          <div
            className="main-section-component04-contact-inquiry"
            data-aos="fadeInUp">
            <div className="main-section-component04-contact-icon icon-bottom"></div>
            <div className="main-section-component04-contact-inquiry-wrapper inquiry-top">
              <h3>제휴문의</h3>
              <div className="main-section-component04-contact-inquiry-shortcut">
                <p>
                  제품 및 모닛과의 협업에 관심이 있으시다면 편하게 문의주세요
                </p>
                <a href="#">바로가기 &gt;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSectionComponent04;

// 푸터200
