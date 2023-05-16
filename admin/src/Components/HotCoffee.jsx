import React from 'react'
import './HotCoffee.css';
import Footer from './Footer'
import {motion} from 'framer-motion';
import store27 from '../assest/HotFlatWhiteCoffee.png'
import store28 from '../assest/ChocolateCoffee.png'
import store29 from '../assest/ExpressoCoffee.png'
import store30 from '../assest/CappuccinoCoffee.png'
import store31 from '../assest/ExpressoCreamyCoffee.png'
import store32 from '../assest/BlackCoffee.png'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const HotCoffee = () => {
  return (
    <div>
        {/* <!-- Page Header Start --> */}
    <div className='mainHotCoffee'>
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-2 text-dark mb-4 animated slideInDown HotColor">Hot Coffee</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    {/* <li className="breadcrumb-item"><a href="/">Home</a></li> */}
                    {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                    {/* <li className="breadcrumb-item text-dark" aria-current="page">HotCoffee</li> */}
                </ol>
            </nav>
        </div>
    </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Hot Coffee Menu Start --> */}
    <div className="container HotcoffeeContainer" >
    <motion.div
           animate={{x:10,scale:1}}
             initial={{scale:0}}> 
             <div className="row">


              
             <div className="col-sm-6 col-md-4 col-lg-4">
                          <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}} >
                            <img src={store27} className="card-img-top" alt="..." />
                             <div className="card-body">
                               <h4 className="card-title" style={{fontSize:'20px',color:'white', textAlign:'center',textTransform:'uppercase'}}>hot flat white coffee</h4>
                               <h4 className="card-price" style={{textAlign:'center', color:'white'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>30/-</h4>

                           </div>
                        </div>
                  </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                   <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}}>
                      <img src={store28} className="card-img-top" alt="..." />
                        <div className="card-body">
                           <h4 className="card-title"style={{fontSize:'20px',color:'white', textAlign:'center',textTransform:'uppercase'}}>chocolate coffee</h4>
                           <h4 className="card-price" style={{textAlign:'center', color:'white'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>30/-</h4>

                       </div>
                  </div>
             </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
               <div className="card"style={{margin:'10px',backgroundColor:'#7ED957'}}>
                   <img src={store29} className="card-img-top" alt="..." />
                     <div className="card-body">
                       <h4 className="card-title" style={{fontSize:'20px',color:'white', textAlign:'center',textTransform:'uppercase'}}>expresso coffee</h4>
                       <h4 className="card-price" style={{textAlign:'center', color:'white'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>40/-</h4>

                   </div>
             </div>
       </div>
             <div className="col-sm-6 col-md-4 col-lg-4">
                   <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}} >
                       <img src={store30} className="card-img-top" alt="..." />
                           <div className="card-body">
                               <h4 className="card-title" style={{fontSize:'20px',color:'white', textAlign:'center',textTransform:'uppercase'}}>cappucinno coffee</h4>
                               <h4 className="card-price" style={{textAlign:'center', color:'white'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>40/-</h4>

                         </div>
                   </div>
            </div>
           <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}} >
                           <img src={store31} className="card-img-top" alt="..." />
                             <div className="card-body">
                                 <h4 className="card-title" style={{fontSize:'20px',color:'white', textAlign:'center',textTransform:'uppercase'}}>Expresso creamy coffee</h4>
                                 <h4 className="card-price" style={{textAlign:'center', color:'white'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>40/-</h4>

                            </div>
                     </div>
        </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
               <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}}>
                   <img src={store32} className="card-img-top" alt="..." />
                      <div className="card-body">
                         <h4 className="card-title" style={{fontSize:'20px',color:'white', textAlign:'center',textTransform:'uppercase'}}>black coffee</h4>
                         <h4 className="card-price" style={{textAlign:'center', color:'white'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>40/-</h4>

                    </div>
              </div>
        </div>
   
             </div> 

</motion.div>
</div>
    {/* <!-- Hot Coffee Menu End --> */}
    <Footer/>
    </div>
  )
}

export default HotCoffee