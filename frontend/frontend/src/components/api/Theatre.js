import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import XMLParser from 'react-xml-parser';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardGroup, Carousel } from 'react-bootstrap'
import "./Row.css";
import Button from '../common/Button';

function Theatre({ title }) {
    const [theatre, setTheatre] = useState(null);
    const [theatre2, setTheatre2] = useState(null);
    const [theatre3, setTheatre3] = useState(null);
    const [theatre4, setTheatre4] = useState(null);
    const [theatre5, setTheatre5] = useState(null);
    const [theatre6, setTheatre6] = useState(null);

    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF185242?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setTheatre(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF183804?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setTheatre2(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF185333?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setTheatre3(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF172538?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setTheatre4(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF183630?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setTheatre5(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF186548?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setTheatre6(xml.getElementsByTagName('poster')[0].value);
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
                <Card.Img variant="top" src={ theatre } alt="Recommend Image"/>
                <Card.Body>
                    <Card.Title>가족이란 이름의 부족</Card.Title>
                    <hr></hr>
                <Card.Text>
                후기 : 59건
                <br></br>
                평점 : ★★★★★
                <br></br>
                <br></br>
                <Link to="/theatre">
                    <Button style= {{ marginLeft: 20}} >상세보기</Button>
                </Link>
                </Card.Text>
            </Card.Body>
            </Card>
            </span>
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ theatre2 } alt="Recommend Image"/>
                <Card.Body>
                    <Card.Title>리자드 3세</Card.Title>
                    <hr></hr>
                <Card.Text>
                후기 : 43건
                <br></br>
                평점 : ★★★★★
                <br></br>
                <br></br>
                <Link to="/theatre2">
                    <Button style= {{ marginLeft: 8}} >상세보기</Button>
                </Link>
                </Card.Text>
            </Card.Body>
            </Card>
            </span>
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ theatre3 } alt="Recommend Image" />
                <Card.Body>
                    <Card.Title>플레이백</Card.Title>
                    <hr></hr>
                <Card.Text>
                후기 : 34건
                <br></br>
                평점 : ★★★★☆
                <br></br>
                <br></br>
                <Link to="/theatre3">
                    <Button style= {{ marginLeft: 8}} >상세보기</Button>
                </Link>
                </Card.Text>
            </Card.Body>
            </Card>
            </span>
            </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
            <CardGroup className="justify-content-center">
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ theatre4 } alt="Recommend Image"/>
                <Card.Body>
                    <Card.Title>한뼘사이</Card.Title>
                    <hr></hr>
                <Card.Text>
                후기 : 29건
                <br></br>
                평점 : ★★★★☆
                <br></br>
                <br></br>
                <Link to="/theatre4">
                    <Button style= {{ marginLeft: 10}} >상세보기</Button>
                </Link>
                </Card.Text>
            </Card.Body>
            </Card>
            </span>
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ theatre5 } alt="Recommend Image"/>
                <Card.Body>
                    <Card.Title>라스트 세션</Card.Title>
                    <hr></hr>
                <Card.Text>
                후기 : 21건
                <br></br>
                평점 : ★★★★☆
                <br></br>
                <br></br>
                <Link to="/theatre5">
                    <Button style= {{ marginLeft: 10}} >상세보기</Button>
                </Link>
                </Card.Text>
            </Card.Body>
            </Card>
            </span>
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ theatre6 } alt="Recommend Image" />
                <Card.Body>
                    <Card.Title>회란기</Card.Title>
                    <hr></hr>
                <Card.Text>
                후기 : 21건
                <br></br>
                평점 : ★★★★☆
                <br></br>
                <br></br>
                <Link to="/theatre6">
                    <Button style= {{ marginLeft: 15}} >상세보기</Button>
                </Link>
                </Card.Text>
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

export default Theatre;