import React from 'react'
import './protfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
// import IMG7 from '../../assets/portfolio7.jpg'

const Protfolio = () => {
  return (
    <section id="protfolio">
      <h5>My Recent Work</h5>
      <h2> Protfolio </h2>

      <div className="container protfolio__container">
        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
       

          <h3>This is a protfolio item title </h3>
          <div className="protfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'> Git Hub </a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank'> Live Demo </a>
          </div>
          
        </article>

        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
       

          <h3>This is a protfolio item title </h3>
          <div className="protfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'> Git Hub </a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank'> Live Demo </a>
          </div>
        </article>

        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
       

          <h3>This is a protfolio item title </h3>
          <div className="protfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'> Git Hub </a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank'> Live Demo </a>
          </div>
        </article>

        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
       

          <h3>This is a protfolio item title </h3>
          <div className="protfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'> Git Hub </a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank'> Live Demo </a>
          </div>
        </article>

        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
       

          <h3>This is a protfolio item title </h3>
          <div className="protfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'> Git Hub </a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank'> Live Demo </a>
          </div>
        </article>

        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
       

          <h3>This is a protfolio item title </h3>
          <div className="protfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'> Git Hub </a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank'> Live Demo </a>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default Protfolio