import React from "react";
import "../scss/Contact.scss";
import { FaRegUserCircle, FaRegEnvelope } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = (props) => {
  const { text } = props;
  const subtitle = text.split(",");

  const [emailContent, setEmailContent] = useState({
    name: "",
    email: "",
    message: "",
    sent: false,
  });
  const { name, email, message } = emailContent;

  const changeHandler = (e) => {
    setEmailContent({ ...emailContent, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      message: message,
    };

    axios.post("/api/forma", data).then((res) => {
      setEmailContent({
        ...emailContent,
        sent: true,
      });
      //발송완료 alert
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "문의사항이 접수되었습니다",
        showConfirmButton: false,
        timer: 3000,
      });
      resetForm();
    });
  };

  const resetForm = () => {
    setEmailContent({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="Contact">
        <div className="Contact-Sec" data-aos="fadeInUp">
          {subtitle.map((one, idx) => (
            <p key={idx}>{one}</p>
          ))}
        </div>
        <div className="Contact-body" data-aos="fadeInUp">
          <div className="Contact-Thi">
            <div className="Contact-Thi-img"></div>
            <form className="form" onSubmit={formSubmitHandler}>
              <div className="input-section">
                <label htmlFor="name">
                  <FaRegUserCircle className="contact-icon" />
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="이름"
                  value={name}
                  onChange={changeHandler}
                />
              </div>
              <div className="input-section">
                <label htmlFor="email">
                  <FaRegEnvelope className="contact-icon" />
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="이메일 *"
                  value={email}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="textarea-section">
                <label htmlFor="message"></label>
                <textarea
                  placeholder="내용을 작성해 주세요 *"
                  name="message"
                  value={message}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="input-warning-text">
                <span>*</span>은 필수 입력 사항입니다.
              </div>
              <div className="input-submit">
                <button type="submit" value="" className="Contact-Thi-Submit">
                  문의하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
