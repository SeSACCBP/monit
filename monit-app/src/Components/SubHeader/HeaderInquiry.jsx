import React from "react";
import "../../scss/style.scss";
import "../../scss/SubHeader.scss";
import { AiOutlineRight } from "react-icons/ai";

const HeaderInquiry = () => {
  return (
    <div className="SubHeader">
      <div className="SubHeader-Img-Inq">
        <p>문의 하기</p>
      </div>
      <div className="SubHeader-word">
        문의 하기 <AiOutlineRight className="SubHeader-icon" />
        제품 문의
      </div>
    </div>
  );
};

export default HeaderInquiry;
