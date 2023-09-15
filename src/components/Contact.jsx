/** @format */

// import React from "react";
import contact from "../Assets/contact.png";
import Footer from "./layout/Footer";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLocationDot, faMobile, faPaperPlane, faSeedling } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./layout/TopNavbar";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";


export default function () {
  return (
    <>
      <Navbar />
      <div className='header-bg'>
        <div className='header'>
          <div className='content'>
            <h1>Contact Information</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lab
            </p>
            <a href='#'>
              <button>Schedule a Call</button>
            </a>
          </div>
          <div className='image'>
            <img src={contact} className='img-fluid' alt='header-image' />
          </div>
        </div>
      </div>

      <section className='py-5 bg-light'>
        <div className='container-lg my-2 d-flex contacts'>
          <div className='row'>
            <div className='rounded-4 card col-md-6'>
              <h4 className='py-3 text-center'>How can we help?</h4>
              <p className='text-center pb-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut lab
              </p>
              <div className='mb-3'>
                <label>Full Name</label>
                <input
                  type='name'
                  className='form-control'
                  placeholder='Enter Full Name'
                />
              </div>
              <div className='mb-3'>
                <label>Phone</label>
                <input
                  type='phone'
                  className='form-control'
                  placeholder='Enter Phone Number'
                />
              </div>
              <div className='mb-3'>
                <label>Email</label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='name@example.com'
                />
              </div>
              <div className='mb-3'>
                <label>Message</label>
                <textarea className='form-control' rows='6'></textarea>
              </div>
              <div className='text-end'>
                <a href='' className='text-decoration-none text-dark'>
                
                  <FontAwesomeIcon icon={faPaperPlane} className="fa-2xl my-4" />
                </a>
              </div>
            </div>

            <div className='col-md-6 mt-5 justify-content-between'>
              <div className='d-flex align-items-center px-4 py-4 mt-5 text-dark bg-white rounded shadow-sm'>
                <FontAwesomeIcon icon={faMobile} className="me-5 fa-2xl" />

                <div className='lh-1'>
                  <h1 className='h6 mb-3 text-dark lh-1'>Phone Number</h1>
                  <small>
                    <a
                      href='tel:+1 (866) 236-3090'
                      className='text-decoration-none text-dark'
                    >
                      +1 (866) 236-3090,{" "}
                    </a>
                  </small>
                  <small>
                    <a
                      href='tel:+1 (866) 236-3090'
                      className='text-decoration-none text-dark'
                    >
                      +1 (866) 236-3090
                    </a>
                  </small>
                </div>
              </div>
              <div className='d-flex align-items-center px-4 py-4 my-3 text-dark bg-white rounded shadow-sm'>
                <FontAwesomeIcon icon={faEnvelope} className="me-5 fa-2xl"/>

                <div className='lh-1'>
                  <h1 className='h6 mb-3 text-dark lh-1'>Email Address</h1>
                  <small>
                    <a
                      href='mailto:info@amorservconsulting.com'
                      className='text-decoration-none text-dark'
                    >
                      info@amorservconsulting.com
                    </a>
                  </small>
                </div>
              </div>
              <div className='d-flex align-items-center px-4 py-4 my-3 text-dark bg-white rounded shadow-sm'>
                <FontAwesomeIcon icon={faLocationDot} className="me-5 fa-2xl"/>
                <div className='lh-1'>
                  <h1 className='h6 mb-3 text-dark lh-1'>Location</h1>
                  <small>
                    <a href='' className='text-decoration-none text-dark'>
                      2340 West Touhy Avenue, Suite B, Chicago, Illinois 60645.
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='map pt-5'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11857.730915050573!2d-87.6892034!3d42.0124485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd1d25c85d765%3A0xc8937225a569d22d!2sAmorServ!5e0!3m2!1sen!2sng!4v1687767429390!5m2!1sen!2sng'
            width='100%'
            height='450'
            allowFullScreen=''
            referrerPolicy='no-referrer-when-downgrade'
            loading='lazy'
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
