import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <img
            className="image"
            src="https://edu.ssafy.com/asset/images/logo.png"
            alt="ssafy-logo"
            onClick={() => scrollToTop()}
          />
        </div>

        <div className="footer-center">
          <div>
            <i className="marker"></i>
            <p>
              <span>2반 8조</span>공통 프로젝트
            </p>
          </div>

          <div>
            <i className="phone"></i>
            <p>전화번호를 입력해주세요.</p>
          </div>

          <div>
            <i className="fa fa-envelope" ></i>
            <p>
              ssafy@ssafy.com
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-about">Social Media</p>
          <div className="footer-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.naver.com" target="_blank" rel="noreferrer">
              <i className="naver"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
