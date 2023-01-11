import React from "react";

const HistoryChange = (props) => {
  const { button } = props;

  const years = [
    {
      id: "1",
      value: "2022",
      text: [
        "11월",
        "건강보험공단 복지용구등록진행",
        "11월",
        "카톨릭대학 성빈센트병원 MOU 체결",
        "11월",
        "홍콩 Gerontechnology Platform Test Bed 품목 선정",
        "10월",
        "홍콩병원협회 디지탈헬스케어 구매품목등록",
        "10월",
        "뒤셀도르프 Diakonie 요양원 시범도입",
        "10월",
        "뒤셀도르프 레하케어 전시참가",
        "10월",
        "온누리요양원 MOU 체결 시법도입 사업진행",
        "01월",
        "CES 2022 Samsung관 전시",
      ],
    },
    {
      id: "2",
      value: "2021",
      text: [
        "10월",
        "카톨릭 대학병원 임상 테스트 진행",
        "10월",
        "홍콩 Delta Pyramax 독점공급계약",
        "09월",
        "코스트코 캐나다 입점 확정",
        "06월",
        "엘더리 케어 관련 고려대학교 안암/안산병원, 카톨릭 대학병원, 양평군요양원, 은혜의 집 베타테스트 진행",
        "06월",
        "싱가포르 UnitedBMEC 독점공급계약 체결",
      ],
    },
    {
      id: "3",
      value: "2020",
      text: [
        "09월",
        "유한킴벌리 요양기관 대상 베타테스트 계약 체결",
        "08월",
        "Series A 브릿지 펀드 유치",
        "03월",
        "JPMA Innovation Award 수상",
        "01월",
        "CES 2020 참가",
      ],
    },
    {
      id: "4",
      value: "2019",
      text: [
        "01월",
        "MONIT America Inc.설립(Delaware C-corp)",
        "01월",
        "CES 2019 참가",
        "01월",
        "SkyDeck Accelerator Cohort Team 선정(UC Berkeley Foundation)",
      ],
    },
    {
      id: "5",
      value: "2018",
      text: [
        "09월",
        "Series A 투자 유치",
        "08월",
        "New York NOW 참가",
        "08월",
        "스마트 베이비 캐리어 'Bebefit' 출시",
        "07월",
        "2018 KITAS 스마트 디바이스쇼 참가",
        "06월",
        "스마트 베이비 모니터 '모닛' 출시",
        "04월",
        "Orange Fab Asia Acceleration 선정",
        "03월",
        "Kimberly Clark 공식 Supplier 선정",
        "02월",
        "K-Global 300 선정",
        "01월",
        "KIC Washington Bio Acceleration 선정",
      ],
    },
    {
      id: "6",
      value: "2017",
      text: [
        "10월",
        "유한킴벌리 스마트 프로비스 제공 MOU 계약 체결",
        "09월",
        "Tech Crunch Disrupt SF 2017 참가",
        "07월",
        "퍼스트 펭귄형 창업기업 선정",
        "06월",
        "삼성벤처캐피탈 투자 유치",
        "06월",
        "삼성전자 C-Lab Spinoff 및 법인 설립(서울 서초구)",
      ],
    },
  ];

  return (
    <>
      {years.map((one, index) => {
        let arr = [];

        if (one.value == button) {
          return (
            <ul key={one.text + index}>
              {one.text.map((textone, index) => (
                <li key={textone + index}>{textone}</li>
              ))}
            </ul>
          );
        }
      })}
    </>
  );
};

export default HistoryChange;
