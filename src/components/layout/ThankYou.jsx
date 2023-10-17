import React from 'react';
import Navbar from './TopNavbar';
import Footer from './Footer';
import thankyou from '../../Assets/thankyou.png';

export default function ThankYou() {
  return (
    <>
      <Navbar />
      <div className="thank-you-container">
        <img className="thankyou" src={thankyou} alt="Thank You Image" />
        <div className="text-container">
          <h1>THANK YOU</h1>
          <p>Thank you for reaching out to AmorServ <br /> Consulting. We have received your <br /> message and will get back to you as soon <br />as possible. </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
