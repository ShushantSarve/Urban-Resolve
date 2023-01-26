import React from 'react'
import './Modal.css'

function Modal( {closeModal} ) {
  return (
    <div className='background'>
        <div className='modalContainer'>
            
            <div className='close'>
                <button className='closebutton' onClick={ () => closeModal(false) }>X</button>
            </div>
            
            <div className='body'>
                <h3 style={{fontFamily:'monospace'}}>Tell us about the issue</h3>
                <input type="text" placeholder='Enter the location' required />
                <textarea type="text" className='issuebox' placeholder='Could you provide us with an overview of the situation?' required />
            </div>

            <div className='footer'>
                <button type='submit' className='submitButton' onClick={ () => {alert('Thank you for bringing this to our attention. We are taking the necessary steps to rectify the situation.'); closeModal(false);}}>Submit</button>
            </div>
        
        </div>
    </div>
  )
}

export default Modal