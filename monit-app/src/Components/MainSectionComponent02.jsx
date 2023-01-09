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
          알맞은 시간에 환자분들의 기저귀를 교체하는 것이 매우 중요하기
          때문입니다
        </h4>
      </div>
      <div className="main-section02-circle-wrapper" data-aos="fadeInUp">
        <div className="circle-transparent transparent01">
          <div className="circle-inner">
            <div className="circle-inner-icon-1"></div>
            <h4>기저귀 질환 예방</h4>
            <p>
              오염된 기저귀로 인한 요로 감염 <br />
              발진, 욕창예방
            </p>
          </div>
        </div>
        <div className="circle-transparent transparent02">
          <div className="circle-inner">
            <div className="circle-inner-icon-2"></div>
            <h4>간병 업무 경감</h4>
            <p>
              기저귀 교체횟수 기록 침대 오염 방지 <br />
              쉬워지는 간병
            </p>
          </div>
        </div>
        <div className="circle-transparent transparent03">
          <div className="circle-inner">
            <div className="circle-inner-icon-3"></div>
            <h4>간병 비용 경감</h4>
            <p>
              기저귀 사용량 감소
              <br /> 침대 시트 교체 비용 <br /> 절감
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSectionComponent02;

<br />;
