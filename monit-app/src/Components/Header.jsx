import React from 'react';
import '../scss/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-line">
      <nav className="header-area">
        <div className="header-imgArea">
          <a href="#"></a>
        </div>
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
      <ul className="header-title-samsung">
        <li className="header-samsung">
          Accelerated by
          <div className="header-samsung-logo" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
