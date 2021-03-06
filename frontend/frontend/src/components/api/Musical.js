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
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF186645?service=4e391a1107334d7aaf6034069bbcbc5a")
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
                <Card.Img variant="top" src={ musical } alt="Recommend Image"/>
                <Card.Body>
                    <Card.Title>???????????? ?????????</Card.Title>
                     <hr></hr>
                <Card.Text>
                ?????? : 42???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/musical">
                    <Button style={{ marginLeft: 10}}>????????????</Button>
                </Link>
                </Card.Text>
            </Card.Body>
            </Card>
            </span>
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ musical2 } alt="Recommend Image"/>
                <Card.Body>
                    <Card.Title>????????????</Card.Title>
                     <hr></hr>
                <Card.Text>
                ?????? : 39???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/musical2">
                    <Button style={{ marginLeft: 10}}>????????????</Button>
                </Link>
                </Card.Text>
            </Card.Body>
            </Card>
            </span>
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ musical3 } alt="Recommend Image" />
                <Card.Body>
                    <Card.Title>????????? ????????? ?????????</Card.Title>
                     <hr></hr>
                <Card.Text>
                ?????? : 15???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/musical3">
                    <Button style={{ marginLeft: 25}} >????????????</Button>
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
                <Card.Img variant="top" src={ musical4 } alt="Recommend Image"/>
                <Card.Body>
                    <Card.Title>?????????????????????</Card.Title>
                     <hr></hr>
                <Card.Text>
                ?????? : 23???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/musical4">
                    <Button style={{ marginLeft: 10}}>????????????</Button>
                </Link>
                </Card.Text>
            </Card.Body>
            </Card>
            </span>
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ musical5 } alt="Recommend Image"/>
                <Card.Body>
                    <Card.Title>EQUAL</Card.Title>
                     <hr></hr>
                <Card.Text>
                ?????? : 33???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/musical5">
                    <Button style={{ marginLeft: 10}}>????????????</Button>
                </Link>
                </Card.Text>
            </Card.Body>
            </Card>
            </span>
            <span className="row__posters">
            <Card>
                <Card.Img variant="top" src={ musical6 } alt="Recommend Image" />
                <Card.Body>
                    <Card.Title>?????? ????????????</Card.Title>
                     <hr></hr>
                <Card.Text>
                ?????? : 33???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/musical6">
                    <Button style={{ marginLeft: 10}}>????????????</Button>
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

export default Musical;