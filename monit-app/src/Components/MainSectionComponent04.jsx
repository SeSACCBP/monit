import React from "react";
import "../scss/MainSectionComponent04.scss";
import "../scss/MainSectionCommon.scss";
import "../scss/style.scss";

const MainSectionComponent04 = () => {
  return (
    <div>
      <section className="main-section-component04">
        <div className="main-section-component04-contact-wrapper">
          <h2 className="main-section-component04-contact">Contact Us</h2>
          <div className="main-section-component04-contact-inquiry">
            <img src="" alt="" />
            <div className="main-section-component04-contact-inquiry-wrapper">
              <h3>제품문의</h3>
              <div className="main-section-component04-contact-inquiry-shortcut">
                <p>
                  제품에 관해 문의하실 내용을 보내주시면,
                  <br /> 빠르게 확인 후 회신드리겠습니다.
                </p>
                <button className="main-section-component04-contact-inquiry-shortcut-bt">
                  <a href="#">바로가기 &gt;</a>
                </button>
              </div>
            </div>
          </div>
          <div className="main-section-component04-contact-inquiry">
            <img src="" alt="" />
            <div className="main-section-component04-contact-inquiry-wrapper">
              <h3>제품문의</h3>
              <div className="main-section-component04-contact-inquiry-shortcut">
                <p>
                  제품 및 모닛과의 협업에 관심이 있으시다면
                  <br /> 편하게 문의주세요
                </p>
                <button className="main-section-component04-contact-inquiry-shortcut-bt">
                  <a href="#">바로가기 &gt;</a>
                </button>
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
