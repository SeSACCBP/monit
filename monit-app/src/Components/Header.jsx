import React, { useState } from 'react';
import '../scss/Header.scss';
import { Link } from 'react-router-dom';
import BackTopButton from './BackTopButton';

const Header = () => {
  const [headerOn, setHeaderOn] = useState(false);

  const [ham, setHam] = useState(true);

  const [isOn1, setisOn1] = useState(true);

  const buttonClick = (e) => {
    setHam((current) => !current);
    setHamx((current) => !current);
  };

  const [isOn2, setisOn2] = useState(true);

  const [isOn3, setisOn3] = useState(true);

  const [hamx, setHamx] = useState(true);

  return (
    <div className="header-line">
      <nav className="header-area">
        <a className="header-imgArea" href="/"></a>
        <ul
          className="header-list"
          onMouseOver={() => setHeaderOn(true)}
          onMouseOut={() => setHeaderOn(false)}
        >
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

      <div className={headerOn ? 'header-back-active' : 'header-back'}></div>

      <nav className="header-area-m">
        <div className="header-imgArea-m">
          <a className="header-img-m" href="/"></a>
        </div>
        <div className="hamburger-area">
          <button className="hamburger-btn" onClick={buttonClick} href="#">
            <div className={hamx ? 'hamburger' : 'hamburger-active'}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </button>
        </div>
        <div className={ham ? 'header-list-m' : 'header-list-m-on'}>
          <ul className="header-list-m-depth1">
            <li className="header-title-m" id="company_intro">
              <a href="#company_intro" onClick={() => setisOn1(!isOn1)}>
                회사 소개
              </a>
              <div
                className={
                  isOn1 ? 'header-sub-list-m-hide' : 'header-sub-list-m'
                }
              >
                <a href="#">기업 이념</a>
                <a href="#">사업 개요</a>
                <a href="#">회사 연혁</a>
                <a href="#">오시는 길</a>
              </div>
            </li>
            <li className="header-title-m" id="product_intro">
              <a href="#product_intro" onClick={() => setisOn2(!isOn2)}>
                제품 소개
              </a>
              <div
                className={
                  isOn2 ? 'header-sub-list-m-hide' : 'header-sub-list-m'
                }
              >
                <a href="#">맥스 자세히 보기</a>
              </div>
            </li>
            <li className="header-title-m">
              <a href="#">구매 하기</a>
            </li>
            <li className="header-title-m" id="contact_us">
              <a href="#contact_us" onClick={() => setisOn3(!isOn3)}>
                문의 하기
              </a>
              <div
                className={
                  isOn3 ? 'header-sub-list-m-hide' : 'header-sub-list-m'
                }
              >
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
