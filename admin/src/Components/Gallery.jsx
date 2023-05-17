
import store1 from '../assest/LemonTea.png'
import store2 from '../assest/MasalaTea.png'
import store3 from '../assest/GreenTea.png'
import store4 from '../assest/ElaichiTea.png'
import store5 from '../assest/CloveTea.png'
import store6 from '../assest/GingerTea.png'
import store7 from '../assest/ChayWalaSpecialTea.png'
import store8 from '../assest/ChocolateTea.png'
import store9 from '../assest/BlackSaltTea.png'
import store10 from '../assest/RoseTea.png'
import store12 from '../assest/MalaiTea.png'
import store13 from '../assest/KesarElaichiTea.png'
import store14 from '../assest/JaggeryTea.png'
import store15 from '../assest/TulsiTea.png'
import store16 from '../assest/AyurvedicTea.png'
import store17 from '../assest/SugerFreeTea.png'
import store18 from '../assest/BrownSugerTea.png'
import store19 from '../assest/BlackTea.png'
import store20 from '../assest/BrownSugarBlackTea.png'
import store21 from '../assest/SugarFreeBlackTea.png'
import store22 from '../assest/ChoclateExpressoCoffee.png'
import store23 from '../assest/IcedExpressoCoffee.png'
import store24 from '../assest/ColdCoffee.png'
import store25 from '../assest/CremyIcedCoffee.png'
import store26 from '../assest/CappucinnoColdIcedCoffee.png'
import store27 from '../assest/HotFlatWhiteCoffee.png'
import store28 from '../assest/ChocolateCoffee.png'
import store29 from '../assest/ExpressoCoffee.png'
import store30 from '../assest/CappuccinoCoffee.png'
import store31 from '../assest/ExpressoCreamyCoffee.png'
import store32 from '../assest/BlackCoffee.png'
import Footer from './Footer';
import './Gallery.css';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';


