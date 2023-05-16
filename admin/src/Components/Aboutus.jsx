import React from 'react'
import about1 from '../assest/about-1.jpg'
import about2 from '../assest/about-2.jpg'
import about3 from '../assest/about-3.jpg'
import about4 from '../assest/about-4.jpg'
import about5 from '../assest/about-5.jpg'
import about6 from '../assest/about-6.jpg'
import Footer from './Footer'
const Aboutus = () => {
  return (
    <div>

    {/* <!-- Spinner Start --> */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;"></div>
    </div> */}
    {/* <!-- Spinner End --> */}

    
    {/* <!-- Navbar Start --> */}
    {/* <div className="container-fluid bg-white sticky-top">
    <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
            <a href="index.html" className="navbar-brand">
                <img className="img-fluid" src={logo} alt="Logo"/>
            </a>
            <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/aboutus" className="nav-item nav-link">ABout</Link>
                    <Link to="/gallary" className="nav-item nav-link">Gallary</Link>
                    <div className="nav-item dropdown">
                        <Link to="/tea" className="nav-link " data-bs-toggle="dropdown">Types of Tea</Link>
                         <div className="dropdown-menu bg-light rounded-0 m-0 text-dark">
                            <a href="feature.html" className="dropdown-item">Milk Tea Speical</a>
                            <a href="blog.html" className="dropdown-item">Delight of Milk Special</a>
                            <a href="testimonial.html" className="dropdown-item">Herbal Tea with milk</a>
                            <a href="404.html" className="dropdown-item">Hot coffie</a>
                            <a href="404.html" className="dropdown-item">Cold Coffie</a>
                        </div>
                    </div>
                    <Link to="/contactus" className="nav-item nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    </div>
</div> */}
    {/* <!-- Navbar End --> */}

    {/* <!-- Page Header Start --> */}
    <div className='mainAboutus'>
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    
        <div className="container text-center py-5">
            <h1 className="display-2 text-dark mb-4 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                    <li className="breadcrumb-item text-dark" aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </div>
    </div>
    
    {/* <!-- Page Header End --> */}


    {/* <!-- About Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6">
                    <div className="row g-3">
                        <div className="col-6 text-end">
                            <img className="img-fluid bg-white w-100 mb-3 wow fadeIn" data-wow-delay="0.1s" src={about1} alt=""/>
                            <img className="img-fluid bg-white w-50 wow fadeIn" data-wow-delay="0.2s" src={about3} alt=""/>
                        </div>
                        <div className="col-6">
                            <img className="img-fluid bg-white w-50 mb-3 wow fadeIn" data-wow-delay="0.3s" src={about4} alt=""/>
                            <img className="img-fluid bg-white w-100 wow fadeIn" data-wow-delay="0.4s" src={about2} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="section-title">
                        {/* <p className="fs-5 fw-medium fst-italic text-primary">About Us</p> */}
                        <h1 className="display-6" style={{fontFamily:'serif'}}>The success history of TEA House in 25 years</h1>
                    </div>
                    <div className="row g-3 mb-4">
                        <div className="col-sm-4">
                            <img className="img-fluid bg-white w-100" src={about5} alt=""/>
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
                            <img className="img-fluid bg-white w-100" src={about6} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Footer Start --> */}
    {/* <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-primary mb-4">Our Office</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>&nbsp;&nbsp;&nbsp;123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3"></i>&nbsp;&nbsp;&nbsp;+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>&nbsp;&nbsp;&nbsp;info@example.com</p>
                    <div className="d-flex pt-3">
                        <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-primary mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-primary mb-4">Business Hours</h4>
                    <p className="mb-1">Monday - Sunday</p>
                    <h6 className="text-light">07:00 am - 11:00 pm</h6>
                
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-primary mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative w-100">
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Footer End --> */}


    {/* <!-- Copyright Start --> */}
    {/* <div className="container-fluid copyright py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="fw-medium" href="#">Your Site Name</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                   
                    <a className="fw-medium" href="https://htmlcodex.com">HTML Codex</a>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Copyright End --> */}

    <Footer/>
    {/* <!-- Back to Top --> */}
    {/* <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a> */}


    {/* <!-- JavaScript Libraries --> */}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="tea-shop-website-template/lib/wow/wow.min.js"></script>
    <script src="tea-shop-website-template/lib/easing/easing.min.js"></script>
    <script src="tea-shop-website-template/lib/waypoints/waypoints.min.js"></script>
    <script src="tea-shop-website-template/lib/owlcarousel/owl.carousel.min.js"></script>

    {/* <!-- Template Javascript --> */}
    <script src="js/main.js"></script>


    </div>
  )
}

export default Aboutus;