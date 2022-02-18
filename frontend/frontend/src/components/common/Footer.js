import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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
            <i className="fa fa-heart"></i>
            <p>
              2반 8조 공통 프로젝트
            </p>
          </div>

          <div>
            <i className="fa fa-user"></i>
            <p>윤영, 준석, 현수, 승우, 이레</p>
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
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <i className="fa fa-youtube-play"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
