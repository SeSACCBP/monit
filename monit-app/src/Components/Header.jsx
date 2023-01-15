import React, { useState } from 'react';
import '../scss/Header.scss';
import { Link } from 'react-router-dom';
import BackTopButton from './BackTopButton';
import { AiFillDownCircle } from 'react-icons/ai';
import { AiFillUpCircle } from 'react-icons/ai';

const Header = () => {
  const [headerOn, setHeaderOn] = useState(false);

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
            <ul className="header-sub-list">
              <li className="header-sub-title">
                <a className="blank" href="#">
                  　
                </a>
              </li>
            </ul>
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
          <input type="checkbox" id="hamburger" />
          <label htmlFor="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className="hamburger-sidebar">
            <div className="accordion">
              <input type="checkbox" id="accordion-menu-1" />
              <label htmlFor="accordion-menu-1">
                회사 소개
                <p className="accordion-button">
                  <AiFillDownCircle />
                </p>
                <em>
                  <AiFillUpCircle />
                </em>
              </label>
              <div className="accordion-menu-list">
                <Link to="/overview">기업 이념</Link>
                <Link to="/introduction">사업 개요</Link>
                <Link to="/history">회사 연혁</Link>
                <Link to="/location">오시는 길</Link>
              </div>
              <input type="checkbox" id="accordion-menu-2" />
              <label htmlFor="accordion-menu-2">
                제품 소개
                <p>
                  <AiFillDownCircle />
                </p>
                <em>
                  <AiFillUpCircle />
                </em>
              </label>
              <div className="accordion-menu-list">
                <a href="#">맥스 자세히 보기</a>
              </div>
              <input type="checkbox" id="accordion-menu-3" />
              <label htmlFor="accordion-menu-3">구매 하기</label>
              <input type="checkbox" id="accordion-menu-4" />
              <label htmlFor="accordion-menu-4">
                문의 하기
                <p>
                  <AiFillDownCircle />
                </p>
                <em>
                  <AiFillUpCircle />
                </em>
              </label>
              <div className="accordion-menu-list">
                <Link to="/contact">제품 문의</Link>
                <a href="#">제휴 문의</a>
              </div>
            </div>
          </div>
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
