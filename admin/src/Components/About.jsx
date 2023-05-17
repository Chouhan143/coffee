import React from 'react'
import { useEffect } from 'react'
import './about.css'
import about1 from '../assest/1.png'
import about2 from '../assest/2.png'
import about3 from '../assest/3.png'
import about4 from '../assest/about-4.jpg'
import about5 from '../assest/about-5.jpg'
import about6 from '../assest/about-6.jpg'
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({
            duration: 5000, // Set the animation duration (in milliseconds)
            once: true, // Apply the animation only once
            offset: 200, // Set the offset (in pixels) for when the animation should trigger
            delay: 100, // Set the delay (in milliseconds) before the animation starts
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])



    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <motion.img 
                                 whileHover={{ scale: 1.1 }}
                                // transition={{duration:1.2}}
                                className="img-fluid bg-white w-100 mb-3 " data-aos="zoom-in-up" src={about1} alt="" />
                                <motion.img 
                                 whileHover={{ scale: 1.1}}
                               //  transition={{ duration: 3 }}
                                // transition={{duration:1.2}}
                                className="img-fluid bg-white w-50 " src={about2} alt="" data-aos="zoom-in-up" />
                            </div>
                            <div className="col-6">
                                <motion.img 
                                 whileHover={{ scale: 1.1}}
                                // transition={{duration:1.2}}
                                className="img-fluid bg-white w-50 mb-3 wow fadeIn"  src={about3} alt="" data-aos="zoom-in-up" />
                                <motion.img 
                                 whileHover={{ scale: 1.1}}
                                // transition={{duration:1.2}}
                                className="img-fluid bg-white w-100 wow fadeIn"  src={about4} alt="" data-aos="zoom-in-up" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-aos="fade-left" data-aos-offset="500"
                        data-aos-duration="500">
                        <div className="section-title">
                            {/* <p className="fs-5 fw-medium fst-italic text-primary">About Us</p> */}
                            <h1 className="display-6" style={{ fontFamily: 'serif' }}>The success history of TEA House in 25 years</h1>
                        </div>
                        <div className="row g-3 mb-4">
                            <div className="col-sm-4">
                                <img className="img-fluid bg-white w-100" src={about5} alt="" />
                            </div>
                            <div className="col-sm-8">
                                <h5>Our tea is one of the most popular drinks in the world</h5>
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
                            </div>
                        </div>
                        <div className="border-top mb-4"></div>
                        <div className="row g-3">
                            <div className="col-sm-8">
                                <h5>Daily use of a cup of tea is good for your health</h5>
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="img-fluid bg-white w-100" src={about6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About



