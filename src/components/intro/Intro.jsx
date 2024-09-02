import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/ak.png'

const Intro = () => {

  const handleClick = () => {
    window.open ('https://github.com/Akprogramm','_blank');
  };

  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card" onClick={handleClick}>
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
            </article>
          </div>
          <p>
          Hello, my name is Abdul Kadar Khan, and I am a passionate full-stack developer with deep expertise in the MERN stack and Next.js, focusing on building scalable and user-centric web applications from scratch to deployement. In addition to my experience with JavaScript frameworks, I have a strong understanding of Python, which complements my problem-solving skills. I also have a solid foundation in Data Structures and Algorithms, with over 200+ problems solved across different competitive programming platforms. My participation in weekly contests has further honed my algorithmic thinking, particularly using C++. I’m always eager to tackle new challenges, contribute to impactful projects, and continuously expand my technical expertise.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
