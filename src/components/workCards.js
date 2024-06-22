import React from "react";
import minesweeper from '../img/online-minesweeper.jpeg';
import myHome from '../img/myHome.png';
import figma from '../img//figma.png';
import worldCorruption from '../img/worldCorruption.avif';
import website from '../img/webDesign.jpeg';
import gitHub from '../img/whiteGithub.png';
import personaPlayground from '../img//personaPlayground.jpeg';
import './workCards.css';
import WorkCard from "./workCard";

export default function WorkCards() {
    return (
        <div className="d-flex justify-content-center flex-wrap cardBox">
            <WorkCard 
                title="Personal Website" 
                subtitle="React" 
                background={website} 
                gitHubLink="https://github.com/ryancho7/portfolio" 
                websiteLink="https://github.com/ryancho7/portfolio" 
                gitHubImage={gitHub}
            />
            <WorkCard 
                title="Mine Sweeper" 
                subtitle="Java" 
                background={minesweeper} 
                gitHubLink="https://github.com/ryancho7/MineSweeper" 
                websiteLink="https://github.com/ryancho7/MineSweeper" 
                gitHubImage={gitHub}
            />
            <WorkCard 
                title="Persona Playground" 
                subtitle="React/Firebase" 
                background={personaPlayground} 
                gitHubLink="https://github.com/info340-sp24a/project-erihuynh/tree/main" 
                websiteLink="https://sp24-persona-playground.web.app/" 
                gitHubImage={gitHub}
            />
            <WorkCard 
                title="World Corruption" 
                subtitle="R/Shiny" 
                background={worldCorruption} 
                gitHubLink="https://github.com/ryancho7/Global-Government-Transparency" 
                websiteLink="https://ryancho7.shinyapps.io/gov_transparency/" 
                gitHubImage={gitHub}
            />
            <WorkCard 
                title="MyHome" 
                subtitle="Figma" 
                background={myHome} 
                gitHubLink="https://www.figma.com/design/RGBHkZ9q3nOn6qJXcHYGB8/INFO-360-Prototype?node-id=133-183&t=FHSGCLnn89iuhSBe-0" 
                websiteLink="https://www.figma.com/proto/RGBHkZ9q3nOn6qJXcHYGB8/INFO-360-Prototype?type=design&node-id=351-654&t=gZ94hNLJF3Dpv44f-1&scaling=scale-down&page-id=133%3A183&starting-point-node-id=351%3A654" 
                gitHubImage={figma}
            />
        </div>
    )
}