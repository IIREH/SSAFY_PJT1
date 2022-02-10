import React, { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';
import styled from "styled-components";

const PaneBox = styled.div`
  text-align: center;
  padding: 14px 16px 22px;

  .WidthGrid {
    max-width: 960px;
    margin: 0 auto;

    @media ${(props) => props.theme.tablet} {
      max-width: 640px;
    }

    @media ${(props) => props.theme.mobile} {
      max-width: auto;
    }
  }

  .WidthRow {
    margin: 0 -8px;

    @media ${(props) => props.theme.tablet} {
      margin: 0;
    }
  }

  .WidthCol {
    padding: 0 8px;

    @media ${(props) => props.theme.tablet} {
      padding: 0;
    }
  }

  .PaneInner {
    text-align: left;
    margin: 0px 0px 0px 191px;
    &:after {
      display: block;
      content: "";
      clear: both;
    }

    @media ${(props) => props.theme.tablet} {
      margin: 0px 0px 0px 173px;
    }

    @media ${(props) => props.theme.mobile} {
      text-align: center;
      margin: 0;
    }
  }

  .Title {
    width: 520px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 33px;
    font-weight: 700;
    letter-spacing: -1.2px;
    line-height: 40px;

    @media ${(props) => props.theme.tablet} {
      font-size: 25px;
      letter-spacing: -0.9px;
      line-height: 30px;
    }

    @media ${(props) => props.theme.mobile} {
      width: auto;
    }
  }

  .Detail {
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    margin-top: 4px;
    color: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;

    @media ${(props) => props.theme.tablet} {
      font-size: 15px;
      letter-spacing: -0.5px;
      line-height: 20px;
      margin-top: 3px;
    }
  }

  .ContentRatings {
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    padding: 8px 0px;
    border-top: 1px solid rgb(237, 237, 237);
    border-bottom: 1px solid rgb(237, 237, 237);
    box-sizing: border-box;
    margin-top: 14px;
  }

  .ButtonBlock {
    float: left;
    margin: 39px 30px 0px 0px;

    @media ${(props) => props.theme.tablet} {
      margin: 39px 21px 0px 0px;
    }

    @media ${(props) => props.theme.mobile} {
      float: none;
      margin: 19px 0px 14px;
    }
  }

  .Self {
    width: 254px;
    display: flex;
    background-color: rgb(255, 47, 110);
    vertical-align: top;
    box-sizing: border-box;
    height: 40px;
    border-radius: 6px;
    margin: 0px auto;
    overflow: hidden;

    @media ${(props) => props.theme.tablet} {
      width: 213px;
    }

    @media ${(props) => props.theme.mobile} {
      width: 254px;
    }
  }

  .StylelessButton-ActionButton {
    background: none;
    padding: 0px;
    border: none;
    margin: 0px;
    cursor: pointer;
    flex: 1 1 0%;
    color: rgb(246, 246, 246);
    text-align: center;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: -0.7px;
    line-height: 22px;
    height: 100%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .contentActionStatusImage {
    display: flex;
    position: relative;
    left: -8px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
  }

  .StatusImage {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-size: contain;
    margin: 0px 6px 0px 0px;
    transition: all 300ms ease 0s;
  }

  .ActionStatus {
    display: inline-flex;
    justify-content: center;
    cursor: pointer;
    color: rgb(246, 246, 246);
    text-align: center;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: -0.7px;
    line-height: 22px;
  }

  .StylelessButton-ActionDropDownButton {
    background: none;
    border: none;
    margin: 0;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    box-sizing: border-box;
    width: 51px;
    height: 100%;
    padding: 8px 0;
    border-left: 1px solid #e71252;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

function PaneContainer() {
  const [pfrnm, setPfrnm] = useState(null);
  const [prfpdfrom, setPrfpdfrom] = useState(null);
  const [genrenm, setGenrenm] = useState(null);
  const [fcltynm, setFcltynm] = useState(null);

  useEffect(() => {
    fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF186508?service=4e391a1107334d7aaf6034069bbcbc5a")
        .then(res => res.text())
        .then(data => {
            var xml = new XMLParser().parseFromString(data); 
            setPfrnm(xml.getElementsByTagName('prfnm')[0].value);
            setPrfpdfrom(xml.getElementsByTagName('prfpdfrom')[0].value);
            setGenrenm(xml.getElementsByTagName('genrenm')[0].value);
            setFcltynm(xml.getElementsByTagName('fcltynm')[0].value);
        })
        .catch(err => console.log(err));
}, [])

  return (
    <PaneBox>
      <div className="WidthGrid">
        <div className="WidthRow">
          <div className="WidthCol">
            <div className="PaneInner">
              <h1 className="Title">{pfrnm}</h1>
              <div className="Detail">
                      {prfpdfrom}   |    # {genrenm}   |    {fcltynm}
              </div>
              <div className="ContentRatings">
                평균 ★★★★★ (59 명)
              </div>
              <div className="ButtonBlock">
                <div className="Self">
                  <button className="StylelessButton-ActionButton">
                    <div className="contentActionStatusImage">
                      <div>
                        보고싶어요
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PaneBox>
  );
}

export default PaneContainer;
