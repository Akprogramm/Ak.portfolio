import './contact.css';

import React, { useState } from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
    const [data, setData] = useState({
    from_name: '',
    from_email: '',
    to_name: 'Abdul',
    message: ''
  });

  const set = (e) => {
    setData({...data,[e.target.name]: e.target.value});
    console.log(data);
  }  

  const handleSubmit = (e) => { 
    e.preventDefault();
    setMessage(true); 
    const serviceID = 'service_x2qfcul';
    const templateID = 'template_mpmnnkk';
    const publicKey = 'OebcFqWG5wbf5jUxA';

    emailjs
      .send(serviceID, templateID, data, publicKey)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setData({
      from_name: '',
      from_email: '',
      to_name: 'Abdul',
      message: ''
    });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>abdulkadar0710@gmail.com</h5>
            <a href="abdulkadar0710@gmail.com">Send a message</a>
          </article>
        </div> 
        <form onSubmit={handleSubmit}> 
          <input
            type="text"
            placeholder="Your Full Name"
            name="from_name"
            value={data.from_name}
            onChange={set}
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="from_email"
            value={data.from_email}
            onChange={set}
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            value={data.message}
            onChange={set}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
