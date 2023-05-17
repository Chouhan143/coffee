import React from 'react'
import { useEffect } from 'react'
import artical from '../assest/aa.jpg'
import { motion } from 'framer-motion';
import AyurvedicArtical from '../assest/AyurvedicArtical01.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Artical() {
    useEffect(() => {
        AOS.init({
            duration: 500, // Set the animation duration (in milliseconds)
            once: true, // Apply the animation only once
            offset: 200, // Set the offset (in pixels) for when the animation should trigger
            delay: 200, // Set the delay (in milliseconds) before the animation starts
        });
    }, []);
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div
                        data-aos="zoom-in-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        className="col-lg-5 wow fadeIn">
                        <motion.img
                            whileHover={{ rotate: 360 }} // Rotate 360 degrees on hover
                            transition={{duration:3}}
                            className="img-fluid" src={AyurvedicArtical} alt="" />
                    </div>
                    <div
                        data-aos="zoom-in-down"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        className="col-lg-6 wow fadeIn" >
                        <div className="section-title">
                            {/* <p className="fs-5 fw-medium fst-italic text-primary">Featured Acticle</p> */}
                            <h1 className="display-6">The Chai Wala Special Ayurvedic (Kalyan) Tea </h1>
                        </div>
                        <p className="mb-4">Our Ayurvedic tea is a delicious and nutritious tea. It's an ancient, holistic remedy for many ailments.  It's full of natural ingredients that are great for your health. It has ginger, cardamom, cinnamon, tulsi leaves, turmeric, cloves and black pepper.</p>
                        <p className="mb-4">It's made from a combination of herbs and spices that have been used for centuries to promote health and wellness. All known to boost immunity and improve digestion and reduce inflammation even promote weight loss. </p>
                        {/* <a href="" className="btn btn-success rounded-pill py-3 px-5">Read More</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artical