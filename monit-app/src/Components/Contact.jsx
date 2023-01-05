import React from "react";
import "../scss/Contact.scss";
import "../scss/style.scss";
import HeaderInquiry from "./SubHeader/HeaderInquiry";

const Contact = () => {
  return (
    <div className="Contact">
      <HeaderInquiry />
      <div className="Contact-Fir">
        Contact Us
        <p>제품 문의</p>
      </div>
      <div className="Contact-Sec">
        제품에 관해 문의하실 내용을 보내주시면, <br />
        빠르게 확인 후 회신드리겠습니다.
      </div>
      <div className="Contact-Thi">
        <form>
          <div>
            이름 <input type="text" />
          </div>
          <div>
            이메일 <input type="email" />
          </div>
          <div>
            내용 <input type="text" />
          </div>
          <div>
            <input
              type="submit"
              value="문의하기"
              className="Contact-Thi-Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
