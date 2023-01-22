import React, { useState } from 'react'
import './Main.css'
import Modal from './Modal';
import Weather from './Weather';
import News from './News'  
import sun from '../Utilities/sun.gif'
import tipsImg from '../Utilities/tips.gif'
import main1img from '../Utilities/main1.png'



function Main() { 

  const [openModal, setOpenModal] = useState(false);




  return (
   
    <div className='main'>

      <div className='main1' id='main1'>
        <div className='main1Box'>
          <div className='main1box-1'>
            <p className='mainPara'>Welcome to Urban resolve...<br></br>
            let's make our city more livable by reporting all the issues...</p>

            <button className='main1Button' onClick={ () => setOpenModal(true) }>Report the problem</button>
            {openModal && <Modal closeModal={setOpenModal} />}
          
          </div>
          <div className='main1Box-2'>
            <img className='mainImg' alt='mainimage' src={main1img}></img>
          </div>
        </div>
      </div>

      
      <div className='main2' id='main2'>

        <h1 className='main2Heading' style={{fontFamily:'monospace'}}> <b>Check the Weather of your city</b> </h1>
        <img className='sun' src={sun} alt='cycling girl'/>
        <Weather/>

      </div>


      <div className='main3' id='main3'>

      <h1 className='main3h1' style={{fontFamily:'monospace'}}> <b>Eco-News</b> </h1>
      
      <News/> 
      
      </div>


      <div className='main4' id='main4'>

      <h1 style={{fontFamily:'monospace', textAlign:'center'}}> <b>Insights into reducing carbon footprint</b> </h1>
      <div className='main4area'>
        <div className='main4box'>
          <a href="https://www.euro.who.int/__data/assets/pdf_file/0004/386923/health-carbon-reductions-eng.pdf" target="_blank" rel="noreferrer">achieving health benefits from carbon reductions</a>
          <a href="https://www.niti.gov.in/sites/default/files/2020-06/India_Green_Stimulus_Report_NITI_VF_June_29.pdf" target="_blank" rel="noreferrer">towards a clean energy economy</a>
          <a href="https://www.nrdc.org/sites/default/files/clearing-air-reduce-air-pollution-india-fs.pdf" target="_blank" rel="noreferrer">Actions to Reduce Air Pollution in India</a>
      </div>
      <img className='tipsimage' src={tipsImg} alt='girl reading book' />
      </div>
      </div>


    </div>
  )
}

export default Main;