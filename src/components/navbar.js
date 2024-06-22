import React from "react";
import './navbar.css';
import contact from '../img/contact.png'
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link activeClass="active" to="homepage" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Ryan Cho</Link>
            <div className="desktopMenu">
                <Link activeClass="active" to="homepage" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Works</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contact} alt="" className="desktopMenuImg" />
                Contact Me
            </button>
        </nav>
    )
}