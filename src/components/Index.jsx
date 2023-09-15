/** @format */

import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import nike from "../Assets/nike.png";
import cola from "../Assets/cola.png";
import amzon from "../Assets/amzon.png";
import cvs from "../Assets/cvs.png";
import cisco from "../Assets/cisco.png";
import pp from "../Assets/pp.png";
import mascard from "../Assets/mascard.png";
import f1 from "../Assets/f1.png";
import f2 from "../Assets/f2.png";
import f3 from "../Assets/f3.png";
import f4 from "../Assets/f4.png";
import g1 from "../Assets/g1.png";
import digi from "../Assets/digi.png";
import paid from "../Assets/paid.png";
import social from "../Assets/social.png";
import website from "../Assets/website.png";
import webop from "../Assets/webop.png";
import searchop from "../Assets/searchop.png";
import email from "../Assets/email.png";
import twoup from "../Assets/twoup.png";

import oneup from "../Assets/oneup.png";
import threeup from "../Assets/threeup.png";

import t1 from "../Assets/t1.png";
import t2 from "../Assets/t2.png";
import t3 from "../Assets/t3.png";
import Form from "./layout/ContactForm";
import Navbar from "./layout/Navbar";

export default function Index() {
  return (
    <>
      <Navbar />
      <Header />

      <section id='sec-2' className='py-4'>
        <div className='container-lg my-4'>
          <div className='row mb-2'>
            <div className='col-12 text-center'>
              <h3 className='mb-4'>Some of our Clients</h3>
            </div>
          </div>
        </div>

        <div className='client-wrapper'>
          <i id='left' className='fa-solid fa-angle-left fa-rotate-180'></i>
          <div className='client-carousel'>
            <img
              src={nike}
              width='80px'
              className='justify-content-center d-flex align-items-center mx-auto img-fluid'
              alt='Nike'
            />
            <img
              src={cola}
              width='80px'
              className='justify-content-center d-flex align-items-center mx-auto img-fluid'
              alt='Coca-Cola'
            />

            <img
              src={amzon}
              width='80px'
              className='justify-content-center d-flex align-items-center mx-auto img-fluid'
              alt='...'
            />
            <img
              src={cvs}
              width='80px'
              className='justify-content-center d-flex align-items-center mx-auto img-fluid'
              alt='...'
            />
            <img
              src={cisco}
              width='80px'
              className='justify-content-center d-flex align-items-center mx-auto img-fluid'
              alt='...'
            />
            <img
              src={pp}
              width='80px'
              className='justify-content-center d-flex align-items-center mx-auto img-fluid'
              alt='...'
            />
            <img
              src={mascard}
              width='80px'
              className='justify-content-center d-flex align-items-center mx-auto img-fluid'
              alt='...'
            />
          </div>
          <i id='right' className='fa-solid fa-angle-right fa-rotate-180'></i>
        </div>
      </section>

      <section id='sec-3' className='py-4'>
        <div className='container-lg my-3'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'>Feeling overwhelmed by Digital Marketing?</h3>
          </div>
          <div className='row'>
            <div className='col-md-3 mb-5'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={f1} className='img-fluid' />
              </div>
              <p className='fw-md mx-3 text-center'>
                Struggling to navigate the complex digital world?
              </p>
            </div>
            <div className='col-md-3 mb-5'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={f2} className='img-fluid' />
              </div>
              <p className='fw-md mx-3 text-center'>
                Feeling frustrated with low website traffic, weak search
                rankings, and lackluster social media presence?
              </p>
            </div>
            <div className='col-md-3 mb-5'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={f3} className='img-fluid' />
              </div>
              <p className='fw-md mx-3 text-center'>
                Believing that your business deserves success but feeling held
                back by digital marketing challenges?
              </p>
            </div>
            <div className='col-md-3 mb-5'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={f4} className='img-fluid' />
              </div>
              <p className='fw-md mx-3 text-center'>
                Worried about missing out on opportunities to connect with your
                audience and grow your business?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-4' className='py-5'>
        <div className='container-lg my-4'>
          <div className='row'>
            <div className='col-lg-6 align-items-center d-flex justify-content-center'>
              <img src={g1} className='img-fluid' alt='...' />
            </div>
            <div className='col-lg-6 mt-3 align-items-center col-lg-6 col-md-12 text-center'>
              <p className='my-4'>
                We understand your struggles and are here to help. Let us be
                your guide and empower your brand with personalized,
                results-driven digital marketing strategies.
              </p>
              <p className='my-4'>
                As your trusted digital marketing guide, we offer personalized
                strategies that are results-driven, saving you time and effort.
              </p>
              <div className='text-center mt-3'>
                <a href='#' className='btn mt-4 btn-real'>
                  Get Free Proposal
                </a>
                <p className='my-4'>Take control of your online success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-5' className='py-5'>
        <div className='container-lg'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'>
              Discover our range of services designed to boost your online
              presence
            </h3>
          </div>
          <div className='row justify-content-center my-5'>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={digi} width='25px' alt='...' />
              <a href='' className='px-2 serv-link'>
                Digital Marketing
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={paid} width='25px' alt='...' />
              <a href='' className='px-2 serv-link'>
                Paid Media
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src='images/brand.svg' width='25px' alt='...' />
              <a href='' className='px-2 serv-link'>
                Branding
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={social} width='25px' alt='...' />
              <a href='' className='px-2 serv-link'>
                Social Media
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={website} width='25px' alt='...' />
              <a href='' className='px-2 serv-link'>
                Website Development
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={webop} width='25px' alt='...' />
              <a href='' className='px-2 serv-link'>
                Website Optimization
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={searchop} width='25px' alt='...' />
              <a href='' className='px-2 serv-link'>
                Search Engine Optimazation
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={email} width='25px' alt='...' />
              <a href='' className='px-2 serv-link'>
                Email Marketing
              </a>
            </button>
            <div className='text-center'>
              <p className='text-center mt-4'>Get free marketing guide</p>
              <a href='#' className='btn mt-4 btn-real'>
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='container-lg my-4'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'>Our Simplified 3-Step Process</h3>
          </div>
          <h5 className='my-4 pt-5 text-center'>
            For Maximizing Your Digital Marketing Success
          </h5>

          <div className='frame container'>
            <div className='group'>
              <div className='div'>
                <p className='plan-we-understand'>
                  <span className='text-wrapper'>
                    Plan
                    <br />
                  </span>
                  <span className='span'>
                    We understand your <br />
                    goals and audience.
                  </span>
                </p>
                <div className='img-wrapper'>
                  <img
                    className='architecture-plan'
                    alt='Architecture plan'
                    src={oneup}
                  />
                </div>
              </div>
              <div className='text-wrapper-2'>1</div>
            </div>
            <div className='group-2'>
              <div className='text-wrapper-2'>2</div>
              <div className='group-3'>
                <p className='p'>
                  <span className='text-wrapper-3'>
                    Create
                    <br />
                  </span>
                  <span className='text-wrapper-4'>
                    We develop tailored <br />
                    marketing campaigns.
                  </span>
                </p>
                <div className='img-wrapper'>
                  <img
                    className='edit-note-icon'
                    alt='Edit note icon'
                    src={twoup}
                  />
                </div>
              </div>
            </div>
            <div className='group-4'>
              <div className='text-wrapper-2'>3</div>
              <div className='group-5'>
                <p className='p'>
                  <span className='text-wrapper-5'>
                    Grow
                    <br />
                  </span>
                  <span className='text-wrapper-4'>
                    We track progress and <br />
                    optimize for success.
                  </span>
                </p>
                <div className='img-wrapper'>
                  <img
                    className='grow-money-icon'
                    alt='Grow money icon'
                    src={threeup}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Get free propsosal btn */}

          <div className='text-center'>
            <p className='text-center mt-4'>
              it's Time to take controle of your online presence
            </p>
            <a href='#' className='btn mt-4 btn-real'>
              Get Free Proposal
            </a>
          </div>
        </div>
      </section>

      <section id='sec-6'>
        <div className='container-lg pt-5 mb-5'>
          <div className='col-12 text-center'>
            <h3 className='mb-4 fw-bold'>
              Trusted by Thousands of <br />
              Happy Customer
            </h3>
            <p>
              Proudly impacting industries with the best digital strategies.
              Hear <br />
              from our valued clients, not just us.
            </p>
          </div>
        </div>
        <div className='wrapper mt-5'>
          <i id='left' className='fa-solid fa-angle-left fa-rotate-180'></i>
          <ul className='carousel'>
            <li className='card'>
              <div className='info'>
                <div className='name-img'>
                  <div className='image'>
                    <img src={t1} alt='' draggable='false' />
                  </div>
                  <h4>Viezh Robert</h4>
                </div>
                <p className='rate'>4.5</p>
              </div>
              <p className='detail'>
                Amorserv's dynamic digital strategies triggered an unprecedented
                surge in our sales revenue. Their insightful approach reshaped
                our marketing landscape
              </p>
            </li>
            <li className='card'>
              <div className='info'>
                <div className='name-img'>
                  <div className='image'>
                    <img src={t2} alt='' draggable='false' />
                  </div>
                  <h4>Viezh Robert</h4>
                </div>
                <p className='rate'>4.5</p>
              </div>
              <p className='detail'>
                With Amorserv's digital tactics, our website witnessed a
                transformation. Visitor traffic soared twofold, with engagement
                metrics hitting all-time highs
              </p>
            </li>
            <li className='card'>
              <div className='info'>
                <div className='name-img'>
                  <div className='image'>
                    <img src={t3} alt='' draggable='false' />
                  </div>
                  <h4>Viezh Robert</h4>
                </div>
                <p className='rate'>4.5</p>
              </div>
              <p className='detail'>
                Amorserv's involvement marked a turning point for our online
                brand image. Their innovative digital strategies breathed new
                life into our online platforms.
              </p>
            </li>
            <li className='card'>
              <div className='info'>
                <div className='name-img'>
                  <div className='image'>
                    <img src={t1} alt='' draggable='false' />
                  </div>
                  <h4>Viezh Robert</h4>
                </div>
                <p className='rate'>4.5</p>
              </div>
              <p className='detail'>
                Lorem ipsum dolor sit amet consectetur. Accumsan amet malesuada
                potenti tortor nulla. Eget nunc ultricies purus mauris.
              </p>
            </li>
            <li className='card'>
              <div className='info'>
                <div className='name-img'>
                  <div className='image'>
                    <img src={t2} alt='' draggable='false' />
                  </div>
                  <h4>Viezh Robert</h4>
                </div>
                <p className='rate'>4.5</p>
              </div>
              <p className='detail'>
                Lorem ipsum dolor sit amet consectetur. Accumsan amet malesuada
                potenti tortor nulla. Eget nunc ultricies purus mauris.
              </p>
            </li>
            <li className='card'>
              <div className='info'>
                <div className='name-img'>
                  <div className='image'>
                    <img src={t3} alt='' draggable='false' />
                  </div>
                  <h4>Viezh Robert</h4>
                </div>
                <p className='rate'>4.5</p>
              </div>
              <p className='detail'>
                Lorem ipsum dolor sit amet consectetur. Accumsan amet malesuada
                potenti tortor nulla. Eget nunc ultricies purus mauris.
              </p>
            </li>
            <li className='card'>
              <div className='info'>
                <div className='name-img'>
                  <div className='image'>
                    <img src={t1} alt='' draggable='false' />
                  </div>
                  <h4>Viezh Robert</h4>
                </div>
                <p className='rate'>4.5</p>
              </div>
              <p className='detail'>
                Lorem ipsum dolor sit amet consectetur. Accumsan amet malesuada
                potenti tortor nulla. Eget nunc ultricies purus mauris.
              </p>
            </li>
            <li className='card'>
              <div className='info'>
                <div className='name-img'>
                  <div className='image'>
                    <img src={t2} alt='' draggable='false' />
                  </div>
                  <h4>Viezh Robert</h4>
                </div>
                <p className='rate'>4.5</p>
              </div>
              <p className='detail'>
                Lorem ipsum dolor sit amet consectetur. Accumsan amet malesuada
                potenti tortor nulla. Eget nunc ultricies purus mauris.
              </p>
            </li>
            <li className='card'>
              <div className='info'>
                <div className='name-img'>
                  <div className='image'>
                    <img src={t3} alt='' draggable='false' />
                  </div>
                  <h4>Viezh Robert</h4>
                </div>
                <p className='rate'>4.5</p>
              </div>
              <p className='detail'>
                Lorem ipsum dolor sit amet consectetur. Accumsan amet malesuada
                potenti tortor nulla. Eget nunc ultricies purus mauris.
              </p>
            </li>
          </ul>
          <i id='right' className='fa-solid fa-angle-right fa-rotate-180'></i>
        </div>
      </section>
      <Form />
      <Footer />
    </>
  );
}
