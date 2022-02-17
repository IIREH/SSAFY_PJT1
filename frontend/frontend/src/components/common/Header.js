import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import Button from './Button';
// import Image from '../../img/cookie.jpg';
// import Modal from './Modal';
// import './Modal.css'
// import { Modal } from 'react-bootstrap';
import { changeKeyword, searchContest, searchUser, resetState } from '../../modules/search';
import client from '../../lib/api/client';

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
  margin-right: 1rem;
`;

const Header = ({ user, onLogout, onDelete }) => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  // const handleClose = () => setShow(false)
  const dispatch = useDispatch();
  const { searchContests, searchUsers, keyword } = useSelector(({ search }) => ({
    searchContests: search.searchContests,
    searchUsers: search.searchUsers,
    keyword: search.keyword,
  }))

  // 검색 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const value = e.target.value;
    dispatch(changeKeyword(value));
  };

  // 키워드에 따른 공연 검색
  useEffect(() => {
    client.get(`/api/contest?name=${keyword}`)
      .then(res => {
        console.log(res.data.response)
        dispatch(searchContest(res.data.response));
      })
      .catch(e => {
        console.log(e)
      })
  }, [keyword])

  // 키워드에 따른 유저 검색
  useEffect(() => {
    client.get(`/api/user/nickNameSearch?nickName=${keyword}`)
      .then(res => {
        console.log(res.data.response)
        dispatch(searchUser(res.data.response));
      })
      .catch(e => {
        console.log(e)
      })
  }, [keyword])

  const onResetState = () => {
    dispatch(resetState());
  }

  const newUser = user && user.replace(/"/gi, '');

  return (
    <>
      <HeaderBlock style={{zIndex:101}}>
        <Wrapper>
          <Link to="/" className="logo">
            <img src='/logo.png' alt='logo'></img>
          </Link>
          <div className="col-5 row mx-0 ms-5">
            <input type="text" className="col-12 d-flex" name="keyword" placeholder="검색어를 입력해주세요" onChange={onChange} />
            <table
              style={{
                "position": "absolute",
                "tableLayout": "fixed",
                "zIndex": "1",
                "width": "100%",
              }} 
              className="table table-light table-bordered d-block p-0 mt-5 text-start"
            >
              {keyword &&
                <div>
                  <tbody className="border">
                    <tr className="bg-dark text-light">공연 검색</tr>
                    {searchContests ?
                      (searchContests.map(searchContest => (
                        <tr className="" key={searchContest.id}>
                          <Link to="#" className="text-black p-0 mb-1">
                            {searchContest.name}
                          </Link>
                        </tr>
                      )))
                    :
                      <tr>공연 검색 결과가 없습니다.</tr>
                    }
                  </tbody>
                  <tbody className="border">
                    <tr className="bg-dark text-light">사용자 검색</tr>
                    {searchUsers.map(searchUser => (
                      <tr className="" key={searchUser.id}> 
                        <Link to={`/profile/${searchUser}`} className="text-black p-0 mb-1" onClick={onResetState}>
                          {searchUser}
                        </Link>
                      </tr>
                    ))}
                  </tbody>
                </div>
              }
            </table>
          </div>
          {/* <Search>
            <SearchIcon>
              <img src="/images/search-icon.svg" alt="" />
            </SearchIcon>
          </Search> */}

          {user ? (
            <div className="right">
            <NavList>
               <a href='#!'>
                <img src="/images/bell.svg" alt="" />
                <span>알림</span>
              </a>
            </NavList>
            <NavList>
               <Link to='/write'>
                <img src="/images/edit.svg" alt="" />
                <span>새글작성</span>
              </Link>
            </NavList>
              <Link to={`/profile/${newUser}`}>
                <img
                className="profile"
                src='/images/profile.png'
                alt="User-logo"
                onClick={handleShow}
                />
              </Link>
              {/* <Modal show={show} onHide={handleClose}>
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
              </Modal> */}
              <UserInfo>{user} 님</UserInfo>
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

// const Search = styled.div`
//   opacity: 1;
//   flex-grow: 1;
//   position: relative;
//   margin-left: 20px;
//   & > div {
//     max-width: 280px;
//     input {
//       border: none;
//       box-shadow: none;
//       background-color: #FFEFEF;
//       border-radius: 6px;
//       color: rgba(0, 0, 0, 0.9);
//       width: 218px;
//       padding: 0 8px 0 40px;
//       margin-y: auto;
//       line-height: 1.75;
//       font-weight: 400;
//       font-size: 14px;
//       height: 34px;
//       border-color: #ffd2d2;
//       vertical-align: text-top;
//     }
//   }
// `;

// const SearchIcon = styled.div`
//   width: 40px;
//   position: absolute;
//   z-index: 1;
//   top: 10px;
//   left: 2px;
//   border-radius: 0 2px 2px 0;
//   margin: 0;
//   pointer-events: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

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
    min-width: 50px;
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
