import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import XMLParser from 'react-xml-parser';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardGroup, Carousel } from 'react-bootstrap'
import "./Row.css";
import Button from '../common/Button';
// xxx6xx
function Classic({ title }) {
    const [classic, setClassic] = useState(null);
    const [classic2, setClassic2] = useState(null);
    const [classic3, setClassic3] = useState(null);
    const [classic4, setClassic4] = useState(null);
    const [classic5, setClassic5] = useState(null);
    const [classic6, setClassic6] = useState(null);

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
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF186427?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setClassic2(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF185536?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setClassic3(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF186277?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setClassic4(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF186551?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setClassic5(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF186616?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setClassic6(xml.getElementsByTagName('poster')[0].value);
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
            <Card.Img variant="top" src={ classic } alt="Recommend Image"/>
            <Card.Body>
            <Card.Title>??????????????? ?????????</Card.Title>
                <hr></hr>
                <Card.Text>
                ?????? : 45???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/classic">
                    <Button  style={{ marginLeft: 20}}>????????????</Button>
                </Link>
                </Card.Text>
            </Card.Body>
        </Card>
        </span>
        <span className="row__posters">
        <Card>
            <Card.Img variant="top" src={ classic2 } alt="Recommend"/>
            <Card.Body>
                <Card.Title>????????????</Card.Title>
                <hr></hr>
                <Card.Text>
                ?????? : 23???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/classic2">
                    <Button  style={{ marginLeft: 10}}>????????????</Button>
                </Link>
                </Card.Text>
            </Card.Body>
        </Card>
        </span>
        <span className="row__posters">
        <Card>
            <Card.Img variant="top" src={ classic3 } alt="Recommend" />
            <Card.Body>
                <Card.Title>?????? ????????? ????????????</Card.Title>
                <hr></hr>
                <Card.Text>
                ?????? : 19???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/classic3">
                    <Button style={{ marginLeft: 30}}>????????????</Button>
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
            <Card.Img variant="top" src={ classic4 } alt="Recommend"/>
            <Card.Body>
                <Card.Title>??????????????? ???????????? ?????????</Card.Title>
                <hr></hr>
                <Card.Text>
                ?????? : 15???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/classic4">
                    <Button style={{ marginLeft: 50}}>????????????</Button>
                </Link>
                </Card.Text>
            </Card.Body>
        </Card>
        </span>
        <span className="row__posters">
        <Card>
            <Card.Img variant="top" src={ classic5 } alt="Recommend"/>
            <Card.Body>
                <Card.Title>??????????????? ????????? ?????????</Card.Title>
                <hr></hr>
                <Card.Text>
                ?????? : 31???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/classic5">
                    <Button style={{ marginLeft: 50}}>????????????</Button>
                </Link>
                </Card.Text>
            </Card.Body>
        </Card>
        </span>
        <span className="row__posters">
        <Card>
            <Card.Img variant="top" src={ classic6 } alt="Recommend" />
            <Card.Body>
                <Card.Title>2022 ??????????????? ?????????</Card.Title>
                <hr></hr>
                <Card.Text>
                ?????? : 31???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/classic6">
                    <Button style={{ marginLeft: 50}}>????????????</Button>
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

export default Classic;