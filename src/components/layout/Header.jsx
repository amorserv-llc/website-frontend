/** @format */

import React from "react";
import homeimg from "../../Assets/homeimg.png";
import { Link } from "react-router-dom";
export default function () {

  const handleCallButtonClick = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className='header-bg' style={{ height: '93vh' }}>
      <div className='header'>
        <div className='content'>
          <h1>
            We're your Partner for <br /> Digital Marketing <br /> Success
          </h1>
          <p style={{ opacity: '0.45' }}>
          Empower Your Brand, and Drive Results with <br />AmorServ Consulting
          </p>
          <Link onClick={handleCallButtonClick}>
            <button>Start Today</button>
          </Link>
        </div>
        <div className='image'>
          <img src={homeimg} className='img-fluid' alt='header-image' />
        </div>
      </div>
    </header>
  );
}
