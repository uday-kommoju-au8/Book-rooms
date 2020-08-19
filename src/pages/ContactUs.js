import React from "react";
import "../styles/contact.css";


const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="section">
      <div className="container">
		<div className="contact-box">
			<div className="left"></div>
			<div className="right">
				<h2>Contact Us</h2>
				<input type="text" className="field" placeholder="Your Name" name="" required/>
				<input type="text" className="field" placeholder="Your Email"/>
				<input type="text" className="field" placeholder="Phone"/>
				<textarea placeholder="Message" className="field"></textarea>
				<button className="btn" value="Send" onSubmit={handleSubmit}>Send</button>
			</div>
		</div>
	</div>
    </div>
  );
};

export default ContactUs;
