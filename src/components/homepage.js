import React, { useEffect, useState } from "react";
import './homepage.css';
import resume from '../img/resume.png';
import profileImage from '../img/profileImg.png';
import { Link } from "react-scroll";

export default function Homepage() {
    const [helloLoaded, setHelloLoaded] = useState(false);
    const [introTextLoaded, setIntroTextLoaded] = useState(false);
    const [introPLoaded, setIntroPLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHelloLoaded(true);
        }, 500);

        setTimeout(() => {
            setIntroTextLoaded(true);
        }, 2000);

        setTimeout(() => {
            setIntroPLoaded(true);
        }, 3000);

        setTimeout(() => {
            setIsLoaded(true);
        }, 3000);
    }, []);

    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <section id="homepage">
            <div className="homepageContent">
                <span className={`hello ${helloLoaded ? 'loaded' : ''}`}>Hello,</span>
                <span className={`introText ${introTextLoaded ? 'loaded' : ''}`}>I'm <span className="introName">Ryan,</span> <br />A Software Engineer</span>
                <p className={`introP ${introPLoaded ? 'loaded' : ''}`}>I am a SWE with experience in developing, testing, and maintaining <br />software applications along with creating modern reactive websites</p>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button className={`btn ${isLoaded ? 'loaded' : ''} btn-secondary`}>
                        <img src={resume} alt="My Resume" className="btnImg"/> My Resume
                    </button>
                </a>
                {/* <Link><button className={`btn ${isLoaded ? 'loaded' : ''} btn-secondary`}><img src={resume} alt="My Resume" className="btnImg"/> My Resume</button></Link> */}
            </div>
            <img src={profileImage} alt="Profile" className={`bg ${isLoaded ? 'loaded' : ''}`}/>
        </section>
    )
}