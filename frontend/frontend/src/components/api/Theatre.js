import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import XMLParser from 'react-xml-parser';
import "./Row.css";

function Theatre({ title }) {
    const [theatre, setTheatre] = useState(null);
    const [theatre2, setTheatre2] = useState(null);
    const [theatre3, setTheatre3] = useState(null);
    const [theatre4, setTheatre4] = useState(null);
    const [theatre5, setTheatre5] = useState(null);

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

    return (
        <div className="row">
            <h2>{title}</h2>
            <Link to="/info">
            <div className="row__posters">
                <img className='row__poster' src={theatre} alt="Classic Image"></img>
                <img className='row__poster' src={theatre2} alt="Classic Image2"></img>
                <img className='row__poster' src={theatre3} alt="Classic Image3"></img>
                <img className='row__poster' src={theatre4} alt="Classic Image4"></img>
                <img className='row__poster' src={theatre5} alt="Classic Image5"></img>
            </div>
            </Link>
            <hr className='hr'></hr>
        </div>
    )
}

export default Theatre;