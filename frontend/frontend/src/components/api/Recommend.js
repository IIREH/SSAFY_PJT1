import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import XMLParser from 'react-xml-parser';
import "./Row.css";

function Recommend({ title }) {
    const [recommend, setRecommend] = useState(null);
    const [recommend2, setRecommend2] = useState(null);
    const [recommend3, setRecommend3] = useState(null);
    const [recommend4, setRecommend4] = useState(null);
    const [recommend5, setRecommend5] = useState(null);

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
        fetch("http://www.kopis.or.kr/openApi/restful/pblprfr/PF186424?service=4e391a1107334d7aaf6034069bbcbc5a")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                setRecommend5(xml.getElementsByTagName('poster')[0].value);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="row">
            <Link to="/info">
            <h2>{title}</h2>
            <div className="row__posters">
                <img className='row__poster' src={recommend} alt="Recommend Image"></img>
                <img className='row__poster' src={recommend2} alt="Recommend Image2"></img>
                <img className='row__poster' src={recommend3} alt="Recommend Image3"></img>
                <img className='row__poster' src={recommend4} alt="Recommend Image4"></img>
                <img className='row__poster' src={recommend5} alt="Recommend Image5"></img>
            </div>
            </Link>
            <hr className='hr'></hr>
        </div>
    )
}

export default Recommend;