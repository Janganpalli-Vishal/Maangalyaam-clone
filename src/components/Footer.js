import React from 'react'
import footerLogo from '../images/Logo.png'

export default function Footer() {
  return (
    <div className='container-fluid'>
      <div className='container'>
        <div className='footer row'>
          <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12">
            <img style={{width:"204px"}} className='mb-3' src={footerLogo} alt=''></img>
            <h6 className='mt-1 text'>Clarity gives you the blocks and components you need to create a truly professional website.</h6>
          </div >
          <div className='col-lg-6 col-md-6 d-flex justify-content-around'>
          <div className="">
            <h6 className='mt-2 mb-3'><b>COMPANY</b></h6>
            <p>About</p>
            <p>Features</p>
            <p>Contact Us</p>
            <p>Career</p>
          </div>
          <div className="">
            <h6 className='mt-2 mb-3'><b>HELP</b></h6>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12">
             <h6 className='mt-2 mb-3'><b>NEWSLETTER</b></h6>
             <div className='footer-input'>
             <input type='text' placeholder='Enter your email address'></input>
             <button type="button" class="footer-button">Subscribe Now</button>
             </div>
          </div>
        </div>
        <hr/>
       <div className='text-center py-4'>
       <h6>© Copyright 2022, All Rights Reserved by ClarityUI</h6>
       </div>
      </div>
    </div>
  )
}
