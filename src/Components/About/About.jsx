import React from "react";
import "./About.css";
import pattern from "../../assets/pattern.svg";
import paras from "../../assets/paras.jpg";
import github from "../../assets/github.png";
import instagram1 from "../../assets/instagram1.png";
import linkedin from "../../assets/linkedin.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={pattern} className="paras" alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={paras} alt="" />
          <div className="about-socialmedia">
            <a
              href="https://github.com/Paras-mourya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="git" alt="GitHub profile" />
            </a>
            <a
              href="https://www.instagram.com/paarasss___/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram1} className="git" alt="GitHub profile" />
            </a>
            <a
              href="https://l.instagram.com/?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fparas-mourya-63a276309%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaczPAFsFCJtUJrDTjWEblMAIc1AF9ePygKPhXpXyugW9EZCm1DBF2YaBCxjqg_aem_0yNwm5qbFOGAJ6fq3knnrA&e=AT3JXcyZ31MF2hqnmH76Vd3gSV9rxT7jrNUvRKjrAeGACQuaf_vlmITjyV1gC4QlpIbtu-PghaAYZRpu8J0NzUPM0fW9nz0U8ci5XkDj2jRpCDbsLScObcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="git" alt="GitHub profile" />
            </a>
          </div>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              {" "}
              Hey! I'm Paras Mourya, a highly motivated freshser and
              detailed-oriented Java developer with a strong foundation in
              HTML,CSS,Javascript and React.js . My expertise lies in crafting
              responsive web designs that prioritize user experience
            </p>
            <p>
              {" "}
              My expertise lies in crafting responsive web designs that
              prioritize user experience
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Springboot</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Hibernate</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JDBC</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Servlets</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
