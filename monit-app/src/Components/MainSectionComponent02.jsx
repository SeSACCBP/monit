import React from "react";
import "../scss/MainSectionComponent02.scss";
// import "../scss/style.scss";

const MainSectionComponent02 = () => {
  return (
    <div className="main-section02-component">
      <div className="main-section02-text-wrapper">
        <p>About MECS</p>
        <h3>왜 MECS가 필요할까요?</h3>
        <h4>
          알맞은 시간에 환자분들의 기저귀를 교체하는 것이 매우 중요하기
          때문입니다
        </h4>
      </div>
      <div className="main-section02-circle-wrapper">
        <div className="circle-transparent">
          <div className="circle-inner">
            <img src="" alt="" />
            <h4>기저귀 질환 예방</h4>
            <p>
              오염된 기저귀로 인한
              <br /> 요로 감염 및 발진,
              <br /> 욕창 예방에 도움을 줍니다.
            </p>
          </div>
        </div>
        <div className="circle-transparent">
          <div className="circle-inner">
            <img src="" alt="" />
            <h4>간병 업무 경감</h4>
            <p>
              기저귀 교체 횟수가 자동으로
              <br /> 기록되며 침대 오염도 방지되어
              <br /> 간병이 보다 쉬워집니다.
            </p>
          </div>
        </div>
        <div className="circle-transparent">
          <div className="circle-inner">
            <img src="" alt="" />
            <h4>간병 비용 경감</h4>
            <p>
              기저귀 사용량이 줄어 들 수<br /> 있으며 침대 시트 교체 비용을
              <br /> 절감할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSectionComponent02;
