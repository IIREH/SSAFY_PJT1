import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import XMLParser from 'react-xml-parser';
import "./Row.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '../common/Button';
import { CardGroup, Card } from 'react-bootstrap'

function Musical({ title }) {
    const [musical, setMusical] = useState(null);
    const [musical2, setMusical2] = useState(null);
    const [musical3, setMusical3] = useState(null);

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
    return (
        <div className="row">
            <h2>{title}</h2>  
            <CardGroup className="justify-content-center">
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ musical } alt="Recommend Image"/>
                <Card.Body>
                    <Card.Title>젠틀맨스 가이드</Card.Title>
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
                <Card.Img variant="top" src={ musical2 } alt="Recommend Image"/>
                <Card.Body>
                    <Card.Title>데스노트</Card.Title>
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
                <Card.Img variant="top" src={ musical3 } alt="Recommend Image" />
                <Card.Body>
                    <Card.Title>극장형 보이는 라디오</Card.Title>
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

export default Musical;