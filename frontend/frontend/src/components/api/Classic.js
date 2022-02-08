import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import XMLParser from 'react-xml-parser';
import "./Row.css";

import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, CardGroup } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
// xxx6xx
function Classic({ title }) {
    const [classic, setClassic] = useState(null);
    const [classic2, setClassic2] = useState(null);
    const [classic3, setClassic3] = useState(null);

    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF186242?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setClassic(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF132641?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setClassic2(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF132640?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setClassic3(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
  

    return (
        <div className="row">
        <h2>{title}</h2>
       
        <CardGroup className="justify-content-center">
        <span className="row__posters">
        <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={ classic } alt="Recommend Image"/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="outline-success">상세보기</Button>
            </Card.Body>
        </Card>
        </span>
        <span className="row__posters">
        <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" className="row_poster" src={ classic2 } alt="Recommend Image"/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="outline-success">상세보기</Button>
            </Card.Body>
        </Card>
        </span>
        <span className="row__posters">
        <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={ classic3 } alt="Recommend Image" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="outline-success">상세보기</Button>
            </Card.Body>
        </Card>
        </span>
        </CardGroup>
        <hr className='hr'></hr>
    </div>
    )
}

export default Classic;