/** @format */

import React from "react";
import logo2 from "../../Assets/logo2.png";

import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";

import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <footer className='bd-footer py-md-1'>
        <div className='container-lg py-4 py-md-5 px-4 px-md-3 text-body-secondary'>
          <div className='row'>
            <div className='col-lg-5 mb-3'>
              <a
                className='d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none navbar-brand'
                href='/index.html'
              >
                <img src={logo2} alt='logo' style={{  width:'120px' }} />
                <div
                  style={{
                    padding: "10px",
                    fontSize: "20px",
                    position: "absolute",
                    top: "70px",
                    left: "5px",
                  }}
                >
                  <span>
                    <img src={image1} alt='image1' style={{ width: "50px" }} />
                  </span>
                  <span>
                    <img src={image2} alt='image2' style={{ width: "50px" }} />
                  </span>
                  <span>
                    <img src={image3} alt='image3' style={{ width: "50px" }} />
                  </span>
                </div>
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
            <div className="tandc">
              <a href='#' style={{ marginRight: "10px" }}>
                Privacy & Policy
              </a>
              <Link to='/terms/condition' style={{ marginLeft: "10px" }}>
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
