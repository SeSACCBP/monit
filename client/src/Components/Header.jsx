import React, { useState } from "react";
import "../scss/Header.scss";
import { Link } from "react-router-dom";
import BackTopButton from "./BackTopButton";
import { AiFillDownCircle } from "react-icons/ai";
import { AiFillUpCircle } from "react-icons/ai";

const Header = () => {
  const [headerOn, setHeaderOn] = useState(false);

  const [hambugerStyle, sethambugerStyle] = useState({
    opacOn: true,
    checkOption: false,
  });

  const headerOpac = () => {
    sethambugerStyle({
      ...hambugerStyle,
      opacOn: opacOn ? false : true,
      checkOption: !checkOption,
    });
  };

  const { opacOn, checkOption } = hambugerStyle;

  return (
    <div className="header-line">
      <div className={opacOn ? "header-opacity" : "header-opacity-on"}></div>
      <nav className="header-area">
        <a className="header-imgArea" href="/"></a>
        <ul
          className="header-list"
          onMouseOver={() => setHeaderOn(true)}
          onMouseOut={() => setHeaderOn(false)}
        >
          <li className="header-title">
            <Link to="#">회사 소개</Link>
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
            <Link to="#">제품 소개</Link>
            <ul className="header-sub-list">
              <li className="header-sub-title">
                <Link to="/">맥스 자세히 보기</Link>
              </li>
            </ul>
          </li>
          <li className="header-title">
            <Link to="#">구매 하기</Link>
            <ul className="header-sub-list">
              <li className="header-sub-title">
                <Link className="blank" to="/"></Link>
              </li>
            </ul>
          </li>
          <li className="header-title">
            <Link to="#">문의 하기</Link>
            <ul className="header-sub-list">
              <li className="header-sub-title">
                <Link to="/product">제품 문의</Link>
              </li>
              <li className="header-sub-title">
                <Link to="/partner">제휴 문의</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className={headerOn ? "header-back-active" : "header-back"}></div>
      <nav className="header-area-m">
        <div className="header-imgArea-m">
          <Link className="header-img-m" to="/"></Link>
        </div>

        <div className="hamburger-area">
          <input
            type="checkbox"
            id="hamburger"
            name="opacOn"
            value={opacOn}
            checked={checkOption}
            onClick={headerOpac}
            onChange={headerOpac}
          />
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
                <Link to="/overview" onClick={headerOpac}>
                  기업 이념
                </Link>
                <Link to="/introduction" onClick={headerOpac}>
                  사업 개요
                </Link>
                <Link to="/history" onClick={headerOpac}>
                  회사 연혁
                </Link>
                <Link to="/location" onClick={headerOpac}>
                  오시는 길
                </Link>
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
                <Link to="#" onClick={headerOpac}>
                  맥스 자세히 보기
                </Link>
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
                <Link to="/product" onClick={headerOpac}>
                  제품 문의
                </Link>
                <Link to="/partner" onClick={headerOpac}>
                  제휴 문의
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <ul className="header-title-samsung">
        <li className="header-samsung">
          <p> Accelerated by </p>
          <div className="header-samsung-logo" />
        </li>
      </ul>
      <BackTopButton />
    </div>
  );
};

export default Header;
