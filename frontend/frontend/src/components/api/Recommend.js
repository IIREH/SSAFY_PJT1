import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import XMLParser from 'react-xml-parser';
import "./Row.css";
import Button from '../common/Button';
import { Card, CardGroup } from 'react-bootstrap'

function Recommend({ title }) {
    const [recommend, setRecommend] = useState(null);
    const [recommend2, setRecommend2] = useState(null);
    const [recommend3, setRecommend3] = useState(null);

    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF179943?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setRecommend(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF178981?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setRecommend2(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF183486?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setRecommend3(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="row">
        <h2>{title}</h2>
       
        <CardGroup className="justify-content-center">
        <span className="row__posters">
        <Card>
            <Card.Img variant="top" src={ recommend } alt="Recommend Image"/>
            <Card.Body>
                <Card.Title>프랑켄슈타인</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link to="/info">
                    <Button variant="outline-success" className="button-position">상세보기</Button>
                </Link>
            </Card.Body>
        </Card>
        </span>
        <span className="row__posters">
        <Card>
            <Card.Img variant="top" src={ recommend2 } alt="Recommend Image"/>
            <Card.Body>
                <Card.Title>지킬 앤 하이드</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link to="/info">
                    <Button variant="outline-success" className="button-position">상세보기</Button>
                </Link>
            </Card.Body>
        </Card>
        </span>
        <span className="row__posters">
        <Card>
            <Card.Img variant="top" src={ recommend3 } alt="Recommend Image" />
            <Card.Body>
                <Card.Title>라이온킹</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link to="/info">
                    <Button variant="outline-success" className="button-position">상세보기</Button>
                </Link>
            </Card.Body>
        </Card>
        </span>
        </CardGroup>
        <hr className='hr'></hr>
    </div>
    )
}

export default Recommend;