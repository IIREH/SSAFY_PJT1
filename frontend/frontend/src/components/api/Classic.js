import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import XMLParser from 'react-xml-parser';
import "./Row.css";

// xxx6xx
function Classic({ title }) {
    const [classic, setClassic] = useState(null);
    const [classic2, setClassic2] = useState(null);
    const [classic3, setClassic3] = useState(null);
    const [classic4, setClassic4] = useState(null);
    const [classic5, setClassic5] = useState(null);

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

    return (
        <div className="row">
            <h2>{title}</h2>
            <Link to="/info">
            <div className="row__posters">
                <img className='row__poster' src={classic} alt="Classic Image"></img>
                <img className='row__poster' src={classic2} alt="Classic Image2"></img>
                <img className='row__poster' src={classic3} alt="Classic Image3"></img>
                <img className='row__poster' src={classic4} alt="Classic Image4"></img>
                <img className='row__poster' src={classic5} alt="Classic Image5"></img>
            </div>
            </Link>
            <hr className='hr'></hr>
        </div>
    )
}

export default Classic;