import React from 'react';
// import CV from '../../assets/Rasif Taghizade Resume.pdf';
import CV from '../../assets/abdul.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV 
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
