import React from "react";
import "../../scss/style.scss";
import "../../scss/SubHeader.scss";
import { AiOutlineRight } from "react-icons/ai";

const HeaderHistory = () => {
  return (
    <div className="SubHeader">
      <div className="SubHeader-Img">
        <p>회사 연혁</p>
      </div>
      <div className="SubHeader-word">
        회사 소개 <AiOutlineRight className="SubHeader-icon" />
        회사 연혁
      </div>
    </div>
  );
};

export default HeaderHistory;
