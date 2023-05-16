import React from 'react'
import logo from '../assest/CHAY WALA.png'
import './Testmonial.css';
import test1  from '../assest/testimonial-2.jpg'
import test2 from '../assest/testimonial-3.jpg'
import test3  from '../assest/test.jpg'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { AiTwotoneMail} from 'react-icons/ai'
import {  FaAddressBook} from 'react-icons/fa'
import Footer from './Footer'
import { motion } from 'framer-motion';


function Testmonial() {
  return (
    <>
     {/* <div className="container-xl">
    <div className="row">
      <div className="col-lg-12 mx-auto">
        <h2>Testimonials</h2>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>   
      
          <div className="carousel-inner">
            <div className="carousel-item active  mt-5">
              <div className="img-box"><img src={test1} alt=""/></div>
              <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
              <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
            </div>
            <div className="carousel-item   mt-5">
              <div className="img-box"><img src={test2} alt=""/></div>
              <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
              <p className="overview"><b>Antonio Moreno</b>, Web Developer</p>
            </div>
            <div className="carousel-item   mt-5">
              <div className="img-box"><img src={test3} alt=""/></div>
              <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
              <p className="overview"><b>Michael Holz</b>, Seo Analyst</p>
            </div>
          </div>
         
          <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <i className="fa fa-angle-left"></i>
          </a>
          <a className="carousel-control-next" href="#myCarousel" data-slide="next">
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div> */}


{/* <div className='Demo' style={{height:'700px'}}>

<div id="carouselExampleCaptions3" style={{paddingTop:'50px'}} className="carousel slide m-5" data-bs-ride="false">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <div className="img-box">
          <img src={test1} alt=""/>
          </div>
          <div className='TextBox'>
              <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
              <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
          </div>
        </div>
        <div className="carousel-item">
        <div className="img-box">
          <img src={test3} alt=""/>
          </div>
          <div className='TextBox'>
              <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
              <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
          </div>
        </div>
        <div className="carousel-item">
        <div className="img-box">
          <img src={test2} alt=""/>
          </div>
          <div className='TextBox'>
              <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
              <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
           </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        
        <span className="visually-hidden"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>
    </div>

</div> */}


    {/* Html */}
    {/* Testmomial start */}
    <div id="carouselExampleCaptions3" className="carousel slide text-center carousel-dark" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="rounded-circle shadow-1-strong mb-4"
        src={test1} alt="avatar"
        style={{width:"150px"}} />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 content">
          <h5 className="mb-3">Maria Kate</h5>
          <p>Photographer</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
            <i className="fas fa-quote-right pe-2"></i>
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="far fa-star fa-sm"></i></li>
      </ul>
    </div>
    <div className="carousel-item">
      <img className="rounded-circle shadow-1-strong mb-4"
        src={test2} alt="avatar"
        style={{width:"150px"}} />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 content">
          <h5 className="mb-3">John Doe</h5>
          <p>Web Developer</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis.
            <i className="fas fa-quote-right pe-2"></i>

          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="far fa-star fa-sm"></i></li>
      </ul>
    </div>
    <div className="carousel-item">
      <img className="rounded-circle shadow-1-strong mb-4"
        src={test3} alt="avatar" style={{width:"150px"}}/>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 content">
          <h5 className="mb-3">Anna Deynah</h5>
          <p>UX Designer</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
            <i className="fas fa-quote-right pe-2"></i>
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="far fa-star fa-sm"></i></li>
      </ul>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        
        <span className="visually-hidden"></span>
      </button>
      <button  className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </button>
  </div>
  </div>
    {/* <!-- Testimonial End --> */}

    </>
  )
}

export default Testmonial;





