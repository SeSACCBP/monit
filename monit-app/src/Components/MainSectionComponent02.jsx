import React from "react";
import "../scss/MainSectionComponent02.scss";
import "../scss/MainSectionCommon.scss";
import "../scss/style.scss";

const MainSectionComponent02 = () => {
  return (
    <div className="main-section02-component">
      <div className="main-section02-text-wrapper" data-aos="fadeInUp">
        <p>About MECS</p>
        <h3>왜 MECS가 필요할까요?</h3>
        <h4>
          환자분들의 기저귀를 제때 교체하는것이 매우 중요하기 때문입니다
        </h4>
      </div>
      <div className="main-section02-circle-wrapper" data-aos="fadeInUp">
        <div className="circle-transparent transparent01">
          <div className="circle-inner">
            <div className="circle-inner-icon-1"></div>
            <h4>기저귀 질환 예방</h4>
            <p>
              오염된 기저귀로 인한
              <br />
              요로 감염 및 발진, <br />
              욕창예방에 도움
            </p>
          </div>
        </div>
        <div className="circle-transparent transparent02">
          <div className="circle-inner">
            <div className="circle-inner-icon-2"></div>
            <h4>간병 업무 경감</h4>
            <p>
              자동으로 기록되는 <br />
              기저귀 교체 횟수 <br />
              &nbsp;
            </p>
          </div>
        </div>
        <div className="circle-transparent transparent03">
          <div className="circle-inner">
            <div className="circle-inner-icon-3"></div>
            <h4>간병 비용 경감</h4>
            <p>
              기저귀 사용량 감소, <br />
              침대 시트 교체 비용 절감
              <br />
              &nbsp;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSectionComponent02;

<br />;
