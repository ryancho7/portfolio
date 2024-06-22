import React from "react";
import './skills.css';
import UXUI from '../img/ui-ux.png';
import dataScience from '../img/dataScience.png';
import webDevelopment from '../img/webDevelopment.png';
import unitTest from '../img/unitTest.png';

export default function Skills() {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I'm currently a student at the University of Washington majoring in Informatics. I enjoy exploring creative methods of using information technologies and software development as a practical medium for growth. In creating user-friendly websites and working on script-writing and unit testing, I have gained experience in Java, JavaScript, React/Next.JS, HTML/CSS, SQL, R, MarkLogic, Figma, and XQuery. </span>
            <div className="skillBody">
                <div className="skillSection">
                    <img src={unitTest} alt="Script Writing/Unit Testing" className="skillImg"/>
                    <div className="skillText">
                        <h2>Script Writing/Unit Testing</h2>
                        <p>Java</p>
                    </div>
                </div>
                <div className="skillSection">
                    <img src={dataScience} alt="Data Science" className="skillImg"/>
                    <div className="skillText">
                        <h2>Data Science</h2>
                        <p>SQL, R, MarkLogic, XQuery</p>
                    </div>
                </div>
                <div className="skillSection">
                    <img src={webDevelopment} alt="Client-Side Development" className="skillImg"/>
                    <div className="skillText">
                        <h2>Client-Side Development</h2>
                        <p>JavaScript, React/Next.js, Firebase, HTML/CSS</p>
                    </div>
                </div>
                <div className="skillSection">
                    <img src={UXUI} alt="UX/UI Design" className="skillImg"/>
                    <div className="skillText">
                        <h2>UX/UI Design</h2>
                        <p>Figma</p>
                    </div>
                </div>
            </div>
        </section>
    )
}