import React from 'react'
import './footer.css'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsFillTelephoneForwardFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FaAddressCard} from 'react-icons/fa'
import { AiOutlineArrowUp } from 'react-icons/ai';
import { FcRight } from "react-icons/fc";
import {AiOutlineRight} from 'react-icons/ai'

function Footer() {
  return (
    <>
<div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6 ">
                    <h4 className="text-success mb-4">Our Office</h4>
                    <p className="mb-3 "> 
                          <i className="fa fa-map-marker-alt fa-2x text-white"></i>
                               &nbsp;&nbsp;&nbsp;Sch No.-54, Shekher Residency,LG-10,Vijay Nagar, Indore, Madhya Pradesh 452010
                     </p>
                    <p className="mb-3"><i><BsFillTelephoneForwardFill/></i>&nbsp;&nbsp;&nbsp;+917880020088</p>
                    <p className="mb-3"><i><AiOutlineMail/></i>&nbsp;&nbsp;&nbsp;info@thechaywala.com</p>
                    <div className="d-flex pt-3">
                        <a className="btn btn-square btn-light rounded-circle me-1" href=""><i><AiFillTwitterCircle/></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-1" href=""><i><AiFillFacebook/></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-1" href=""><i><AiFillLinkedin/></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-1" href=""><i><AiFillYoutube/></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-5">
                    <h4 className="text-success mb-4">Quick Links</h4>
                    <a  className="btn btn-link" href=""> About Us</a>
                    <a className="btn btn-link" href=""> Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-success mb-4">Business Hours</h4>
                    <p className="mb-1">Monday - Sunday</p>
                    <h6 className="text-light">07:00 am - 11:00 pm</h6>
                    {/* <p className="mb-1">Saturday</p>
                    <h6 className="text-light">09:00 am - 12:00 pm</h6>
                    <p className="mb-1">Sunday</p>
                    <h6 className="text-light">Closed</h6> */}
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-success mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative w-100">
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-success py-2 position-absolute top-10 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="#" className="btn btn-lg btn-success btn-lg-square rounded-circle back-to-top l-5"><i><AiOutlineArrowUp/></i></a>
    </>
  )
}

export default Footer