import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import XMLParser from 'react-xml-parser';
import "./Row.css";

function Musical({ title }) {
    const [musical, setMusical] = useState(null);
    const [musical2, setMusical2] = useState(null);
    const [musical3, setMusical3] = useState(null);
    const [musical4, setMusical4] = useState(null);
    const [musical5, setMusical5] = useState(null);

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

    return (
        <div className="row">
            <h2>{title}</h2>
            <Link to="/info">
            <div className="row__posters">
                <img className='row__poster' src={musical} alt="Musical photo"></img>
                <img className='row__poster' src={musical2} alt="Musical photo2"></img>
                <img className='row__poster' src={musical3} alt="Musical photo3"></img>
                <img className='row__poster' src={musical4} alt="Musical photo4"></img>
                <img className='row__poster' src={musical5} alt="Musical photo5"></img>
            </div>
            </Link>
            <hr className='hr'></hr>
        </div>
    )
}

export default Musical;