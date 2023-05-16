import React from 'react'
import './Navbar.css' 
import logo from '../assest/CHAY WALA logo.png'
import { Link } from 'react-router-dom'

// import {AiOutlineRight} from 'react-icons/ai'

function Navbar() {
  return (
    <div className="container-fluid bg-white sticky-top" style={{marginBottom:'-50px'}}>
    <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
            <a href="/" className="navbar-brand">
                <img className="img-fluid" src={logo} alt="Logo"/>
            </a>
            <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/aboutus" className="nav-item nav-link">ABout</Link>
                    <Link to="/gallary" className="nav-item nav-link">Gallery</Link>
                    <div className="nav-item dropdown">
                        <Link to="/tea" className="nav-link " data-bs-toggle="dropdown">Types of Tea</Link>
                         <div className="dropdown-menu bg-light rounded-0 m-0 text-dark">
                            {/* <a href="feature.html" className="dropdown-item">Milk Tea Speical</a>
                            <a href="/blog" className="dropdown-item">Delight of Milk Special</a>
                            <a href="testimonial.html" className="dropdown-item">Herbal Tea with milk</a>
                            <a href="404.html" className="dropdown-item">Hot coffie</a>
                            <a href="404.html" className="dropdown-item">Cold Coffie</a> */}
                        
                        <Link to="/milktea" className="dropdown-item">Milk Tea Speical</Link>
                        <Link to="/delightmilktea" className="dropdown-item">Delight Of Milk Special</Link>
                        <Link to="/HerbalTeawithmilk" className="dropdown-item">Herbal Tea With Milk</Link>
                        <Link to="/HerbalTeawithoutmilk" className="dropdown-item">Herbal Tea Without Milk</Link>
                        <Link to="/hotcoffee" className="dropdown-item">Hot Coffee</Link>
                        <Link to="/coldcoffee" className="dropdown-item">Cold Coffee</Link> 
                        </div>
                    </div>
                    <Link to="/contactus" className="nav-item nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    </div>
</div>
  )
}

export default Navbar