const Gallery = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <div>
      {/* <!-- Page Header Start --> */}
      <div className='mainGallery' >
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">

          <div className="container text-center py-5">
            <h1 className="display-2 text-dark mb-4 //animated slideInDown">Our Gallery</h1>
            <nav aria-label="breadcrumb //animated slideInDown">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                <li className="breadcrumb-item text-dark" aria-current="page">Image Gallery</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      <div className="container" >
        {/* <h2>Image Gallery</h2> */}

        {/* <p>The .thumbnail className can be used to display an image gallery.</p>
  <p>The .caption className adds proper padding and a dark grey color to text inside thumbnails.</p>
  <p>Click on the images to enlarge them.</p>
  <div className="row">
    <div className="col-md-4">
      <div className="thumbnail">
        <a href={store1} target="_blank">
          <img src={store1} alt="Lights" style={{width:"100%"}}/>
          <div className="caption">
            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          </div>
        </a>
      </div>
    </div>
    <div className="col-md-4">
      <div className="thumbnail">
        <a href={store2} target="_blank">
          <img src={store2} alt="Nature" style={{width:"100%"}}/>
          <div className="caption">
            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          </div>
        </a>
      </div>
    </div>
    <div className="col-md-4">
      <div className="thumbnail">
        <a href={store3} target="_blank">
          <img src={store3} alt="Fjords" style={{width:"100%"}}/>
          <div className="caption">
            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          </div>
        </a>
      </div>
    </div>
    <div className="col-md-4">
      <div className="thumbnail">
        <a href={store3} target="_blank">
          <img src={store3} alt="Fjords" style={{width:"100%"}}/>
          <div className="caption">
            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          </div>
        </a>
      </div>
    </div>
    <div className="col-md-4">
      <div className="thumbnail">
        <a href={store3} target="_blank">
          <img src={store3} alt="Fjords" style={{width:"100%"}}/>
          <div className="caption">
            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          </div>
        </a>
      </div>
    </div>
  </div> */}
        {/* <motion.div
      //animate={{x:10,scale:1}}
      initial={{scale:0}} */}
        {/* >  */}
        {/* <!-- Gallery --> */}
        {/* <div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    
   <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}} >
     <img src={store1} className="card-img-top" alt="..." />
        <div className="card-body">
           <h5 className="card-title" style={{textAlign:'center'}}>CHAY WALA SPECIAL</h5>
       </div>
    </div>
    
  <div className="card"style={{margin:'10px',backgroundColor:'#7ED957'}} >
      <img src={store1} className="card-img-top" alt="..."/>
    <div className="card-body">
       <h5 className="card-title"style={{textAlign:'center'}}>GINGER TEA</h5>
    </div>
  </div>
</div>
   <div className="col-lg-4 mb-4 mb-lg-0">
      <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}}>
        <img src={store1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"style={{textAlign:'center'}}>MASALA TEA</h5>
         </div>
     </div>
  <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}}>
      <img src={store1} className="card-img-top" alt="..."/>
       <div className="card-body">
           <h5 className="card-title"style={{textAlign:'center'}}>ELAICHI TEA</h5>
      </div>
   </div>
</div>
  <div className="col-lg-4 mb-4 mb-lg-0">
     <div className="card"style={{margin:'10px',backgroundColor:'#7ED957'}}>
        <img src={store1} className="card-img-top" alt="..."/>
      <div className="card-body">
         <h5 className="card-title"style={{textAlign:'center'}}>CHOCOLATE TEA</h5>
      </div>
    </div>
     <div className="card" style={{margin:'10px',backgroundColor:'#7ED957'}}>
         <img src={store1} className="card-img-top" alt="..."/>
            <div className="card-body">
               <h5 className="card-title"style={{textAlign:'center'}}>BLACK SALT TEA</h5>
          </div>
      </div>
     </div> */}
        {/* </div></motion.div> */}
        {/* <!-- Gallery --> */}


        {/* <!-- bootstrap image gallery 1 --> */}
        <motion.div className='testcls'
          animate={{ x: 10, scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="container-fluid">
            <div className="jumbotron">
            </div>
            {/* Milk tea special menu start */}
            <div className="row">
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img id="image" src={store7} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>CHAYWALA SPECIAL TEA</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img id="image" src={store9} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>BLACK SALT TEA</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img id="image" src={store6} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>GINGER TEA</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
               
               whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img id="image" src={store8} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>CHOCOLATE TEA</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}

                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img id="image" src={store4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>ELAICHI TEA</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img id="image" src={store5} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>CLOVE TEA</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}

                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img id="image" src={store2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>MASALA TEA</h4>
                  </div>
                </div>
              </motion.div>


              {/* Milk tea special menu end */}


              {/* Delight of milk tea menu start */}
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img id="image" src={store10} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>ROSE TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img id="image" src={store13} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>KESAR ELAICHI TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img id="image" src={store14} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>JAGGERY TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img id="image" src={store12} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>MALAI TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img id="image" src={store15} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>TULSI TEA</h4>
                  </div>
                </div>
              </motion.div>


              {/* Delight of milk tea menu end */}



              {/* Herbal Tea with milk menu start */}

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img id="image" src={store16} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>AYURVEDIC TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img id="image" src={store17} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>SUGER FREE TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img id="image" src={store18} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>brown sugar tea</h4>
                  </div>
                </div>
              </motion.div>

              {/* Herbal Tea with milk menu end */}


              {/* Herbal tea without milk menu start */}


              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img src={store1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>LEMON TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img id="image" src={store19} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Black TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img src={store3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>green tea</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img src={store20} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Brown sugar black tea</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img src={store21} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>sugar free black tea</h4>
                  </div>
                </div>
              </motion.div>


              {/* Herbal tea without milk menu end */}

              {/* Hot Coffee Menu start */}

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img src={store27} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>hot flat white coffee</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img src={store28} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>chocolate coffee</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img src={store29} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>expresso coffee</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img src={store30} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>cappucinno coffee</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img src={store31} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Expresso creamy coffee</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img src={store32} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>black coffee</h4>
                  </div>
                </div>
              </motion.div>



              {/* Hot Coffee Menu End */}



              {/* Cold Coffee Menu Start */}

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}

                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img src={store22} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '20px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>chocolate expresso coffee</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }} >
                  <img src={store23} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Iced Expresso Coffee</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img src={store24} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Cold coffee</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img src={store25} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>creamy iced coffee</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ margin: '10px', backgroundColor: '#7ED957' }}>
                  <img src={store26} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>cappucinno cold iced coffee</h4>
                  </div>
                </div>
              </motion.div>


              {/*Cold Coffee Menu End */}

            </div>
          </div>
        </motion.div>
      </div>
      <Footer />

    </div >
  )
}

export default Gallery