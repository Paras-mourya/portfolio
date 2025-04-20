import React, { useState } from 'react';
import './Contact.css';
import pattern from '../../assets/pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';


const Contact = () => {
 const [submitted, setSubmitted] = useState(false); // Define state for submission status

 const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  
  formData.append("access_key", "9966aaf2-4e49-4144-983c-9ea555adf4e2");
  
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  
  const res = await fetch("https://api.web3forms.com/submit", {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
   },
   body: json,
  }).then((res) => res.json());
  
  if (res.success) {
   console.log("Success", res);
   setSubmitted(true); // Set submitted state to true
  }
 };

 return (
  <div id='contact' className='contact'>
   <div className="contact-title">
    <h1>Get in touch</h1>
   
   </div>
   <div className="contact-section">
    <div className="contact-left">
     <h1>Let's talk</h1>
     <p>I'm currently available to take on new projects,so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
     <div className="contact-details">
      <div className="contact-detail">
       <img src={mail_icon} alt="" />
       <p>parasmourya288@gmail.com</p>
      </div>
      <div className="contact-detail">
       <img src={call_icon} alt="" />
       <p>+916395721424</p>
      </div>
      <div className="contact-detail">
       <img src={location_icon} alt="" />
       <p>Bareilly, UttarPradesh,India</p>
      </div>
     </div>
    </div>
    <form onSubmit={onSubmit} className="contact-right">
     <label htmlFor="">Your Name</label>
     <input type="text" placeholder='Enter your name' name='name' required />
     <label htmlFor="">Your Email</label>
     <input type="email" placeholder='Enter your email' name="email" required />
     <label htmlFor="">Write your message here</label>
     <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
     <button type='submit' className="contact-submit">Submit now</button>
    </form>
   </div>
   {submitted && (
    <div className="submission-message">
     <h2>Submitted Successfully!</h2>
     <p>Thank you for reaching out. I will get back to you soon.</p>
    </div>
   )}
  </div>
 );
}

export default Contact;
