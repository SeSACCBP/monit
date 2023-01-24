import React from "react";
import "../scss/Error404.scss";

const Error404 = () => {
  return (
    <div className="error404-container">
      <div className="error404-wrapper">
        <div className="error404-number-wrapper">
          <h4 className="error404-big-number">404</h4>
          {/* <h4 className="error404-small-number">404</h4> */}
        </div>
        <div className="error404-text-wrapper">
          <h3>원하시는 페이지를 찾을 수 없습니다.</h3>
          <p>
            찾으려는 페이지의 주소가 잘못 입력되었거나, 주소의 변경 혹은 삭제로
            인해 사용하실 수 없습니다. <br />
            입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
