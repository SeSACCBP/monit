import React from "react";
import "../../scss/style.scss";
import "../../scss/SubHeader.scss";
import { AiOutlineRight } from "react-icons/ai";

const HeaderLo = () => {
  return (
    <div className="SubHeader">
      <div className="SubHeader-Img">
        <p>오시는 길</p>
      </div>
      <div className="SubHeader-word">
        회사 소개 <AiOutlineRight className="SubHeader-icon" />
        오시는 길
      </div>
    </div>
  );
};

export default HeaderLo;
