<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import Button from './Button';

const HeaderBlock = styled.div`
  position: fixed;
=======
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Responsive from "./Responsive";
import Button from "./Button";
import logo from "../../img/ag-logo.png"
import "../../Nav.css"

const HeaderBlock = styled.div`
>>>>>>> develop
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
<<<<<<< HEAD
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            Artgram
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
=======
  color: white;
  font-weight: 1000;
  margin-right: 1rem;
`;

const Header = ({ user, onLogout, onDelete }) => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      <div className={`nav ${show && "nav__white"}`}>
        <Link to="/" className="logo">
          <img
          className="nav__logo"
          src="https://yt3.ggpht.com/QiIRCMnjNvamjIxaJrieyvOFZ7uGCcZx4MQJoyR6lDcB7Q4f0Mb2vVfVG0BlL3V3LoZwQFuR=s900-c-k-c0x00ffffff-no-rj"
          alt=""
      />
        </Link>
        {user ? (
          <div className="right">
            <UserInfo>{user.username}</UserInfo>
            <Button onClick={onLogout}>로그아웃</Button>
            <Button to="/updateUserInfo">회원정보수정</Button>
            <Button onClick={onDelete}>회원탈퇴</Button>
          </div>
        ) : (
          <div className="right">
            <Button to="/login">로그인</Button>
          </div>
        )}
      </div>
>>>>>>> develop
      <Spacer />
    </>
  );
};

export default Header;
