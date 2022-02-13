import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import XMLParser from 'react-xml-parser';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardGroup, Carousel } from 'react-bootstrap'
import "./Row.css";
import Button from '../common/Button';

function Musical({ title }) {
    const [musical, setMusical] = useState(null);
    const [musical2, setMusical2] = useState(null);
    const [musical3, setMusical3] = useState(null);
    const [musical4, setMusical4] = useState(null);
    const [musical5, setMusical5] = useState(null);
    const [musical6, setMusical6] = useState(null);

    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF180838?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setMusical(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF186531?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setMusical2(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF183854?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setMusical3(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF185604?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setMusical4(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF185279?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setMusical5(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF185112?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setMusical6(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <div className="row">
            <h2>{title}</h2>
            <Carousel interval={null}>
            <Carousel.Item>
            <CardGroup className="justify-content-center">
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ musical } alt="Recommend"/>
                <Card.Body>
                    <Card.Title>젠틀맨스 가이드</Card.Title>
                    <hr></hr>
                <Card.Text>
                후기 : 15건
                <br></br>
                평점 : ★★★★☆
                    </Card.Text>
                    <Link to="/info">
                        <Button className="button-position-totheleft">상세보기</Button>
                    </Link>
                </Card.Body>
            </Card>
            </span>
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ musical2 } alt="Recommend"/>
                <Card.Body>
                    <Card.Title>데스노트</Card.Title>
                    <hr></hr>
                <Card.Text>
                후기 : 10건
                <br></br>
                평점 : ★★★★☆
                    </Card.Text>
                    <Link to="/info">
                        <Button className="button-position-totheleft">상세보기</Button>
                    </Link>
                </Card.Body>
            </Card>
            </span>
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ musical3 } alt="Recommend" />
                <Card.Body>
                    <Card.Title>극장형 보이는 라디오</Card.Title>
                    <hr></hr>
                <Card.Text>
                후기 : 10건
                <br></br>
                평점 : ★★★★☆
                    </Card.Text>
                    <Link to="/info">
                        <Button className="button-position-totheleft">상세보기</Button>
                    </Link>
                </Card.Body>
            </Card>
            </span>
            </CardGroup>
            </Carousel.Item>
            <Carousel.Item>  
            <CardGroup className="justify-content-center">
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ musical4 } alt="Recommend"/>
                <Card.Body>
                    <Card.Title>노트르담드파리</Card.Title>
                    <hr></hr>
                <Card.Text>
                후기 : 10건
                <br></br>
                평점 : ★★★★☆
                    </Card.Text>
                    <Link to="/info">
                        <Button className="button-position-totheleft">상세보기</Button>
                    </Link>
                </Card.Body>
            </Card>
            </span>
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ musical5 } alt="Recommend"/>
                <Card.Body>
                    <Card.Title>EQUAL</Card.Title>
                    <hr></hr>
                <Card.Text>
                후기 : 9건
                <br></br>
                평점 : ★★★★☆
                    </Card.Text>
                    <Link to="/info">
                        <Button className="button-position-totheleft">상세보기</Button>
                    </Link>
                </Card.Body>
            </Card>
            </span>
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ musical6 } alt="Recommend" />
                <Card.Body>
                    <Card.Title>구름빵2</Card.Title>
                    <hr></hr>
                <Card.Text>
                후기 : 8건
                <br></br>
                평점 : ★★★★☆
                    </Card.Text>
                    <Link to="/info">
                        <Button className="button-position-totheleft">상세보기</Button>
                    </Link>
                </Card.Body>
            </Card>
            </span>
            </CardGroup>
            </Carousel.Item>  
            </Carousel>  
            <hr className='hr'></hr>
        </div>
    )
}

export default Musical;