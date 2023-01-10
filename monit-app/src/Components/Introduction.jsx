import "../scss/Introduction.scss";
import HeaderIntro from "./SubHeader/HeaderIntro";
import IntroductionInformation from "./IntroductionInformation";
import IntroductionMindmap from "./IntroductionMindmap";

function Introduction() {
  return (
    <>
      <HeaderIntro />

      <div>
        <div className="introduction-items-wrapper">
          <IntroductionInformation />

          <IntroductionMindmap />
        </div>
      </div>
    </>
  );
}

export default Introduction;
