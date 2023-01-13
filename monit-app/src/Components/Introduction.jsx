import SubHeader from "./SubHeader";
import IntroductionInformation from "./IntroductionInformation";
import IntroductionMindmap from "./IntroductionMindmap";
import "../scss/Introduction.scss";

function Introduction() {
  const title = {
    pageSection: "회사 소개",
    pageTitle: "사업 개요",
    img: "SubHeader-Img",
  };
  return (
    <>
      <SubHeader title={title} />
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
