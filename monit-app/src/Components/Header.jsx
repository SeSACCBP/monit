import React from "react";
import "../scss/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-area">
      <div className="header-imgArea" />
      <ul className="header-list">
        <li className="header-title">
          <Link to="/overview">회사 소개</Link>
          <ul className="header-sub-list">
            <li className="header-sub-title">기업 이념</li>
            <li className="header-sub-title">사업 개요</li>
            <li className="header-sub-title">회사 연혁</li>
            <li className="header-sub-title">오시는 길</li>
          </ul>
        </li>
        <li className="header-title">
          제품 소개
          <ul className="header-sub-list">
            <li className="header-sub-title">맥스 자세히 보기</li>
          </ul>
        </li>
        <li className="header-title">구매 하기</li>
        <li className="header-title">
          <Link to="/contact">문의 하기</Link>
          <ul className="header-sub-list">
            <li className="header-sub-title">제품 문의</li>
            <li className="header-sub-title">제휴 문의</li>
          </ul>
        </li>
        <li className="header-title">Accelerated by</li>
      </ul>
    </nav>
  );
};

export default Header;
