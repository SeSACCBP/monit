import "../scss/Introduction.scss";

function Introduction() {
  return (
    <>
      <div>
        <div className="introduction-title-wrapper">
          <div className="introduction-title">Introduction</div>
          <div className="introduction-title-discription">
            모닛은 2017년 삼성전자 C-lab에서 스핀오프하여 설립된 스타트업입니다.
            <br />
            독자적인 기술을 기반으로 하여{" "}
            <span className="introduction-title-discription-fontcolor">
              AI 디지털 헬스케어 플랫폼
            </span>
            으로 빠르게 진화 발전하고 있습니다.
          </div>
        </div>

        <hr className="임시"></hr>

        <div className="introductin-index-wrapper">
          <span className="introductin-index-fontcolor">기업명</span>&ensp;주식회사 모닛
          <br />
          <span className="introductin-index-fontcolor">대표자</span>&ensp;박도형
          <br />
          <span className="introductin-index-fontcolor">설립일</span>&ensp;2017.04.10
          <br />
          <span className="introductin-index-fontcolor">소재지</span>&ensp;서울시 서초구 효령로 40
          기탄빌딩 3층
          <br />
          <span className="introductin-index-fontcolor">업종</span>&emsp;&ensp;연구개발업 | 통신판매업
          | 포털 및 기타 인터넷 정보 | 매개 서비스업 | 소프트웨어 개발업 |
          미디어 콘텐츠 창작업
          <br />
          <span className="introductin-index-fontcolor">주요제품</span>&emsp;MECS 욕창방지 기저귀 케어
          시스템 | MONIT 스마트 베이비 모니터 | MONIT Digital Therapeutics |
          Bebefit 스마트 베이비 케어 제품군
          <br />
        </div>





        <hr className="임시"></hr>

        <hr className="임시"></hr>
        {/* //1. 네모 -> 동그라미. 2. 차트가져오기?? 👉 내 선택*/}
        <div>띄어쓰기 테스트//&nbsp;테스트2&ensp;테스트3&emsp;테스트4</div>
      </div>
    </>
  );
}

export default Introduction;
