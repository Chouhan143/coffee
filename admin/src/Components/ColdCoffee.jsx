import React from 'react'
import './ColdCoffee.css'
import Footer from './Footer'
import { motion } from 'framer-motion';
import store22 from '../assest/ChoclateExpressoCoffee.png'
import store23 from '../assest/IcedExpressoCoffee.png'
import store24 from '../assest/ColdCoffee.png'
import store25 from '../assest/CremyIcedCoffee.png'
import store26 from '../assest/CappucinnoColdIcedCoffee.png'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ColdCoffee = () => {
  return (
    <div>
      {/* <!-- Page Header Start --> */}
      <div className='mainColdCoffee'>
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container text-center py-5">
            <h1 className="display-2 text-dark mb-4 animated slideInDown coldColor">Cold Coffee</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb justify-content-center mb-0">
                {/* <li className="breadcrumb-item"><a href="/">Home</a></li> */}
                {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                {/* <li className="breadcrumb-item text-dark" aria-current="page">ColdCoffee</li> */}
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}


      {/* <!-- Cold Coffe Menu Start --> */}


      <div className="container ColdCoffeeContainer" >
        <motion.div
          animate={{ x: 10, scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="row">


            <motion.div
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              className="col-sm-6 col-md-4 col-lg-4">
              <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                <img src={store22} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title" style={{ fontSize: '20px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>chocolate expresso coffee</h4>
                  <h4 className="card-price" style={{ textAlign: 'center', color: 'white' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />60/-</h4>

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
                <img src={store23} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title" style={{ fontSize: '20px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Iced Expresso Coffee</h4>
                  <h4 className="card-price" style={{ textAlign: 'center', color: 'white' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />70/-</h4>

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
                <img src={store24} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title" style={{ fontSize: '20px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Cold coffee</h4>
                  <h4 className="card-price" style={{ textAlign: 'center', color: 'white' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />70/-</h4>

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
                <img src={store25} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title" style={{ fontSize: '20px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>creamy iced coffee</h4>
                  <h4 className="card-price" style={{ textAlign: 'center', color: 'white' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />80/-</h4>

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
                <img src={store26} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title" style={{ fontSize: '20px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>cappucinno cold iced coffee</h4>
                  <h4 className="card-price" style={{ textAlign: 'center', color: 'white' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />80/-</h4>

                </div>
              </div>
            </motion.div>



          </div>
        </motion.div>
      </div>
      {/* <!-- Cold Menu End --> */}
      <Footer />
    </div>
  )
}

export default ColdCoffee