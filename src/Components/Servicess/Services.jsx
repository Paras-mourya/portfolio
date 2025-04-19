import React from 'react';
import './Services.css';
import pattern from '../../assets/pattern.svg';

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={pattern} alt="" />
      </div>
      <div className="services-list">
        <div className="service-card">
          <h2>Frontend Development</h2>
          <p>I create fully responsive and dynamic websites using HTML, CSS, JavaScript, and React.js.</p>
        </div>
        <div className="service-card">
          <h2>Java Backend Development</h2>
          <p>Building powerful and scalable backend systems using Java, Spring Boot, Hibernate, and MySQL.</p>
        </div>
        <div className="service-card">
          <h2>API Integration</h2>
          <p>Expertise in RESTful APIs development and integration using Spring Boot and Postman for testing.</p>
        </div>
        <div className="service-card">
          <h2>Database Management</h2>
          <p>Efficient at managing relational (MySQL) and non-relational (MongoDB) databases.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;