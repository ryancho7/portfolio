import React from "react";
import './portfolio.css';
// import Works from "./works";
import WorkCards from "./workCards";

export default function Portfolio() {
    return (
        <section id='portfolio'>
            <h2 className="portfolioHeader">My Portfolio</h2>
            <span className="portfolioDesc">A curated collection showcasing my recent works. Each project featured here offers an in-depth overview, including links to the project repository and, where applicable, the live application. Click on the respective images to explore further and gain insights into the creative process and technical implementation behind each project.</span>
            <div className="portfolioSection">
                <WorkCards />
            </div>
        </section>
    )
}