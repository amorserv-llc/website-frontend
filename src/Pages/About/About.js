/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import HeroBg from "../../components/organism/hero-bg";
import about from "../../Assets/about.png";

import vision from "../../Assets/vision.png";
import mission from "../../Assets/mission.png";
import value from "../../Assets/value.png";
import siji from "../../Assets/siji.png";
import amazon from "../../Assets/amazon.png";
import visa from "../../Assets/visa.png";
import temidayo from "../../Assets/temidayo.png";
import otaabasi from "../../Assets/otaabasi.png";
import valentine from "../../Assets/valentine.png";
import digvijay from "../../Assets/digvijay.png";
import olaide from "../../Assets/olaide.png";
import chiamaka from "../../Assets/chiamaka.png";
import tamara from "../../Assets/tamara.png";
import cox from "../../Assets/cox.png";
import citi from "../../Assets/citi.png";
import gold from "../../Assets/gold.png";
import flock from "../../Assets/flock.png";
import google from "../../Assets/google.png";
import star from "../../Assets/star.png";
import forbes from "../../Assets/forbes.png";
import traveller from "../../Assets/traveller.png";
import cnn from "../../Assets/cnn.png";
import ceo from "../../Assets/ceo.png";
import samsung from "../../Assets/samsung.png";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - Amorserv Consulting</title>
        <meta name='description' content='Amorserv Consulting About-Us Page' />
      </Helmet>
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
              <img src={vision} alt='vision' />
            </div>

            <h2>Our Vision</h2>

            <p>
              Our vision is to set new standards in the digital marketing
              industry with data-driven and ROI-yielding solutions.
            </p>
          </div>

          <div className='vision'>
            <div className='image'>
              <img src={mission} alt='mission' />
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
              <img src={value} alt='value' />
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
                <img src={ceo} alt='ceo' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Otse Amorighoye</h6>
                <p>Founder - CEO</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={siji} alt='siji' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Siji Olojola</h6>
                <p>Marketing Manager</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={valentine} alt='valentine' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Valentine Okoye</h6>
                <p>SEO Specialist</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={digvijay} alt='dig' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Digvijay Ahuja</h6>
                <p>Data Entry Specialist</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={chiamaka} alt='chiamaka' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Chiamaka Atuchukwu</h6>
                <p>Social Media Specialist</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={tamara} alt='tamara' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Tamaraebi Etifa</h6>
                <p>Content Writer and Research Analyst</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={olaide} alt='olaide' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Olaide Opaleke</h6>
                <p>Content Writer</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={temidayo} alt='temidayo' />
              </div>
              <div className='detail'>
                <h6 className='pb-3'>Temidayo Akinuli</h6>
                <p>Multimedia Designer</p>
              </div>
            </div>

            <div className='member'>
              <div className='image'>
                <img src={otaabasi} alt='otaabasi' />
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
              <img src={visa} alt='visi' />
            </li>
            <li>
              <img src={amazon} alt='amazon' />
            </li>
            <li>
              <img src={cox} alt='cox' />
            </li>
            <li>
              <img src={citi} alt='citi' />
            </li>
            <li>
              <img src={samsung} alt='smasung' />
            </li>
            <li>
              <img src={cnn} alt='cnn' />
            </li>
            <li>
              <img src={traveller} alt='traveller' />
            </li>
            <li>
              <img src={gold} alt='gold' />
            </li>
            <li>
              <img src={forbes} alt='forbe' />
            </li>
            <li>
              <img src={star} alt='star' />
            </li>
            <li>
              <img src={google} alt='google' />
            </li>
            <li>
              <img src={flock} alt='flock' />
            </li>
          </ul>
        </div>
      </section>

    </>
  );
}
