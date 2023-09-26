/** @format */

import React from "react";
import Navbar from "./layout/TopNavbar";
import Footer from "./layout/Footer";

import about from "../Assets/about.png";
import value from "../Assets/value.png";
import mission from "../Assets/mission.png";
import vision from "../Assets/vision.png";
import person4 from "../Assets/person4.png";
import amazon from "../Assets/amazon.png";
import visa from "../Assets/visa.png";
import person6 from "../Assets/person6.png";
import person3 from "../Assets/person3.png";
import person5 from "../Assets/person5.png";
import person2 from "../Assets/person2.png";
import person7 from "../Assets/person7.png";
import person1 from "../Assets/person1.png";
import richard from "../Assets/richard.png";
import cox from "../Assets/cox.png";
import citi from "../Assets/citi.png";
import gold from "../Assets/gold.png";
import flock from "../Assets/flock.png";
import google from "../Assets/google.png";
import star from "../Assets/star.png";
import forbes from "../Assets/forbes.png";
import traveller from "../Assets/traveller.png";
import cnn from "../Assets/cnn.png";
import samsung from "../Assets/samsung.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
    <div style={{ paddingBottom: "90px" }}>
        <Navbar />
      </div>


      <header className='header-bg'>
        <div className='header'>
          <div className='content'>
            <h1>Curious to Know Our Story?</h1>
            <p style={{ opacity: "0.45" }}>
              Indeed, our journey has been remarkable
            </p>
            <Link  to='/contact-us'>
            <button>Learn More</button>
            </Link>
           
          </div>
          <img src={about} alt='header-image' />
        </div>
      </header>

      <section className='about-intro container'>
        <div className='intro'>
          <h2>Who are we?</h2>

          <article>
            Established in 2016, Amorserv Consulting stands as the best digital
            marketing agency in Chicago. We infuse our expertise into every
            strategy, driving brands towards digital excellence. As the best
            digital marketing agency in Chicago, USA, we're committed to
            delivering unparalleled results.
            <br /> <br />
            The name “AmorServ ” conveys a strong message of dedication,
            commitment, and passion for serving customers. The fact that the
            name literally means “We Love to Serve You” reinforces this message
            and sets a high standard for the company.
          </article>
        </div>
      </section>

      <section className='container vmv'>
        <div className='ul'>
          <div className='vision'>
            <div className='image'>
              <img src={vision} alt='image vision' />
            </div>

            <h2>Our Vision</h2>

            <p>
              Our vision is to set new standards in the digital marketing
              industry with data-driven and ROI-yielding solutions.
            </p>
          </div>

          <div className='mission'>
            <div className='image'>
              <img src={mission} alt='image mission' />
            </div>

            <h2>Our Mission</h2>

            <p>
              Our mission is clearly refine the digital marketing landscape,
              empower business to thrive in the ever-evolving digital space, and
              place busineess in the sales forefront.
            </p>
          </div>

          <div className='value'>
            <div className='image'>
              <img src={value} alt='image value' />
            </div>

            <h2>Our Value</h2>

            <p>
              The focus on the TRIBE core values - Transparency, Result-Driven,
              Impact-Focused, Best People, and Excellence sets a high standard
              for us.
            </p>
          </div>
        </div>
      </section>

      <section className='team container'>
        <h2>Our Team</h2>

        <div className='members'>
          <div className='first-row'>
            <div className='member'>
              <div className='image'>
                <img src={person4} alt='' />
              </div>
              <div className='detail'>
                <h6>John Doe</h6>
                <p>President</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={person5} alt='' />
              </div>
              <div className='detail'>
                <h6>John Doe</h6>
                <p>President</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={person2} alt='' />
              </div>
              <div className='detail'>
                <h6>John Doe</h6>
                <p>President</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={person1} alt='' />
              </div>
              <div className='detail'>
                <h6>John Doe</h6>
                <p>President</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={richard} alt='' />
              </div>
              <div className='detail'>
                <h6>John Doe</h6>
                <p>President</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={person7} alt='' />
              </div>
              <div className='detail'>
                <h6>John Doe</h6>
                <p>President</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={person6} alt='' />
              </div>
              <div className='detail'>
                <h6>John Doe</h6>
                <p>President</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={person3} alt='' />
              </div>
              <div className='detail'>
                <h6>John Doe</h6>
                <p>President</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='partnership'>
        <h2>PARTNERSHIPS & ACCOLADES</h2>
        <div className='partner-images'>
          <ul className='container p-5'>
            <li>
              <img src={visa} alt='' />
            </li>
            <li>
              <img src={amazon} alt='' />
            </li>
            <li>
              <img src={cox} alt='' />
            </li>
            <li>
              <img src={citi} alt='' />
            </li>
            <li>
              <img src={samsung} alt='' />
            </li>
            <li>
              <img src={cnn} alt='' />
            </li>
            <li>
              <img src={traveller} alt='' />
            </li>
            <li>
              <img src={gold} alt='' />
            </li>
            <li>
              <img src={forbes} alt='' />
            </li>
            <li>
              <img src={star} alt='' />
            </li>
            <li>
              <img src={google} alt='' />
            </li>
            <li>
              <img src={flock} alt='' />
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
