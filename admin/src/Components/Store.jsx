import React from 'react'
import './store.css'
import store1 from '../assest/store1.jpg'
import store2 from '../assest/store3.jpg'
import store3 from '../assest/store2.jpg'
import coldCoffee from '../assest/ColdCoffee.png'
import chayWala from '../assest/ChayWalaSpecialTea.png'
import ayurvedicTea from '../assest/AyurvedicTea.png'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Store() {
  return (
<>
    <div className="container-xxl py-5">
    <div className="container">
        <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
            <p className="fs-5 fw-medium fst-italic text-primary">Online Store</p>
            <h1 className="display-6" style={{paddingBottom:'20px'}}>Want to stay healthy? Choose tea taste</h1>
        </div>
        <div className="row g-4">
            {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="store-item position-relative text-center">
                    <img  className="img-fluid" src={store2} alt=""/>
                    <div className="p-4">
                        <div className="text-center mb-3">
                        </div>
                        <h4 className="mb-3">Nature close tea</h4>
                        <p>Aliqu diam amet diam et eos. Clita erat ipsum lorem erat ipsum lorem sit sed</p>
                        <h4 className="text-primary">$19.00</h4>
                    </div> */}
                    {/* <div className="store-overlay">
                        <a href="" className="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i className="fa fa-arrow-right ms-2"></i></a>
                        <a href="" className="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i className="fa fa-cart-plus ms-2"></i></a>
                    </div> */}
                {/* </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="store-item position-relative text-center">
                    <img   className="img-fluid" src={store1} alt=""/>
                    <div className="p-4">
                        <div className="text-center mb-3">
                        </div>
                        <h4 className="mb-3">Green tea tulsi</h4>
                        <p>Aliqu diam amet diam et eos. Clita erat ipsum lorem erat ipsum lorem sit sed</p>
                        <h4 className="text-primary">$19.00</h4>
                    </div> */}
                    {/* <div className="store-overlay">
                        <a href="" className="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i className="fa fa-arrow-right ms-2"></i></a>
                        <a href="" className="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i className="fa fa-cart-plus ms-2"></i></a>
                    </div> */}
                {/* </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="store-item position-relative text-center">
                    <img  className="img-fluid" src={store3} alt=""/>
                    <div className="p-4">
                        <div className="text-center mb-3">
                        </div>
                        <h4 className="mb-3">Instant tea premix</h4>
                        <p>Aliqu diam amet diam et eos. Clita erat ipsum lorem erat ipsum lorem sit sed</p>
                        <h4 className="text-primary">$19.00</h4>
                    </div> */}
                    {/* <div className="store-overlay">
                        <a href="" className="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i className="fa fa-arrow-right ms-2"></i></a>
                        <a href="" className="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i className="fa fa-cart-plus ms-2"></i></a>
                    </div> */}
                {/* </div>
            </div> */}
                       
                       
                       
                       {/* start new code productjs copy  */}


                       <div className="col-md-4 mb-3" >
                               <div className="card" style={{backgroundColor:'#7ED957'}}>
                                   <img className="img-fluid" alt="100%x280" src={chayWala} />                                        
                                       <div className="card-body">
                                         <h4 className="card-title" style={{color:'white',textAlign:'center'}}>Chay Wala Special</h4>
                                           {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                           <h4 className="text" style={{color:'white',textAlign:'center'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>12/-</h4>
                                       </div>
                               </div>
                       </div>
                       <div className="col-md-4 mb-3">
                               <div className="card" style={{backgroundColor:'#7ED957'}}>
                                   <img className="img-fluid" alt="100%x280" src={ayurvedicTea} />                                        
                                       <div className="card-body">
                                         <h4 className="card-title" style={{color:'white',textAlign:'center'}}>Ayurvedic Tea</h4>
                                           {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                           <h4 className="text" style={{color:'white',textAlign:'center'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>25/-</h4>
                                       </div>
                               </div>
                       </div>
                       <div className="col-md-4 mb-3">
                               <div className="card" style={{backgroundColor:'#7ED957'}}>
                                   <img className="img-fluid" alt="100%x280" src={coldCoffee} />                                        
                                       <div className="card-body">
                                         <h4 className="card-title" style={{color:'white',textAlign:'center'}}>Cold Coffee</h4>
                                           {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                           <h4 className="texty" style={{color:'white', textAlign:'center'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>70/-</h4>
                                       </div>
                               </div>
                       </div>
                         
                         {/*End new code  */}


            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                <a href="/gallary" className="btn btn-success rounded-pill py-3 px-5">View More Products</a>
            </div>
        </div>
    </div>
</div>

<script>
  AOS.init();
</script>
</>

  )
}

export default Store