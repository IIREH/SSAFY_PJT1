import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import XMLParser from 'react-xml-parser';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardGroup, Carousel } from 'react-bootstrap'
import "./Row.css";
import Button from '../common/Button';

function Recommend({ title }) {
    const [recommend, setRecommend] = useState(null);
    const [recommend2, setRecommend2] = useState(null);
    const [recommend3, setRecommend3] = useState(null);
    const [recommend4, setRecommend4] = useState(null);
    const [recommend5, setRecommend5] = useState(null);
    const [recommend6, setRecommend6] = useState(null);

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

    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF182052?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setRecommend4(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF186601?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setRecommend5(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF181077?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setRecommend6(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])



    return (
        <div className="row">
        <h2><img src="/images/award.jpg" alt="" /> {title} <img src="/images/award.jpg" alt="" /></h2>
        <Carousel>
        <Carousel.Item>
        <CardGroup className="justify-content-center">
        <span className="row__posters">
        <Card>
            <Card.Img variant="top" src={ recommend } alt="Recommend Image"/>
            <Card.Body>
                <Card.Title>??????????????????</Card.Title>
                 <hr></hr>
                <Card.Text>
                ?????? : 629???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/recommend">
                    <Button style= {{ marginLeft: 5}}>????????????</Button>
                </Link>
                </Card.Text>
            </Card.Body>
        </Card>
        </span>
        <span className="row__posters">
        <Card>
            <Card.Img variant="top" src={ recommend2 } alt="Recommend Image"/>
            <Card.Body>
                <Card.Title>?????? ??? ?????????</Card.Title>
                 <hr></hr>
                <Card.Text>
                ?????? : 549???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/recommend2">
                    <Button style= {{ marginLeft: 5}}>????????????</Button>
                </Link>
                </Card.Text>
            </Card.Body>
        </Card>
        </span>
        <span className="row__posters">
        <Card>
            <Card.Img variant="top" src={ recommend3 } alt="Recommend Image" />
            <Card.Body>
                <Card.Title>????????????</Card.Title>
                 <hr></hr>
                <Card.Text>
                ?????? : 423???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/recommend3">
                    <Button style= {{ marginLeft: 5}} >????????????</Button>
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
            <Card.Img variant="top" src={ recommend4 } alt="Recommend Image"/>
            <Card.Body>
                <Card.Title>?????????</Card.Title>
                 <hr></hr>
                <Card.Text>
                ?????? : 433???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/recommend4">
                    <Button style= {{ marginLeft: 10}} >????????????</Button>
                </Link>
                </Card.Text>
            </Card.Body>
        </Card>
        </span>
        <span className="row__posters">
        <Card>
            <Card.Img variant="top" src={ recommend5 } alt="Recommend Image"/>
            <Card.Body>
                <Card.Title>???! ?????????</Card.Title>
                 <hr></hr>
                <Card.Text>
                ?????? : 399???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/recommend5">
                    <Button style= {{ marginLeft: 5}} >????????????</Button>
                </Link>
                </Card.Text>
            </Card.Body>
        </Card>
        </span>
        <span className="row__posters">
        <Card>
            <Card.Img variant="top" src={ recommend6 } alt="Recommend Image" />
            <Card.Body>
                <Card.Title>?????????</Card.Title>
                 <hr></hr>
                <Card.Text>
                ?????? : 320???
                <br></br>
                ?????? : ???????????????
                <br></br>
                <br></br>
                <Link to="/recommend6">
                    <Button style= {{ marginLeft: 10}} >????????????</Button>
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

export default Recommend;