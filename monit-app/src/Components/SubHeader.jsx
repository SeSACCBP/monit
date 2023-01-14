import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import "../scss/SubHeader.scss";

const SubHeader = (props) => {
  const { title } = props;

  return (
    <div className="SubHeader">
      <div className={title.img}>
        <p>{title.pageTitle}</p>
      </div>
      <div className="SubHeader-word">
        {title.pageSection}
        <AiOutlineRight className="SubHeader-icon" />
        {title.pageTitle}
      </div>
    </div>
  );
};

export default SubHeader;
