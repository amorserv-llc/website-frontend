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
              <Link
                to='/'
                className='d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none navbar-brand'
              >
                <img src={logo2} alt='logo' style={{ width: "120px" }} />
              </Link>

              <div
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  position: "absolute",
                  top: "70px",
                  left: "5px",
                }}
              >
                <Link to='/'>
                  <span>
                    <img src={image1} alt='image1' style={{ width: "50px" }} />
                  </span>
                </Link>

                <Link to='/'>
                  <span>
                    <img src={image2} alt='image2' style={{ width: "50px" }} />
                  </span>
                </Link>

                <Link to='/'>
                  <span>
                    <img src={image3} alt='image3' style={{ width: "50px" }} />
                  </span>
                </Link>
              </div>
            </div>

            <div className='col-6 col-lg-2 offset-lg-1 mb-3'>
              <h5>About</h5>
              <ul className='list-unstyled'>
                <li className='mb-2'>
                  <Link to='/'>How it works</Link>
                </li>
                <li className='mb-2'>
                  <Link to='/'>Featured</Link>
                </li>
                <li className='mb-2'>
                  <Link to='/'>Partnership</Link>
                </li>
                <li className='mb-2'>
                  <Link to='/'>Business Relations</Link>
                </li>
              </ul>
            </div>
            <div className='col-6 col-lg-2 mb-3'>
              <h5>Community</h5>
              <ul className='list-unstyled'>
                <li className='mb-2'>
                  <Link to='/'>Event</Link>
                </li>
                <li className='mb-2'>
                  <Link to='/'>Blog</Link>
                </li>
                <li className='mb-2'>
                  <Link to='/'>Podcast</Link>
                </li>
                <li className='mb-2'>
                  <Link to='/'>Invite a Friend</Link>
                </li>
              </ul>
            </div>
            <div className='col-6 col-lg-2 mb-3'>
              <h5>Socials</h5>
              <ul className='list-unstyled'>
                <li className='mb-2'>
                  <Link to='/'>Discord</Link>
                </li>
                <li className='mb-2'>
                  <Link to='/'>Instagram</Link>
                </li>
                <li className='mb-2'>
                  <li className='mb-2'>
                    <Link to='/'>Twitter</Link>
                  </li>
                </li>
                <li className='mb-2'>
                  <Link to='/'>Facebook</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='d-flex justify-content-between py-4 border-top'>
            <p>© 2023 Amorserv Consulting. All rights reserved.</p>
            <div className='tandc'>
              <a href='' style={{ marginRight: "10px" }}>
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
