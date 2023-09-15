/** @format */

import React from "react";
import portfolio from "../Assets/portfolio.png";

import port1 from "../Assets/port1.png";
import port2 from "../Assets/port2.png";
import port3 from "../Assets/port3.png";
import port4 from "../Assets/port4.png";
import port5 from "../Assets/port5.png";
import port6 from "../Assets/port6.png";
import Footer from "./layout/Footer";
import t1 from "../Assets/t1.png";
import t2 from "../Assets/t2.png";
import t3 from "../Assets/t3.png";
import Navbar from "./layout/Navbar";


export default function Portfolio() {
  return (
    <>
<Navbar />
      <section>
        <div className='header-bg'>
          <div className='header'>
            <div className='content'>
              <h1>Explore our portfolio for more insight!</h1>
              <p>
              Dive into our portfolio for a closer look at our dynamic projects. Witness how our strategies have transformed businesses. Our work is a testament to our expertise, innovation, and commitment to driving success.
              </p>
              <a href='#'>
                <button>Free Consultation</button>
              </a>
            </div>
            <div className='image'>
              <img src={portfolio} className='img-fluid' alt='header-image' />
            </div>
          </div>
        </div>
      </section>

      <section id='port-1' className='py-5'>
        <div className='container-lg my-4 portfolios'>
          <div className='row gx-md-5'>
            <div className='col-md-6 my-4'>
              <div className='card port-card'>
                <img className='card-img-top' src={port1} alt='...' />
                <div className='card-body py-3 px-4'>
                  <a href='' className='card-title'>
                  TechNova Solutions
                  </a>
                  <p className='lh-md pt-2'>
                  TechNova Solutions, a dynamic player in the IT sector, partnered with Amorserv Consulting to boost their online visibility and reach. Through meticulous keyword research, on-page optimization, and strategic content creation, we propelled TechNova's website to the forefront of search engine results.
                  </p>
                  <p className='lh-md'>
                  The result? A staggering 150% increase in organic traffic, with a marked uptick in qualified leads and conversions. Our tailored content not only educated their audience but also positioned TechNova as a thought leader in their field, solidifying their industry authority.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card port-card'>
                <img className='card-img-top' src={port2} alt='...' />
                <div className='card-body py-3 px-4'>
                  <a href='' className='card-title'>
                  FreshBite Restaurants
                  </a>
                  <p className='lh-md pt-2'>
                  FreshBite Restaurants, a bustling culinary establishment, entrusted Amorserv Consulting to enhance their social media presence and engage their hungry audience. Leveraging data-driven insights, we crafted compelling social media campaigns that resonated with their target demographic.
                  </p>
                  <p className='lh-md'>
                  By curating visually appealing content and implementing strategic posting schedules, we managed to double their follower count within a mere quarter. Moreover, our innovative campaigns spurred a 30% increase in restaurant reservations, translating online buzz into real-world foot traffic.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card port-card'>
                <img className='card-img-top' src={port3} alt='...' />
                <div className='card-body py-3 px-4'>
                  <a href='' className='card-title'>
                  Blossom Beauty
                  </a>
                  <p className='lh-md pt-2'>
                  Blossom Beauty, a wellness brand dedicated to self-care, collaborated with Amorserv Consulting to cultivate an authoritative digital voice. Our expert content creators designed a series of informative and engaging blog posts that not only educated Blossom Beauty's audience but also resonated with their values.
                  </p>
                  <p className='lh-md'>
                  This strategy led to a remarkable 40% surge in website traffic, solidifying their position as a reliable source of beauty insights. Through consistent, value-driven content, Blossom Beauty established itself as an industry thought leader, fostering customer trust and loyalty.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card port-card'>
                <img className='card-img-top' src={port4} alt='...' />
                <div className='card-body py-3 px-4'>
                  <a href='' className='card-title'>
                  Quantum Electronics
                  </a>
                  <p className='lh-md pt-2'>
                  Quantum Electronics, a leading player in electronics manufacturing, joined forces with Amorserv Consulting to amplify their digital reach through targeted PPC advertising. Employing a data-driven approach, we meticulously selected keywords aligned with Quantum's offerings, crafting compelling ad copies that resonated with their audience.
                  </p>
                  <p className='lh-md'>
                  The result was a remarkable 25% increase in online leads within the first quarter. Our strategic bid management and ad optimization not only drove rapid results but also positioned Quantum as a prominent industry player, expanding their customer base and boosting ROI.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card port-card'>
                <img className='card-img-top' src={port5} alt='...' />
                <div className='card-body py-3 px-4'>
                  <a href='' className='card-title'>
                  StyleSphere Boutique
                  </a>
                  <p className='lh-md pt-2'>
                  StyleSphere Boutique, an emerging fashion brand, harnessed the power of Amorserv Consulting's email marketing expertise to nurture customer relationships and drive sales growth. Through personalized email campaigns, we delivered tailored content that resonated with StyleSphere's fashion-conscious audience.
                  </p>
                  <p className='lh-md'>
                  This approach resulted in a remarkable 20% increase in sales, as subscribers eagerly embraced exclusive offers and curated content. By fostering a direct line of communication with their customers, StyleSphere not only boosted revenue but also solidified its brand loyalty, making each email a gateway to fashion inspiration.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card port-card'>
                <img className='card-img-top' src={port6} alt='...' />
                <div className='card-body py-3 px-4'>
                  <a href='' className='card-title'>
                  ST
                  </a>
                  <p className='lh-md pt-2'>
                  ST, a B2B IT service provider, collaborated with Amorserv Consulting to turbocharge their lead generation efforts. Employing a strategic mix of data analysis, targeted outreach, and value-driven content, we ignited their sales pipeline, resulting in a substantial 50% growth within a short span.
                  </p>
                  <p className='lh-md'>
                  By identifying and engaging qualified prospects, we fostered valuable client relationships, driving not only immediate conversions but also cultivating long-term partnerships. ST's growth story showcases our dedication to delivering tangible results and propelling businesses toward sustained success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-5">
          <p>
                <a href='#' className='btn mt-1 btn-real'>
                  Schedule a Call
                </a>
              </p>
          </div>
                </div>
      </section>

      {/* <section id="sec-7" style="margin-bottom: 10rem;"> */}
      <div id="sec-6" className='container-lg pt-5'>
        <div className='col-12 text-center'>
          <h3 className='mb-4 fw-bold'>
            Trusted by Thousands of <br />
            Happy Customer
          </h3>
          <p>
          Discover the voices of success through the words of our satisfied
            <br />
            clients.          </p>
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
        </ul>
        <i id='right' className='fa-solid fa-angle-right fa-rotate-180'></i>
      </div>
      {/* </section> */}

      <Footer />
    </>
  );
}
