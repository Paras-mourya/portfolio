import React from 'react';
import './Hero.css';
import photo from '../../assets/photo.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero=()=>{
    return (
        <div>
            <div id='home' className="hero">
                <img src={photo}  alt="" />
                <h1><span>I'm Paras Mourya</span>,FullStack developer</h1>
                <p>As a Java Full Stack Developer, I leverage expertise in Spring Boot, Hibernate, and JDBC to design and implement robust backend solutions.
                     I craft seamless user experiences and visually appealing interfaces.
                     </p>
                <div className="hero-action">
                    <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink>
                    </div>
                    <a href="https://drive.google.com/file/d/19rA8ECJDtfLkE1QWh0dTh0aKKN7KK94w/view?usp=sharing" className='resumee' target="_blank" rel="noopener noreferrer">
                    <div className="hero-resume">My resume</div></a>
                </div>
            </div>
        </div>
    )
}

export default Hero