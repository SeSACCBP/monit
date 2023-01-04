import React from "react";
import "../../scss/style.scss";
import "../../scss/SubHeader.scss";
import { AiOutlineRight } from "react-icons/ai";

const HeaderOver = () => {
  return (
    <div className="SubHeader">
      <div className="SubHeader-Img">
        <p>기업 이념</p>
      </div>
      <div className="SubHeader-word">
        회사 소개 <AiOutlineRight className="SubHeader-icon" />
        기업 이념
      </div>
    </div>
  );
};

export default HeaderOver;
