import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import Button from './Button';
import Image from '../../img/cookie.jpg';
// import Modal from './Modal';
import './Modal.css'
import { Modal } from 'react-bootstrap';

// Banner
const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1.5rem;
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
  height: 8rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1.5rem;
`;

const Header = ({ user, onLogout, onDelete }) => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            <img src='/logo.png' alt='logo'></img>
          </Link>
          <Search>
          <div>
            <input type="text" placeholder="검색어를 입력해주세요" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>

        <Nav>
          <NavListWrap>
          
            
          </NavListWrap>
          </Nav>

          {user ? (
            <div className="right">
              <NavList>
              <a href='#!'>
                <img src="/images/nav-network.svg" alt="" />
                <span>Follow</span>
              </a>
            </NavList>
            <NavList>
               <a href='#!'>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>
            <NavList>
               <a href='write'>
                <img src="/images/plus-icon.svg" alt="" />
                <span>New</span>
              </a>
            </NavList>
              <img
              className="profile"
              src={Image}
              alt="User-logo"
              onClick={handleShow}
              />
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>프로필</Modal.Title>
                </Modal.Header>
                <Modal.Body>프로필 상세화면 모달창 입니다!</Modal.Body>
                <Modal.Footer>
                  <Button onClick={handleClose}>
                    닫기
                  </Button>
                  <Button>
                    <Link to="/updateUserInfo" style={{ textDecoration: 'none', color: 'white' }}>회원정보수정</Link>
                  </Button>
                  <Button className="button" onClick={onDelete}>회원탈퇴</Button>
                </Modal.Footer>
              </Modal>
              <UserInfo>{user}</UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}

        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #E8D9FF;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #ffd2d2;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;


export default Header;
