import React, { useEffect, useState } from "react";

//첫화면에서 2022 연혁 나오게 만들기
//월-설명 글씨체 굵기 다르게..,.,.,.,,.,..,,,..,,,,,,.,,..,,..,,.

const History = () => {
  const years = [
    {
      value: "2022",
      text: [
        "11 건강보험공단 복지용구등록진행 ",
        "11 카톨릭대학 성빈센트병원 MOU 체결",
        "11 홍콩 Gerontechnology Platform Test Bed 품목 선정",
        "10 홍콩병원협회 디지탈헬스케어 구매품목등록",
        "10 뒤셀도르프 Diakonie 요양원 시범도입",
        "10 뒤셀도르프 레하케어 전시참가",
        "10 온누리요양원 MOU 체결 시법도입 사업진행",
        "01 CES 2022 Samsung 관 전시",
      ],
    },
    {
      value: "2021",
      text: [
        "10 카톨릭 대학병원 임상 테스트 진행",
        "10 홍콩 Delta Pyramax 독점공급계약",
        "09 코스트코 캐나다 입점 확정",
        "06 엘더리 케어 관련 고려대학교 안암/안산병원, 카톨릭 대학병원, 양평군요양원, 은혜의집 베타테스트 진행",
        "06 싱가포르 UnitedBMEC 독점공급계약 체결",
      ],
    },
    {
      value: "2020",
      text: [
        "09 유한킴벌리 요양기관 대상 베타테스트 계약 체결",
        "08 Series A 브릿지 펀드 유치",
        "03 JPMA Innovation Award 수상",
        "01 CES 2020 참가",
      ],
    },
    {
      value: "2019",
      text: [
        "01 CES 2020 참가",
        "01 MONIT America Inc. 설립(Delaware C-corp)",
        "01 CES 2019 참가",
        "01 SkyDeck Accelerator Cohort Team 선정(UC Berkeley Foundation)",
      ],
    },
    {
      value: "2018",
      text: [
        "09 Series A 투자 유치",
        "08 New York NOW 참가",
        "08 스마트 베이비 캐리어 'Bebefit' 출시",
        "07 2018 KITAS 스마트 디바이스쇼 참가",
        "06 스마트 베이비 모니터 '모닛' 출시",
        "04 Orange Fab Asia Acceleration 선정",
        "03 Kimberly Clark 공식 Supplier 선정",
        "02 K-Global 300 선정",
        "01 KIC Washington Bio Acceleration 선정",
      ],
    },
    {
      value: "2017",
      text: [
        "10 유한킴벌리 스마트 프로비스 제공 MOU 계약 체결",
        "09 Tech Crunch Disrupt SF 2017 참가",
        "07 퍼스트 펭귄형 창업기업 선정",
        "06 삼성벤처캐피탈 투자 유치",
        "06 삼성전자 C-Lab Spinoff 및 법인 설립(서울 서초구)",
      ],
    },
  ];
  const [but, setBut] = useState("");

  const buttonOnclick = (e) => {
    setBut(e.target.value);
    // console.log(e.target.value);
    // console.log(typeof e.target.value);
  };

  const [p, setP] = useState("");

  useEffect(() => {
    years.map((y) => {
      if (y.value == but) {
        setP(y.text);
      }
    });
  }, [but]);

  let i;
  let arr = [];

  for (let i = 0; i < p.length; i++) {
    arr.push(p[i]);
  }

  return (
    <>
      <button value="2022" onClick={buttonOnclick}></button>
      <button value="2021" onClick={buttonOnclick}></button>
      <button value="2020" onClick={buttonOnclick}></button>
      <button value="2019" onClick={buttonOnclick}></button>
      <button value="2018" onClick={buttonOnclick}></button>
      <button value="2017" onClick={buttonOnclick}></button>

      <div>
        {arr.map((one) => {
          return (
            <ul>
              <li>{one}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default History;
