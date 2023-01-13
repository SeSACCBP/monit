import "../scss/Introduction.scss";
import HeaderIntro from "./SubHeader/HeaderIntro";
import IntroductionInformation from "./IntroductionInformation";
import IntroductionMindmap from "./IntroductionMindmap";

function Introduction() {
  return (
    <>
      <HeaderIntro />
      <div className="map-title">
        Itroduction <br />
        <p>사업 개요</p>
      </div>
      <div className="introduction-items-wrapper">
        <IntroductionInformation />

        <IntroductionMindmap />
      </div>
    </>
  );
}

export default Introduction;
