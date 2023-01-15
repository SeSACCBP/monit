import React from "react";
import SubHeader from "./SubHeader";
import "../scss/Contact.scss";
import { FaRegUserCircle, FaRegEnvelope } from "react-icons/fa";
import Contact from "./Contact";

const Product = () => {
  const title = {
    pageSection: "문의 하기",
    pageTitle: "제휴 문의",
    img: "SubHeader-Img-Inq",
  };
  const text = `모닛과의 제휴에 관심이 있으시다면 아래 내용을 입력하여 제출해주세요.
담당 부서에서 빠르게 확인 후 회신드리겠습니다.`;
  return (
    <>
      <SubHeader title={title} />
      <div className="map-title">
        Contact Us
        <p>제휴 문의</p>
      </div>
      <Contact text={text} />
    </>
  );
};

export default Product;
