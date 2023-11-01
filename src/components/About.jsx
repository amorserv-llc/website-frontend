/** @format */

import React from "react";
import Navbar from "./layout/TopNavbar";
import Footer from "./layout/Footer";
import about from "../Assets/about.png";
import value from "../Assets/value.png";
import mission from "../Assets/mission.png";
import vision from "../Assets/vision.png";
import siji from "../Assets/siji.png";
import amazon from "../Assets/amazon.png";
import visa from "../Assets/visa.png";
import temidayo from "../Assets/temidayo.png";
import otaabasi from "../Assets/otaabasi.png";
import valentine from "../Assets/valentine.png";
import digvijay from "../Assets/digvijay.png";
import olaide from "../Assets/olaide.png";
import chiamaka from "../Assets/chiamaka.png";
import tamara from "../Assets/tamara.png";
import cox from "../Assets/cox.png";
import citi from "../Assets/citi.png";
import gold from "../Assets/gold.png";
import flock from "../Assets/flock.png";
import google from "../Assets/google.png";

import star from "../Assets/star.png";
import forbes from "../Assets/forbes.png";
import traveller from "../Assets/traveller.png";
import cnn from "../Assets/cnn.png";
import ceo from "../Assets/ceo.png";
import samsung from "../Assets/samsung.png";
import HeroBg from "./organism/hero-bg";
import { Helmet } from "react-helmet";
export default function About() {
  return (
    <>
      <Helmet>
        <title>About - Amorserv Consulting</title>
        <meta name='description' content='Amorserv Consulting About-Us Page' />
      </Helmet>
      <div>
        <Navbar />
      </div>

      <HeroBg
        title={"Curious to Know Our Story?".toUpperCase()}
        desc='Indeed, our journey has been remarkable.'
        link='/contact-us'
        linkTitle='Learn More'
        img={about}
      />

      <section className='about-intro container'>
        <div className='intro'>
          <h2>Who Is Amorserv Consulting?</h2>

          <article>
            Established in 2016, Amorserv Consulting stands as the best digital
            marketing agency in Chicago. We infuse our expertise into every
            strategy, driving brands towards digital excellence. As the best
            digital marketing agency in Chicago, USA, we're committed to
            delivering unparalleled results. The name “AmorServ ” conveys a
            strong message of dedication, commitment, and passion for serving
            customers. The fact that the name literally means “We Love to Serve
            You” reinforces this message and sets a high standard for the
            company.
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

          <div className='vision'>
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

          <div className='vision'>
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
                <img src={ceo} alt='' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Otse Amorighoye</h6>
                <p>Founder - CEO</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={siji} alt='' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Siji Olojola</h6>
                <p>Marketing Manager</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={valentine} alt='' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Valentine Okoye</h6>
                <p>SEO Specialist</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={digvijay} alt='' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Digvijay Ahuja</h6>
                <p>Data Entry Specialist</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={chiamaka} alt='' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Chiamaka Atuchukwu</h6>
                <p>Social Media Specialist</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={tamara} alt='' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Tamaraebi Etifa</h6>
                <p>Content Writer and Research Analyst</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={olaide} alt='' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Olaide Opaleke</h6>
                <p>Content Writer</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={temidayo} alt='' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Temidayo Akinuli</h6>
                <p>Multimedia Designer</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={otaabasi} alt='' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Otoabasi Ekwere</h6>
                <p>Multimedia Designer</p>
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
