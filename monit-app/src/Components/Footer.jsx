import React from 'react';
import '../scss/Footer.scss';
import monitLogo_pointColor from '../imgs/Footer_img/monitLogo_pointColor.png';

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="footer-imgArea" />
      <ul className="footer-list">
        <li className="footer-title">
          주식회사 모닛 | 대표이사 박도형 | <br />
          사업자 등록번호 : 112-86-00705
        </li>
        <li className="footer-title">
          주소 : 서울특별시 서초구 효령구 40 기탄빌딩 3층
        </li>
        <li className="footer-title">
          대표번호 : 02-6927-5425 |
          <a href="mailto:support@goodmonit.com"> support@goodmonit.com </a>
        </li>
        <li className="footer-title">
          COPYRIGHTⓒ 주식회사 모닛 All right reserved <br /> Designed by MONIT
          CORP
        </li>
      </ul>
    </div>
  );
};

export default Footer;
