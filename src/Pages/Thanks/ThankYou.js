import React from 'react'
import { Helmet } from 'react-helmet'
import thankyou from "../../Assets/thankyou.png"
import Navbar from '../../components/layouts/NavBar'
import Footer from '../../components/layouts/Footer'

export default function ThankYou() {
  return (
    <>
    <Helmet>
       <title>Thank-You - Amorserv Consulting</title>
       <meta name='description' content='Amorserv Consulting Thank-You Page' />
     </Helmet>
     <Navbar />
     <div className="thank-you-container">
       <img className="thankyou" src={thankyou} alt="Thank You" />
       <div className="text-container">
         <h1>THANK YOU</h1>
         <p>Thank you for reaching out to AmorServ <br /> Consulting. We have received your <br /> message and will get back to you as soon <br />as possible. </p>
       </div>
     </div>
     <Footer />
   </>
  )
}
