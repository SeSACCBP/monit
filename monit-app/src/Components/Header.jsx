import React, { useState } from "react";
import "../scss/Header.scss";
import { Link } from "react-router-dom";
import BackTopButton from "./BackTopButton";

const Header = () => {
  // const header_area = document.querySelector('.header-list');
  // const back_area = document.querySelector('.header-back');

  // header_area.addEventListener('mouseover', function () {
  //   back_area.classList.add('active');
  // });
  // header_area.addEventListener('mouseout', function () {
  //   back_area.classList.remove('active');
  // });

  const [isOn, setisOn] = useState(true);

  const buttonClick = (e) => {
    // console.log(e.target);
    setisOn((current) => !current);
  };

  return (
    <div className="header-line">
      <nav className="header-area">
        <a className="header-imgArea" href="/"></a>
        <ul className="header-list">
          <li className="header-title">
            <a href="#">회사 소개</a>
            <ul className="header-sub-list">
              <li className="header-sub-title">
                <Link to="/overview"> 기업 이념 </Link>
              </li>
              <li className="header-sub-title">
                <Link to="/introduction">사업 개요</Link>
              </li>
              <li className="header-sub-title">
                <Link to="/history">회사 연혁</Link>
              </li>
              <li className="header-sub-title">
                <Link to="/location">오시는 길</Link>
              </li>
            </ul>
          </li>
          <li className="header-title">
            <a href="#">제품 소개</a>
            <ul className="header-sub-list">
              <li className="header-sub-title">
                <a href="#">맥스 자세히 보기</a>
              </li>
            </ul>
          </li>
          <li className="header-title">
            <a href="#">구매 하기</a>
          </li>
          <li className="header-title">
            <a href="#">문의 하기</a>
            <ul className="header-sub-list">
              <li className="header-sub-title">
                <Link to="/contact">제품 문의</Link>
              </li>
              <li className="header-sub-title">
                <a href="#">제휴 문의</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="header-back"></div>
      <nav className="header-area-m">
        <div className="header-imgArea-m">
          <a className="header-img-m" href="/"></a>
        </div>
        <div className="hamburger-area">
          <button className="hamburger_btn" onClick={buttonClick} href="#">
            <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </button>
        </div>
        {/* <div className="header-list-m"> */}
        <div className={isOn ? "header-list-m" : "header-list-m-on"}>
          <ul className="header-list-m-depth1">
            <li className="header-title-m" id="company_intro">
              <a href="#company_intro">회사 소개</a>
              <div className="header-sub-list-m">
                <a href="#">기업 이념</a>
                <a href="#">사업 개오</a>
                <a href="#">회사 연혁</a>
                <a href="#">오시는 길</a>
              </div>
            </li>
            <li className="header-title-m" id="product_intro">
              <a href="#product_intro">재품 소개</a>
              <div className="header-sub-list-m">
                <a href="#">맥스 자세히 보기</a>
              </div>
            </li>
            <li className="header-title-m">
              <a href="#">구매 하기</a>
            </li>
            <li className="header-title-m" id="contact_us">
              <a href="#contact_us">문의 하기</a>
              <div className="header-sub-list-m">
                <a href="#">제품 문의</a>
                <a href="#">제휴 문의</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="header-title-samsung">
        <li className="header-samsung">
          Accelerated by
          <div className="header-samsung-logo" />
        </li>
      </ul>
      <BackTopButton />
    </div>
  );
};

export default Header;
