import React from 'react'
import artical from '../assest/aa.jpg'
import AyurvedicArtical from '../assest/AyurvedicArtical01.png'
function Artical() {
  return (
    <div className="container-xxl py-5">
    <div className="container">
        <div className="row g-5">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <img className="img-fluid" src={AyurvedicArtical} alt=""/>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="section-title">
                    <p className="fs-5 fw-medium fst-italic text-primary">Featured Acticle</p>
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