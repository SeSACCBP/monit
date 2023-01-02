import React from "react";
import "../scss/MainSectionComponent01.scss";
import "../scss/style.scss";

const MainSectionComponent01 = () => {
  return (
    <div>
      <section className="main_section_component01">
        <div className="main_section_wrapper">
          <div className="main_section_text_wrapper">
            <p>사랑하는 부모님을 위한</p>
            <h3>스마트한 기저귀 케어 시스템</h3>
            <h2 className="main_img_title_text">MECS 맥스</h2>
            <div className="main">자세히보기</div>
            <p>
              어르신의 기저귀 교체 시험을 앱을 통해 쉽고 간편하게 알려줍니다
              <br />
              사랑하는 부모님의 건강을 위해 선택하세요
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSectionComponent01;
