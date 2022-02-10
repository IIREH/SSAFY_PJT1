import React, { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
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
  const [prfruntime, setPrfruntime] = useState(null);
  const [pcseguidance	, setPcseguidance	] = useState(null);
  const [dtguidance	, setdtGuidance	] = useState(null);
  const [prfcast , setPrfcast	] = useState(null);
  const [prfcrew , setdtPrfcrew	] = useState(null);

  useEffect(() => {
    fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF183630?service=4e391a1107334d7aaf6034069bbcbc5a")
        .then(res => res.text())
        .then(data => {
            var xml = new XMLParser().parseFromString(data); 
            setPrfruntime(xml.getElementsByTagName('prfruntime')[0].value);
            setPcseguidance(xml.getElementsByTagName('pcseguidance')[0].value);
            setdtGuidance(xml.getElementsByTagName('dtguidance')[0].value);
            setPrfcast(xml.getElementsByTagName('prfcast')[0].value);
            setdtPrfcrew(xml.getElementsByTagName('prfcrew')[0].value);
        })
        .catch(err => console.log(err));
}, [])

  return (
    <MainInfoBackground>
      <MainInfoContainer>
        <div className="content-box">
          <div className="basic-information">
            <h3>기본정보</h3>
          </div>
          <div className="basic-infomation__detail">
            <p>{prfruntime}</p>
            <p>{pcseguidance}</p>
            <p>{dtguidance}</p>
          </div>
        </div>
        <div className="content-box">
          <div className="basic-infomation__detail">
            <h3> 예매 링크 </h3>
            <a href="https://tickets.interpark.com/goods/21011876"> 여기를 눌러 예매하기 </a>
          </div>
        </div>
        <div className="content-box">
          <div className="basic-infomation__detail">
            <h3>출연/제작</h3>
            <p>{prfcast} / {prfcrew}</p>
          </div>
        </div>
        <div className="content-box">
        </div>
      </MainInfoContainer>
    </MainInfoBackground>
  );
}

export default MainInfo;
