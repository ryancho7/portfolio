import React, { useRef, useState } from "react";
import ISCHOOL from '../img/ischool-logo.png';
import hazingInfo from '../img/hazingInfo.png';
import erieInsurance from '../img/erieInsurance.png';
import gitHub from '../img/github.png';
import linkedIn from '../img/linkedin.png';
import handShake from '../img/handshake.png';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'; 

export default function Contact() {

    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        emailjs.sendForm('service_c5e1mdw', 'template_3th9ne6', form.current, {publicKey: '25Qn4QFihvvk7-wad',})
            .then(() => {
                toast.success('Email sent successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                form.current.reset();
                setIsSubmitting(false);
            }, (error) => {
                toast.error('Failed to send email. Please try again.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                setIsSubmitting(false);
                console.log('FAILED...', error.text);
            },);
    };

    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">Professional Background</h1>
                <p className="clientDesc">
                    Throughout my college experience, I have had the opportunity to work with various organizations and companies.
                </p>
                <div className="clientImgs">
                    <img src={erieInsurance} alt="Erie Insurance Client"className="clientImg"/>
                    <img src={hazingInfo} alt="Hazing Info Client"className="clientImg"/>
                    <img src={ISCHOOL} alt="UW iSchool Client"className="clientImg"/>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactHeader">Contact Me</h1>
                <span className="contactDesc">To discuss future opportunities and collaborations, please complete the form below. I look forward to connecting with you.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='your_name' required/>
                    <input type="text" className="email" placeholder="Your Email" name='your_email' required/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit" value='Send' className="submitBtn">{isSubmitting ? 'Sending...' : 'Submit'}</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/ryan-cho-98b685256/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedIn} alt="LinkedIn" className="link"/>
                        </a>
                        <a href="https://github.com/ryancho7" target="_blank" rel="noopener noreferrer">
                            <img src={gitHub} alt="GitHub" className="link"/>
                        </a>
                        <a href="https://uw.joinhandshake.com/profiles/41526124" target="_blank" rel="noopener noreferrer">
                            <img src={handShake} alt="HandShake" className="link"/>
                        </a>
                    </div>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
        </section>
    )
}