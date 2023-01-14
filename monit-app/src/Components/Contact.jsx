import React from "react";
import SubHeader from "./SubHeader";
import "../scss/Contact.scss";

const Contact = () => {
  const title = {
    pageSection: "문의 하기",
    pageTitle: "제픔 문의",
    img: "SubHeader-Img-Inq",
  };
  return (
    <div className="Contact">
      <SubHeader title={title} />
      <div className="map-title">
        Contact Us
        <p>제품 문의</p>
      </div>
      <div className="Contact-Sec">
        제품에 관해 문의하실 내용을 보내주시면, <br />
        빠르게 확인 후 회신드리겠습니다.
      </div>
      <div className="Contact-body">
        <div className="Contact-Thi">
          <div className="Contact-Thi-img"></div>
          <form>
            <div className="Contact-form-big">Contact</div>
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

export default Contact;
