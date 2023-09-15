/** @format */

import React from "react";
import logo2 from "../../Assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <footer className='bd-footer py-md-1'>
        <div className='container-lg py-4 py-md-5 px-4 px-md-3 text-body-secondary'>
          <div className='row'>
            {/* <div className='col-lg-5 mb-3'>
              <a
                className='d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none navbar-brand'
                href='/index.html'
              >
                <img src={logo2} alt='logo' />
                
              
              </a>
            </div> */}
            <div className='col-lg-5 mb-3'>
              <a
                className='d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none navbar-brand'
                href='/index.html'
              >
                <img src={logo2} alt='logo' />
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    padding: "10px",
                    fontSize: "20px",
                    position: "absolute",
                    top: "80px",
                    left: "100px",
                  }}
                />

                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{
                    padding: "10px",
                    fontSize: "20px",
                    position: "absolute",
                    top: "80px",
                    left: "150px",
                  }}
                />
                  <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    padding: "10px",
                    fontSize: "20px",
                    position: "absolute",
                    top: "80px",
                    left: "200px",
                  }}                 
                />
              </a>
            </div>

            <div className='col-6 col-lg-2 offset-lg-1 mb-3'>
              <h5>About</h5>
              <ul className='list-unstyled'>
                <li className='mb-2'>
                  <a href='#'>How it works</a>
                </li>
                <li className='mb-2'>
                  <a href='#'>Featured</a>
                </li>
                <li className='mb-2'>
                  <a href='#'>Partnership</a>
                </li>
                <li className='mb-2'>
                  <a href='#'>Business Relations</a>
                </li>
              </ul>
            </div>
            <div className='col-6 col-lg-2 mb-3'>
              <h5>Community</h5>
              <ul className='list-unstyled'>
                <li className='mb-2'>
                  <a href=''>Event</a>
                </li>
                <li className='mb-2'>
                  <a href=''>Blog</a>
                </li>
                <li className='mb-2'>
                  <a href=''>Podcast</a>
                </li>
                <li className='mb-2'>
                  <a href=''>Invite a Friend</a>
                </li>
              </ul>
            </div>
            <div className='col-6 col-lg-2 mb-3'>
              <h5>Socials</h5>
              <ul className='list-unstyled'>
                <li className='mb-2'>
                  <a href='#'>Discord</a>
                </li>
                <li className='mb-2'>
                  <a href='#'>Instagram</a>
                </li>
                <li className='mb-2'>
                  <a href='#'>Twitter</a>
                </li>
                <li className='mb-2'>
                  <a href='#'>Facebook</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='d-flex justify-content-between py-4 border-top'>
            <p>© 2023 Amorserv Consulting. All rights reserved.</p>
            <div>
              <a href='#'>Privacy & Policy</a>
              <Link to='/terms%condition' >Terms & Condition</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
