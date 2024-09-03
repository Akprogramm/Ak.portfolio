import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">A k khan</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#testimonials">projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/abdul-kadar-khan-b77382236/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Akprogramm" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div> 
      <div className="footer__copyright">
      </div>
    </footer>
  )
}

export default Footer