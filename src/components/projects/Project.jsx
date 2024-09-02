import React from 'react';
import { FaGithub } from "react-icons/fa";
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './project.css';

const Project = () => {
  const Projects = [
    {
      id: 1, 
      name: 'Threads Clone',
      test: 'Implemented secure user authentication with Clerk and developed a user-friendly interface using Next.js and React.js. Designed a NoSQL database with MongoDB for efficient data management and created features for comprehensive thread and comment management. Enhanced user engagement with profile customization,activity tracking, and search functionality.',
      val: 'https://threads3-rho.vercel.app/'
    },
    {
      id: 2,
      name: 'AI Image generator',
      test: 'Developed a responsive frontend with React.js and a robust backend using Express.js and Node.js. Utilized MongoDB for efficient data management and integrated the getimg.ai API for high-quality image generation. Enhanced user engagement with image sharing and downloading features.',
      val: 'https://aig-one.vercel.app/'
    },
    {
      id: 3,
      name: 'Invoice-System',
      test: 'Developed a responsive web application using React.js to create and manage invoices efficiently. The application allows users to input billing details, generate invoices, and download them in a printable format. The project focused on providing a seamless user experience with real-time updates',
      val: 'https://startling-lolly-9e3e47.netlify.app/'
    },
    {
      id: 4,
      name: 'E-Commerce',
      test: 'Developed a responsive e-commerce platform using React.js, integrated with Sanity.io for product management and Stripe for real-time payments. Implemented "Add to Cart" functionality for a seamless shopping experience.',
      val: 'https://ecommerce-two-dun.vercel.app/'
    }
  ];
  return (
    <section id="testimonials">
      <h5>Recent projects</h5>
      <h2>Description</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {Projects.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar"> 
            <a href="https://github.com/Akprogramm">
              <FaGithub />
            </a>
          </div>
          <h3 className='client__name'>{test.name}</h3> 
          <p>OverView</p>
          <small className="client__review">{test.test}</small>
          <a href={test.val}>Visit</a>
        </SwiperSlide>
        ))}
      </Swiper>


    </section>
  )
}

export default Project