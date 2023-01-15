import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../scss/MainSectionComponent01.scss";
import "../scss/style.scss";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

export default function App() {
  return (
    <div className="main-section-component01">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={false}
        className="mySwiper">
        <SwiperSlide>
          <div className="main-section-component01-img01">
            <div className="main-section-component01-circle-wrapper">
              <div className="main-section-component01-circle-inner">
                <div className="main-section-component-text-wrapper">
                  <h4>사랑하는 부모님을 위한</h4>
                  <h3>스마트한 기저귀 케어 시스템</h3>
                  <h2>MECS 맥스</h2>
                  <button className="main-section-component01-bt">
                    <a href="#">자세히 보기</a>
                  </button>
                  <p>
                    어르신의 기저귀 교체 시험을 앱을 통해 쉽고 간편하게
                    알려줍니다
                    <br />
                    사랑하는 부모님의 건강을 위해 선택하세요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-section-component01-img01">
            <div className="main-section-component01-circle-wrapper">
              <div className="main-section-component01-circle-inner">
                <div className="main-section-component-text-wrapper">
                  <h4>사랑하는 부모님을 위한</h4>
                  <h3>스마트한 기저귀 케어 시스템</h3>
                  <h2>MECS 맥스</h2>
                  <button className="main-section-component01-bt">
                    <a href="#">자세히 보기</a>
                  </button>
                  <p>
                    어르신의 기저귀 교체 시험을 앱을 통해 쉽고 간편하게
                    알려줍니다
                    <br />
                    사랑하는 부모님의 건강을 위해 선택하세요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-section-component01-img01">
            <div className="main-section-component01-circle-wrapper">
              <div className="main-section-component01-circle-inner">
                <div className="main-section-component-text-wrapper">
                  <h4>사랑하는 부모님을 위한</h4>
                  <h3>스마트한 기저귀 케어 시스템</h3>
                  <h2>MECS 맥스</h2>
                  <button className="main-section-component01-bt">
                    <a href="#">자세히 보기</a>
                  </button>
                  <p>
                    어르신의 기저귀 교체 시험을 앱을 통해 쉽고 간편하게
                    알려줍니다
                    <br />
                    사랑하는 부모님의 건강을 위해 선택하세요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-section-component01-img01">
            <div className="main-section-component01-circle-wrapper">
              <div className="main-section-component01-circle-inner">
                <div className="main-section-component-text-wrapper">
                  <h4>사랑하는 부모님을 위한</h4>
                  <h3>스마트한 기저귀 케어 시스템</h3>
                  <h2>MECS 맥스</h2>
                  <button className="main-section-component01-bt">
                    <a href="#">자세히 보기</a>
                  </button>
                  <p>
                    어르신의 기저귀 교체 시험을 앱을 통해 쉽고 간편하게
                    알려줍니다.
                    <br />
                    사랑하는 부모님의 건강을 위해 선택하세요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
