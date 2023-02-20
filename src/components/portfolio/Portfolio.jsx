import React from 'react';
import "./portfolio.css";

import data from "./portfolio_items";




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">

      
       { 
        /* ERICK'S WAY */

        /* data.map((portfolio_item)=>{
          return(
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={portfolio_item.image} alt="" />
            </div>
            <h3>{portfolio_item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={portfolio_item.github} className="btn" target='_blank' rel="noopener noreferrer">Github</a>
              <a href={portfolio_item.demo} className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          
          </article>
          );
        }) */

        /* TUTOR'S WAY */
        /* Destruct the object array first */
        data.map(({id, image, title, github, demo})=>{
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target='_blank' rel="noopener noreferrer">Github</a>
              <a href={demo} className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
            </div>
          
          </article>
          );
        })
       }
      
        
        
        
      </div>
    </section>
  )
}

export default Portfolio