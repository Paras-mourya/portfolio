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
                <p>I am also java developer and frontend developer with skills like react.js,next.js,tailwindcss,html.</p>
                <div className="hero-action">
                    <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink>
                    </div>
                    <a href="/ParasMourya_InternshalaResume-2-3.pdf" className='resumee' target="_blank" rel="noopener noreferrer">
                    <div className="hero-resume">My resume</div></a>
                </div>
            </div>
        </div>
    )
}

export default Hero