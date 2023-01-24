import React from "react";
import "../scss/Contact.scss";
import { FaRegUserCircle, FaRegEnvelope } from "react-icons/fa";

const Contact = (props) => {
  const { text } = props;
  console.log(text);
  return (
    <>
      <div className="Contact">
        <div className="Contact-Sec" data-aos="fadeInUp">
          {text}
        </div>
        <div className="Contact-body" data-aos="fadeInUp">
          <div className="Contact-Thi">
            <div className="Contact-Thi-img"></div>
            <div className="form">
              <div className="input-section">
                <label htmlFor="user">
                  <FaRegUserCircle className="contact-icon" />
                </label>
                <input type="text" id="user" placeholder="이름" />
              </div>
              <div className="input-section">
                <label htmlFor="email">
                  <FaRegEnvelope className="contact-icon" />
                </label>
                <input type="email" id="email" placeholder="이메일 *" />
              </div>
              <div className="textarea-section">
                <label></label>
                <textarea placeholder="내용을 작성해 주세요 *" />
              </div>
              <div className="input-warning-text">
                <span>*</span>은 필수 입력 사항입니다.
              </div>
              <div className="input-submit">
                <button type="submit" value="" className="Contact-Thi-Submit">
                  문의하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
