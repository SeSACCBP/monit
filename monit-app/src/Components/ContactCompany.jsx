import React from "react";
import "../scss/ContactCompany.scss";
import "../scss/style.scss";
import HeaderInquiryCom from "./SubHeader/HeaderInquiryCom";

const ContactCompany = () => {
  return (
    <div className="ContactC">
      <HeaderInquiryCom />
      <div className="map-title">
        Contact Us
        <p>제휴 문의</p>
      </div>
      <div className="Contact-Sec">
        모닛과의 제휴에 관심이 있으시다면 아래 내용을 입력하여 제출해주세요.
        <br />
        담당 부서에서 빠르게 확인 후 회신드리겠습니다.
      </div>
      <div className="Contact-body">
        <div className="Contact-Thi">
          <div className="Contact-Thi-img"></div>
          <form>
            <div className="Contact-form-big">Partnership</div>
            이름 <input type="text" />
            이메일 <input type="email" />
            내용 <textarea />
            <div>
              <input
                type="submit"
                value="send"
                className="Contact-Thi-Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCompany;
