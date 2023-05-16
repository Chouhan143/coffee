import React from 'react'
import './Carousel.css'

import Car2 from '../assest/TT.jpg'
import TeaImg1 from '../assest/TeaImg1.png'
import TeaImg5 from '../assest/TeaImg5.png'
import TeaImg4 from '../assest/TeaImg4.png'
import TeaImg7 from '../assest/TeaImg7.png'
import TeaImg9 from '../assest/TeaImg9.png'
import TeaImg10 from '../assest/TeaImg10.png'

function Carousel() {
  return (
    <>
<div className='mainCarousel'>
     <div id="carouselExampleCaptions"  className="carousel slide m-5" data-bs-ride="false">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

      </div>
      <div className="carousel-inner">
        <div className="carousel-item active carousel-img">
          {/* <img src={TeaImg1} className="d-block w-50 float-end rounded-circle" alt="..." /> */}
          <img src={TeaImg1} className="d-block float-end rounded-circle" alt="..." />

          <h1 style={{fontFamily: 'serif'}}>A cup of Tea Make Refresh your mood </h1>
          
          <a href="/milktea" className="btn btn-success rounded-pill py-2  px-5 animated zoomIn mt-5">Explore More</a>

        </div>
        <div className="carousel-item carousel-img">
        {/* <img src={TeaImg2} className="d-block w-50 float-end rounded-circle" alt="..." /> */}
        <img src={TeaImg10} className="d-block float-end rounded-circle" alt="..." />

          <h1 style={{fontFamily: 'serif'}}>Start your Day with our Special Herbal Tea  </h1>
          
          <a href="/HerbalTeawithoutmilk" className="btn btn-success rounded-pill py-2  px-5 animated zoomIn mt-5">Explore More</a>

        </div>
        <div className="carousel-item carousel-img">
        {/* <img src={TeaImg3} className="d-block w-50 float-end rounded-circle" alt="..." /> */}
        <img src={TeaImg5} className="d-block  float-end rounded-circle" alt="..." />

          <h1 style={{fontFamily: 'serif'}}>Boost your Immunity with Our Saffron Tea</h1>
          
          <a href="/delightmilktea" className="btn btn-success rounded-pill py-2  px-5 animated zoomIn mt-5">Explore More</a>

        </div>
        <div className="carousel-item carousel-img">
          {/* <img src={TeaImg4} className="d-block w-50 float-end rounded-circle" alt="..." /> */}
          <img src={TeaImg4} className="d-block  float-end rounded-circle" alt="..." />

          <h1 style={{fontFamily: 'serif'}}>Start your Day with our Special Herbal Tea  </h1>
          <a href="/HerbalTeawithmilk" className="btn btn-success rounded-pill py-2  px-5 animated zoomIn mt-5">Explore More</a>

        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        
        <span className="visually-hidden"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>
    </div>

    </div>
    </>
  )
}

export default Carousel