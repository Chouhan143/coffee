import React from 'react'
import './DelightMilkTea.css';
import Footer from './Footer'
import store10 from '../assest/RoseTea.png'
import store13 from '../assest/KesarElaichiTea.png'
import store14 from '../assest/JaggeryTea.png'
import store12 from '../assest/MalaiTea.png'
import store15 from '../assest/TulsiTea.png'
import {motion} from 'framer-motion';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const DeligthMilkTea= () => {
  return (
    <>
    {/* <!-- Page Header Start --> */}
    <div className='mainDelightofMilk'>
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-2 text-dark mb-4 animated slideInDown DelightColor">Delight Milk Tea</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    {/* <li className="breadcrumb-item"><a href="/">Home</a></li> */}
                    {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                    {/* <li className="breadcrumb-item text-dark" aria-current="page">DelightMilkTea</li> */}
                </ol>
            </nav>
        </div>
    </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- DeligthMilkTea Menu Start --> */}
  
    <div className="container DelightContainer">
    <motion.div
           animate={{x:10,scale:1}}
             initial={{scale:0}}> 
         <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-6 col-md-4 col-lg-4">
                     <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}}>
                        <img src={store10} className="card-img-top" alt="..." />
                            <div className="card-body">
                               <h4 className="card-title" style={{color:'white', textAlign:'center',textTransform:'uppercase'}}>rose tea</h4>
                               <h4 className="card-price" style={{textAlign:'center', color:'white'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>20/-</h4>
                            </div>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4">
                      <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}} >
                         <img src={store13} className="card-img-top" alt="..." />
                             <div className="card-body">
                                <h4 className="card-title" style={{color:'white', textAlign:'center',textTransform:'uppercase'}}>kesr elaichi tea</h4>
                                <h4 className="card-price" style={{textAlign:'center', color:'white'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>20/-</h4>
                            </div>
                      </div>
                   </div>
                   <div className="col-sm-6 col-md-4 col-lg-4">
                     <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}}>
                        <img src={store14} className="card-img-top" alt="..." />
                            <div className="card-body">
                               <h4 className="card-title" style={{color:'white', textAlign:'center',textTransform:'uppercase'}}>jaggery tea</h4>
                               <h4 className="card-price" style={{textAlign:'center', color:'white'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>20/-</h4>

                            </div>
                      </div>
                   </div>
                   <div className="col-sm-6 col-md-4 col-lg-4">
                     <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}}>
                        <img src={store12} className="card-img-top" alt="..." />
                            <div className="card-body">
                               <h4 className="card-title" style={{color:'white', textAlign:'center',textTransform:'uppercase'}}>malai tea</h4>
                               <h4 className="card-price" style={{textAlign:'center', color:'white'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>20/-</h4>

                            </div>
                      </div>
                   </div>
                   <div className="col-sm-6 col-md-4 col-lg-4">
                     <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}} >
                        <img src={store15} className="card-img-top" alt="..." />
                            <div className="card-body">
                               <h4 className="card-title" style={{color:'white', textAlign:'center',textTransform:'uppercase'}}>tulsi tea</h4>
                               <h4 className="card-price" style={{textAlign:'center', color:'white'}}><CurrencyRupeeIcon style={{marginBottom:'4px'}}/>20/-</h4>
                            </div>
                      </div>
                   </div>
              </div>
         </div>
         </motion.div>
    </div>
    {/* <!-- DeligthMilkTea Menu End --> */}
    <Footer/>
    </>
  )
}

export default DeligthMilkTea;