import React from "react";
import styled from "styled-components";

const MainInfoBackground = styled.div`
  width: 50%;
  margin-left: 31rem;
  padding: 3rem 3rem 1rem 3rem;
  background-color: #f8f0fc;
`;

const MainInfoContainer = styled.div`
  width: 976px;
  margin: 0 auto;
  margin-bottom : 30px;
  padding-top: 10px;
  padding-bottom: 30px;
  background-color: white;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 15px;

  @media ${(props) => props.theme.tablet} {
    width: 640px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  p {
    margin: 10px 0px;
  }

  .content-box {
    width: 95%;
    padding-bottom: 15px;
    margin: 0 auto;
    border-bottom: 1px solid rgb(227, 227, 227);

    &:last-child {
      border-bottom: none;
    }
  }

  .content-box .basic-information {
    position: relative;
    display: flex;
    align-items: center;
  }

  .content-box .basic-information a {
    position: absolute;
    right: 0;
  }

`;

function MainInfo() {

  return (
    <MainInfoBackground>
      <MainInfoContainer>
        <div className="content-box">
          <div className="basic-information">
            <h3>기본정보</h3>
          </div>
          <div className="basic-infomation__detail">
            <p>ㅓㅓ</p>
            <p>ㅓㅓㅓㅕ</p>
            <p>ㄷㄷㄷㄷ</p>
          </div>
        </div>
        <div className="content-box">
          <div className="basic-infomation__detail">
            <h3>내용 </h3>
            <p>ㅜㅛㅓ</p>
          </div>
        </div>
        <div className="content-box">
          <div className="basic-infomation__detail">
            <h3>출연/제작</h3>
            <p>ㅇㅈㅇ</p>
          </div>
        </div>
        <div className="content-box">
        </div>
      </MainInfoContainer>
    </MainInfoBackground>
  );
}

export default MainInfo;
