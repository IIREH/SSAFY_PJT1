import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import XMLParser from 'react-xml-parser';
import "./Row.css";

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '../common/Button';
import { CardGroup, Card } from 'react-bootstrap'

function Theatre({ title }) {
    const [theatre, setTheatre] = useState(null);
    const [theatre2, setTheatre2] = useState(null);
    const [theatre3, setTheatre3] = useState(null);

    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF186508?service=4e391a1107334d7aaf6034069bbcbc5a")
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

    return (
        <div className="row">
            <h2>{title}</h2>  
            <CardGroup className="justify-content-center">
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ theatre } alt="Recommend Image"/>
                <Card.Body>
                    <Card.Title>앤젤스 인 아메리카</Card.Title>
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
                <Card.Img variant="top" src={ theatre2 } alt="Recommend Image"/>
                <Card.Body>
                    <Card.Title>리자드 3세</Card.Title>
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
                <Card.Img variant="top" src={ theatre3 } alt="Recommend Image" />
                <Card.Body>
                    <Card.Title>플레이백</Card.Title>
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

export default Theatre;