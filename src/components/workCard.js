import React from "react";
import './workCard.css';
import link from '../img/link.png';

export default function WorkCard({ title, subtitle, background, gitHubLink, websiteLink, gitHubImage}) {
    return (
        <div className="col-12 col-md-6 col-lg-3 p-2">
            <div className="card" style={{ backgroundImage: `url(${background})` }}>
                <div className="cardBody">
                    <div className="cardText">
                        <h4 className="cardTitle">{title}</h4>
                        <p className="cardSubtitle">{subtitle}</p>
                    </div>
                    <div className="links">
                        <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                            <img src={gitHubImage} alt="Link to Github Page" className="gitHub"/>
                        </a>
                        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                            <img src={link} alt="Link to Website" className="website"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
