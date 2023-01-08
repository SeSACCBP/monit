import "../scss/Introduction.scss";
import logo from "../imgs/Fragment_img/monitLogo_white.png";
import HeaderIntro from "./SubHeader/HeaderIntro";

function Introduction() {
  return (
    <>
      <HeaderIntro />

      <div>
        <div className="introduction-items-wrapper">
          {/* ---------introduction-title--------- */}

          <div className="introduction-title-wrapper">
            <div className="introduction-title">Introduction</div>
            <div className="introduction-title-discription">
              모닛은 2017년 삼성전자 C-lab에서 스핀오프하여 설립된
              스타트업입니다.
              <br />
              독자적인 기술을 기반으로 하여{" "}
              <span className="introduction-title-discription-fontcolor">
                AI 디지털 헬스케어 플랫폼
              </span>
              으로 빠르게 진화 발전하고 있습니다.
            </div>
          </div>

          <hr className="임시"></hr>
          {/* ---------introduction-index--------- */}

          <div className="introductin-index-wrapper">
            <span className="introductin-index-fontcolor">기업명</span>
            &ensp;주식회사 모닛
            <br />
            <span className="introductin-index-fontcolor">대표자</span>
            &ensp;박도형
            <br />
            <span className="introductin-index-fontcolor">설립일</span>
            &ensp;2017.04.10
            <br />
            <span className="introductin-index-fontcolor">소재지</span>
            &ensp;서울시 서초구 효령로 40 기탄빌딩 3층
            <br />
            <span className="introductin-index-fontcolor">업종</span>
            &emsp;&ensp;연구개발업 | 통신판매업 | 포털 및 기타 인터넷 정보 |
            매개 서비스업 | 소프트웨어 개발업 | 미디어 콘텐츠 창작업
            <br />
            <span className="introductin-index-fontcolor">주요제품</span>
            &emsp;MECS 욕창방지 기저귀 케어 시스템 | MONIT 스마트 베이비 모니터
            | MONIT Digital Therapeutics | Bebefit 스마트 베이비 케어 제품군
            <br />
          </div>

          <hr className="임시"></hr>

          {/* ---------introduction-cicles--------- */}

          {/* <div className="introduction-circles-wrapper">
            <div className="introduction-circle">
              <div className="introduction-circle-inner">
                <div className="introduction-center-circle-content">
                  <p>MONIT</p>
                  <p>
                    AI 데이터 분석 기반 <br />
                    디지털 헬스케어 플랫폼
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="introduction-circles-wrapper">
            <div className="cicle01">
              <div className="circle circle-c01-up"></div>
              <div className="circle circle-c01-down">베이비 모니터</div>
            </div>

            <div className="circle03">
              <div className="circle circle-c03-up"></div>
              <div className="circle circle-c03-down">베베핏 스마트 기어</div>
            </div>

            <div className="bigC">
              <div className="smallC">
                <img src={logo} alt="" />
                <p>AI 데이터 분석 기반 </p>
                <p> 디지털 헬스케어 플랫폼</p>
              </div>
            </div>

            <div className="circle02">
              <div className="circle circle-c02-up"></div>
              <div className="circle circle-c02-down">펫 케어</div>
            </div>

            <div className="circle04">
              <div className="circle circle-c04-up"></div>
              <div className="circle circle-c04-down">시니어 케어 시스템</div>
            </div>
          </div>

          <div className="introduction-lines-wrapper">
            <div className="line01"></div>
            <div className="line02"></div>
            <div className="line03"></div>
            <div className="line04"></div>
          </div>

          <hr className="임시"></hr>

          {/* ---------testing--------- */}
        </div>
        {/* <div>띄어쓰기 테스트//&nbsp;테스트2&ensp;테스트3&emsp;테스트4</div> */}
      </div>
    </>
  );
}

export default Introduction;
