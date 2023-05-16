import React from 'react'
import './MilkTea.css';
import Footer from './Footer'
import store7 from '../assest/ChayWalaSpecialTea.png'
import store9 from '../assest/BlackSaltTea.png'
import store6 from '../assest/GingerTea.png'
import store8 from '../assest/ChocolateTea.png'
import store4 from '../assest/ElaichiTea.png'
import store5 from '../assest/CloveTea.png'
import store2 from '../assest/MasalaTea.png'
import { motion } from 'framer-motion';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const MilkTea = () => {
     return (
          <div>        {/* <!-- Page Header Start --> */}
               <div className='mainMilkTea'>
                    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                         <div className="container text-center py-5">
                              <h1 className="display-2 text-dark mb-4 animated slideInDown MilkTeaColor">Milk Tea Special</h1>
                              <nav aria-label="breadcrumb animated slideInDown">
                                   <ol className="breadcrumb justify-content-center mb-0">
                                        {/* <li className="breadcrumb-item"><a href="/">Home</a></li> */}
                                        {/* <li className="breadcrumb-item text-dark" aria-current="page">Milk Tea Special</li> */}
                                   </ol>
                              </nav>
                         </div>
                    </div>
               </div>

               {/* <!-- Page Header End --> */}


               {/* <!-- Milk Tea Menu start --> */}
               <div className="container MilkTeaContainer" >
                    <motion.div
                         animate={{ x: 10, scale: 1 }}
                         initial={{ scale: 0 }}
                         transition={{ duration: 1.2 }}
                    >
                         <div className="container-fluid">
                              <div className="jumbotron"></div>
                              <div className="row">
                                   <motion.div
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        className="col-sm-6 col-md-4 col-lg-4">
                                        <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                                             <img src={store7} className="card-img-top" alt="..." />
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>CHAYWALA SPECIAL TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />12/-</h4>

                                             </div>
                                        </div>
                                   </motion.div>
                                   <motion.div
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        className="col-sm-6 col-md-4 col-lg-4">
                                        <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                                             <img src={store9} className="card-img-top" alt="..." />
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>BLACK SALT TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />15/-</h4>

                                             </div>
                                        </div>
                                   </motion.div>
                                   <motion.div
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        className="col-sm-6 col-md-4 col-lg-4">
                                        <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                                             <img src={store6} className="card-img-top" alt="..." />
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>GINGER TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />15/-</h4>

                                             </div>
                                        </div>
                                   </motion.div>
                                   <motion.div
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        className="col-sm-6 col-md-4 col-lg-4">
                                        <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                                             <img src={store8} className="card-img-top" alt="..." />
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>CHOCOLATE TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />15/-</h4>
                                             </div>
                                        </div>
                                   </motion.div>
                                   <motion.div
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        className="col-sm-6 col-md-4 col-lg-4">
                                        <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                                             <img src={store4} className="card-img-top" alt="..." />
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>ELAICHI TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />15</h4>
                                             </div>
                                        </div>
                                   </motion.div>
                                   <motion.div
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        className="col-sm-6 col-md-4 col-lg-4">
                                        <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                                             <img src={store5} className="card-img-top" alt="..." />
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>CLOVE TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />15/-</h4>
                                             </div>
                                        </div>
                                   </motion.div>
                                   <motion.div
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        className="col-sm-6 col-md-4 col-lg-4">
                                        <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                                             <img src={store2} className="card-img-top" alt="..." />
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>MASALA TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />15/-</h4>
                                             </div>
                                        </div>
                                   </motion.div>
                              </div>
                         </div>
                    </motion.div>
               </div>
               {/* <!--Milk Tea Menu End--> */}
               <Footer />
          </div>
     )
}

export default MilkTea;