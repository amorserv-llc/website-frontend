/** @format */

import React from "react";
import homeimg from "../../Assets/homeimg.png";
import { Link } from "react-router-dom";
export default function () {
  return (
    <header className='header-bg'>
      <div className='header'>
        <div className='content'>
          <h1>
            We're your Partner for <br /> Digital Marketing <br /> Success
          </h1>
          <p>
            Empower Your Brand, and Drive Results with AmorServ Consulting
          </p>
          <Link to='/'>
            <button>Get Expert</button>
          </Link>
        </div>
        <div className='image'>
          <img src={homeimg} className='img-fluid' alt='header-image' />
        </div>
      </div>
    </header>
  );
}
