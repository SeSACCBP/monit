import React from "react";
import { Link, Route } from "react-router-dom";
import "./History.scss";
import History2017 from "./History2017";
import History2018 from "./History2018";
import History2019 from "./History2019";
import History2020 from "./History2020";
import History2021 from "./History2021";

const History = () => {
  return (
    <div className="History-container">
      <div>
        <Link to="/">2022</Link>
        <ol>
          <li>11월 건강보험공단 복지용구등록진행 </li>
          <li>11월 카톨릭대학 성빈센트병원 MOU체결</li>
          <li>11월 홍콩 Gerontechnology Platform Test Bed 품목 선정</li>
          <li>10월 홍콩병원협회 디지탈헬스케어 구매품목등록</li>
          <li>10월 뒤셀도르프 Diakonie 요양원 시범도입 </li>
          <li>10월 뒤셀도르프 레하케어 전시참가 </li>
          <li>10월 온누리요양원 MOU체결 시법도입 사업진행 </li>
          <li>1월 CES 2022 Samsung 관 전시</li>
        </ol>
      </div>
      <div>
        <Link to="/2021">2021</Link>
      </div>
      <div>
        <Link to="/2020">2020</Link>
      </div>
      <div>
        <Link to="/2019">2019</Link>
      </div>
      <div>
        <Link to="/2018">2018</Link>
      </div>
      <div>
        <Link to="/2017">2017</Link>
      </div>
      <Route path="/" exact={true} component={History} />
      <Route path="/2021" component={History2021} />
      <Route path="/2020" component={History2020} />
      <Route path="/2019" component={History2019} />
      <Route path="/2018" component={History2018} />
      <Route path="/2017" component={History2017} />
    </div>
  );
};

export default History;
