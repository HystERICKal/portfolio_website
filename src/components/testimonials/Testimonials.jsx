import React from 'react';
import "./testimonials.css";
import data from "./testimonial_items";

//For the swipper js slide, just copy and paste 
//  code from their react documentation and
//  remove the stuff you don't need e.g navigation e.t.c

//Also down below the main tag wasn't 'Swiper' it was 
//  a div initially and later changed to 'Swiper' for
//  it to work with Swiper js

//Also the 'SwiperSlide' tag was initially an article tag

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      >
      
      
      
      {
        data.map(({avatar, name, review}, index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
          
            </SwiperSlide>
          );
        }
        )
      }     
      </Swiper>
    </section>
  )
}

export default Testimonials