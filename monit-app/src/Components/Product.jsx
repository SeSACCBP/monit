import React from 'react';
import SubHeader from './SubHeader';
import '../scss/Contact.scss';
import { FaRegUserCircle, FaRegEnvelope } from 'react-icons/fa';
import Contact from './Contact';

const Product = () => {
  const title = {
    pageSection: '문의 하기',
    pageTitle: '제품 문의',
    img: 'SubHeader-Img-Inq',
  };
  const text = `제품에 관해 문의하실 내용을 보내주시면
빠르게 확인 후 회신드리겠습니다.`;
  return (
    <>
      <SubHeader title={title} />
      <div className="map-title">
        Contact Us
        <p>제품 문의</p>
      </div>
      <Contact text={text} />
    </>
  );
};

export default Product;
