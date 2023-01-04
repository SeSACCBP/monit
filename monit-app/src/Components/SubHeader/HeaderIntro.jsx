import React from "react";
import "../../scss/style.scss";
import "../../scss/SubHeader.scss";
import { AiOutlineRight } from "react-icons/ai";

const HeaderIntro = () => {
  return (
    <div className="SubHeader">
      <div className="SubHeader-Img">
        <p>사업 개요</p>
      </div>
      <div className="SubHeader-word">
        회사 소개 <AiOutlineRight className="SubHeader-icon" />
        사업 개요
      </div>
    </div>
  );
};

export default HeaderIntro;
