/** @format */

import React, { useState } from "react";
import Navbar from "../layout/TopNavbar";
import Footer from "../layout/Footer";
import sem0 from "../../Assets/sem0.png";
import updates from "../../Assets/updates.png";

import ff12 from "../../Assets/ff12.png";
import ff13 from "../../Assets/ff13.png";
import ff14 from "../../Assets/ff14.png";

import why3 from "../../Assets/why3.png";
import why2 from "../../Assets/why2.png";
import why1 from "../../Assets/why1.png";

import ff1 from "../../Assets/ff1.png";
import ff2 from "../../Assets/ff2.png";
import ff3 from "../../Assets/ff3.png";
import ff4 from "../../Assets/ff4.png";
import ff5 from "../../Assets/ff5.png";
import ff6 from "../../Assets/ff6.png";

import se1 from "../../Assets/se1.png";
import se2 from "../../Assets/se2.png";
import se3 from "../../Assets/se3.png";
import se4 from "../../Assets/se4.png";
import se5 from "../../Assets/se5.png";
import se6 from "../../Assets/se6.png";
import ContactForm from "../layout/ContactForm";
import { Link } from "react-router-dom";
export default function Sem() {
  const [activeButton, setActiveButton] = useState(null);
  const primaryBackgroundColor = "#D3DCE7";

  const buttonClass = (buttonId) => {
    return `btn primaryBackgroundColor ${
      activeButton === buttonId ? "active-button" : ""
    }`;
  };
  // Function to handle button click and set the active button
  const handleButtonClick = (buttonId) => {
    setActiveButton(activeButton === buttonId ? null : buttonId);
  };

  // Determine the arrow direction based on the activeButton state
  const getArrowDirection = (buttonId) => {
    return activeButton === buttonId ? "up" : "down";
  };

  const handleCallButtonClick = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div style={{ paddingBottom: "90px" }}>
        <Navbar />
      </div>

      <header className='header-bg'>
        <div className='header'>
          <div className='content'>
            <h1>
              How Search Engine <br /> Marketing promotes <br />
              your brand online?
            </h1>

            <p style={{ width: '100%', }}>
            Search engine marketing propels your brand's online  <br />visibility by strategically engaging your target audience <br /> and driving valuable traffic.
            </p>
            <Link onClick={handleCallButtonClick}>
              <button>Schedule a Call</button>
            </Link>
          </div>
          <div className='image'>
            <img src={sem0} className='img-fluid' alt='header-image' />
          </div>
        </div>
      </header>

      <div style={{ color: "#266", textAlign: "center" }}>
        <h1 className='pt-5'> What is Search Engine Marketing?</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Understanding the Essence of Search Engine Marketing (SEM)
        </p>
      </div>

      <section className='header-bg container' style={{ backgroundColor: "white" }}>
        <div className='header'>
          <div className='content'>
            <p
              style={{ fontSize: "1.2rem", lineHeight: "2.5rem", opacity: "1", marginTop:'4rem' }}
            >
              Search Engine Marketing (SEM) is a dynamic digital marketing
              strategy that leverages paid advertising to maximize online
              visibility. By bidding on relevant keywords, businesses position
              themselves prominently on search engine results pages (SERPs),
              gaining immediate exposure to potential customers actively seeking
              products or services. SEM encompasses Pay-Per-Click (PPC)
              campaigns, where advertisers pay only when users click their ads,
              driving targeted traffic to their websites. With meticulous
              keyword research, ad optimization, and performance analysis, SEM
              empowers businesses to achieve rapid brand recognition, amplify
              website traffic, and attain quantifiable ROI in today's
              competitive digital landscape.
            </p>
          </div>

          <div className=''>
            <img src={updates} className='img-fluid' alt='header-image' />
          </div>
        </div>
      </section>

      <section
        className='service-feat p-5'
        style={{ backgroundColor: "#eff3fd" }}
      >
        <h2 className='pb-4'>How does Search Engine Marketing work?</h2>
        <p>
          Search Engine Marketing is one of the best digital marketing strategy
          you can leverage for your business growth.
        </p>
        <div className='contents'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff12} alt='image' />
                    <h3>Drive Conversions</h3>
                    <p>
                    Use PPC advertising to reach <br />potential customers. Bid on relevant <br /> keywords, your ads appear in <br /> searches
                    </p>
                  </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff13} alt='image' />
                    <h3>Optimization</h3>
                    <p>
                    Leverage strategic keyword research <br /> for online optimization. Select <br /> audience-searched keywords for <br />higher search relevance.
                    </p>
                  </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff14} alt='image' />
                    <h3>Tracking</h3>
                    <p>
                    Track and analyze conversions for <br /> SEM impact measurement. Identify <br /> ads driving purchases, sign-ups, or <br /> interactions
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3 style={{ fontSize: "3rem" }}>
              Why you need Search Engine <br /> Marketing?
            </h3>

            <p>
              SEM empowers your business to appear prominently on search engine
              results pages (SERPs), <br /> precisely when potential customers
              are actively searching for what you offer.
            </p>
            <div className='row pt-5 '>
              <div className='col-md-4 pt-5'>
                <img src={ff1} alt='image' />
                <h3>Instant Visibility</h3>
                <p>
                  Get immediate exposure with top <br /> search ads. Be visible
                  when potential <br />
                  customers actively search, a click <br /> away from
                  conversions
                </p>
              </div>

              <div className='col-md-4 pt-5'>
                <img src={ff2} alt='image' />
                <h3>Cost Control</h3>
                <p>
                  SEM uses a Pay-Per-Click model, <br /> cost-effective with
                  payment only <br />
                  when users click on your ads.
                </p>
              </div>

              <div className='col-md-4 pt-5'>
                <img src={ff3} alt='image' />
                <h3>Measurable ROI</h3>
                <p>
                  Track every click and conversion for <br />
                  accurate ROI calculation. <br />
                  Transparently ensure your budget <br /> generates returns.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff4} alt='image' />
                <h3>Targeted reach</h3>
                <p>
                  SEM targets interested users, ensuring <br />
                  your investment reaches a relevant <br /> and receptive
                  audience
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff5} alt='image' />
                <h3>Competitive Edge</h3>
                <p>
                  Outshine competitors by leading <br />
                  search results. Be the first choice <br />
                  customers see, enhancing credibility <br /> and authority.
                </p>
              </div>

              <div className='col-md-4 pt-5'>
                <img src={ff6} alt='image' />
                <h3>Data-Driven Decisions</h3>
                <p>
                  Uncover insights with analytics. <br />
                  Identify top-performing keywords,
                  <br /> ads, and strategies for maximum <br /> impact."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-5' className='py-5'>
        <div className='container-lg'>
          <div className='col-12 text-center'>
            <h3
              className='mb-4'
              style={{ fontSize: "3rem", lineHeight: "3.5rem" }}
            >
              Our Comprehensive <br /> SEM Services
            </h3>
            <p>
              Amplify Your Digital Footprint with Our best SEM Services. Drive
              targeted traffic, boost <br /> engagement, and achieve measurable
              results through our expert Pay-Per-Click strategies
            </p>
          </div>
          <div className='row justify-content-center my-5'>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img
                src={se1}
                width='25px'
                alt='...'
              />
              <a href='' className='px-2 serv-link'>
                Pay-Per-Click (PPC){" "}
              </a>
            </button>

            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={se2} width='25px' alt='...' />
              <a href='' className='px-2 serv-link'>
                Landing Page Optimization
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={se3} width='25px' alt='...' />
              <a href='' className='px-2 serv-link'>
                Keyword Research and Optimization
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img
                src={se4}
                width='25px'
                alt='...'
              />
              <a href='' className='px-2 serv-link'>
                Ad Copywriting
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img
                src={se5}
                width='25px'
                alt='...'
              />
              <a href='' className='px-2 serv-link'>
                Ad Campaign Creation{" "}
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img
                src={se6}
                width='25px'
                alt='...'
              />
              <a href='' className='px-2 serv-link'>
                Performance Analytics
              </a>
            </button>
          </div>
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3 style={{ fontSize: "3rem", lineHeight: "3.5rem" }}>
              Why Choose Amorserv SEM <br />
              Services?
            </h3>

            <p>
              With our comprehensive Search Engine Marketing service, we are
              your best digital <br /> marketing partner for success.
            </p>
            <div className='row pt-5'>
              <div className='col-md-4'>
                <img src={why1} alt='image' />
                <h3 className='pt-4'>Proven Performance</h3>
                <p className='pt-3'>
                  Our SEM services deliver tangible <br /> results, driving
                  increased website <br /> traffic, engagement, and conversions{" "}
                  <br /> across diverse industries.
                </p>
              </div>

              <div className='col-md-4'>
                <img src={why2} alt='image' />
                <h3 className='pt-4'>Tailored Strategies</h3>
                <p className='pt-3'>
                  We recognize unique businesses. Our <br /> SEM experts create
                  custom strategies <br /> with keywords and ad campaigns <br />{" "}
                  tailored to your audience and goals.
                </p>
              </div>

              <div className='col-md-4'>
                <img src={why3} alt='image' />
                <h3 className='pt-4'>Expert Insight</h3>
                <p className='pt-3'>
                  With certified SEM professionals, we <br /> bring extensive
                  expertise from <br /> campaign creation to optimization,{" "}
                  <br />
                  driving exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='p-5' id='sec-6' style={{ background: "#eff3fd" }}>
        <div className='container ' id='contact-form-section'>
          <div className='content text-center'>
            <div className='col-12 text-center'>
              <h3 className='mb-4'>Unlock Your Digital Potential Today!</h3>
            </div>
            <p>
            Let our SEM services experts assist you to unleash the power of tailored <br /> digital solutions. Let's connect and bring your vision to life.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='container-lg my-4'>
          <div className='col-12 text-center'>
            <h3 className='mb-4 pb-5' style={{ fontSize: '3rem' }}>Search Engine Optimization FAQs</h3>
          </div>

          <div className='container'>
            <p>
              <button
                className={buttonClass(1)}
                type='button'
                data-toggle='collapse'
                data-target='#collapseExample1'
                aria-expanded={activeButton === 1 ? "true" : "false"}
                aria-controls='collapseExample1'
                style={{
                  width: "100%",
                  height: "8rem",
                  flexShrink: "0",
                  backgroundColor: primaryBackgroundColor,
                }}
                onClick={() => handleButtonClick(1)}
              >
                How does SEM differ from traditional advertising?{" "}
                <span style={{ float: "right" }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='45'
                    height='24'
                    viewBox='0 0 45 24'
                    fill='none'
                    style={{
                      transform: `rotate(${
                        getArrowDirection(1) === "down" ? 0 : 180
                      }deg)`,
                    }}
                  >
                    <path
                      d='M39.8879 23.2994C40.8672 24.2499 42.4276 24.2284 43.3781 23.2527C44.3287 22.277 44.3072 20.7131 43.3315 19.7625L23.6778 0.704268L21.956 2.47271L23.6778 0.697096C22.695 -0.253485 21.131 -0.228374 20.1804 0.750902C20.1517 0.779598 20.1266 0.808294 20.1015 0.836992L0.749115 19.7625C-0.230164 20.7131 -0.251686 22.277 0.698895 23.2527C1.64948 24.2284 3.21345 24.2535 4.18914 23.2994L21.9632 5.91632L39.8879 23.2994Z'
                      fill='#555555'
                    />
                  </svg>
                </span>
              </button>
            </p>
            <div
              className={`collapse ${activeButton === 1 ? "show" : ""}`}
              id='collapseExample1'
            >
              <div className='card card-boo'>
                SEM focuses on displaying ads to users actively searching for
                specific keywords, whereas traditional advertising casts a
                broader net across various platforms.{" "}
              </div>
            </div>
          </div>
          <br />
          
          <div className='container'>
            <p>
              <button
                className={buttonClass(2)}
                type='button'
                data-toggle='collapse'
                data-target='#collapseExample1'
                aria-expanded={activeButton === 2 ? "true" : "false"}
                aria-controls='collapseExample1'
                style={{
                  width: "100%",
                  height: "8rem",
                  flexShrink: "0",
                  backgroundColor: primaryBackgroundColor,
                }}
                onClick={() => handleButtonClick(2)}
              >
                What are the benefits of using Google Ads for SEM?{" "}
                <span style={{ float: "right" }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='45'
                    height='24'
                    viewBox='0 0 45 24'
                    fill='none'
                    style={{
                      transform: `rotate(${
                        getArrowDirection(2) === "down" ? 0 : 180
                      }deg)`,
                    }}
                  >
                    <path
                      d='M39.8879 23.2994C40.8672 24.2499 42.4276 24.2284 43.3781 23.2527C44.3287 22.277 44.3072 20.7131 43.3315 19.7625L23.6778 0.704268L21.956 2.47271L23.6778 0.697096C22.695 -0.253485 21.131 -0.228374 20.1804 0.750902C20.1517 0.779598 20.1266 0.808294 20.1015 0.836992L0.749115 19.7625C-0.230164 20.7131 -0.251686 22.277 0.698895 23.2527C1.64948 24.2284 3.21345 24.2535 4.18914 23.2994L21.9632 5.91632L39.8879 23.2994Z'
                      fill='#555555'
                    />
                  </svg>
                </span>
              </button>
            </p>
            <div
              className={`collapse ${activeButton === 2 ? "show" : ""}`}
              id='collapseExample2'
            >
              <div className='card card-boo'>
                Yes, we offer revisions to the design to ensure it meets your
                requirements and expectations.
              </div>
            </div>
          </div>

          <br />
        
          <div className='container'>
            <p>
              <button
                className={buttonClass(3)}
                type='button'
                data-toggle='collapse'
                data-target='#collapseExample1'
                aria-expanded={activeButton === 3 ? "true" : "false"}
                aria-controls='collapseExample1'
                style={{
                  width: "100%",
                  height: "8rem",
                  flexShrink: "0",
                  backgroundColor: primaryBackgroundColor,
                }}
                onClick={() => handleButtonClick(3)}
              >
                What is the importance of social media optimization (SMO)?{" "}
                <span style={{ float: "right" }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='45'
                    height='24'
                    viewBox='0 0 45 24'
                    fill='none'
                    style={{
                      transform: `rotate(${
                        getArrowDirection(3) === "down" ? 0 : 180
                      }deg)`,
                    }}
                  >
                    <path
                      d='M39.8879 23.2994C40.8672 24.2499 42.4276 24.2284 43.3781 23.2527C44.3287 22.277 44.3072 20.7131 43.3315 19.7625L23.6778 0.704268L21.956 2.47271L23.6778 0.697096C22.695 -0.253485 21.131 -0.228374 20.1804 0.750902C20.1517 0.779598 20.1266 0.808294 20.1015 0.836992L0.749115 19.7625C-0.230164 20.7131 -0.251686 22.277 0.698895 23.2527C1.64948 24.2284 3.21345 24.2535 4.18914 23.2994L21.9632 5.91632L39.8879 23.2994Z'
                      fill='#555555'
                    />
                  </svg>
                </span>
              </button>
            </p>
            <div
              className={`collapse ${activeButton === 3 ? "show" : ""}`}
              id='collapseExample2'
            >
              <div className='card card-boo'>
                Yes, we offer revisions to the design to ensure it meets your
                requirements and expectations.
              </div>
            </div>
          </div>

          <br />
        
          <div className='container'>
            <p>
              <button
                className={buttonClass(4)}
                type='button'
                data-toggle='collapse'
                data-target='#collapseExample1'
                aria-expanded={activeButton === 2 ? "true" : "false"}
                aria-controls='collapseExample1'
                style={{
                  width: "100%",
                  height: "8rem",
                  flexShrink: "0",
                  backgroundColor: primaryBackgroundColor,
                }}
                onClick={() => handleButtonClick(4)}
              >
                How does social media marketing impact brand visibility?{" "}
                <span style={{ float: "right" }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='45'
                    height='24'
                    viewBox='0 0 45 24'
                    fill='none'
                    style={{
                      transform: `rotate(${
                        getArrowDirection(4) === "down" ? 0 : 180
                      }deg)`,
                    }}
                  >
                    <path
                      d='M39.8879 23.2994C40.8672 24.2499 42.4276 24.2284 43.3781 23.2527C44.3287 22.277 44.3072 20.7131 43.3315 19.7625L23.6778 0.704268L21.956 2.47271L23.6778 0.697096C22.695 -0.253485 21.131 -0.228374 20.1804 0.750902C20.1517 0.779598 20.1266 0.808294 20.1015 0.836992L0.749115 19.7625C-0.230164 20.7131 -0.251686 22.277 0.698895 23.2527C1.64948 24.2284 3.21345 24.2535 4.18914 23.2994L21.9632 5.91632L39.8879 23.2994Z'
                      fill='#555555'
                    />
                  </svg>
                </span>
              </button>
            </p>
            <div
              className={`collapse ${activeButton === 4 ? "show" : ""}`}
              id='collapseExample2'
            >
              <div className='card card-boo'>
                Yes, we offer revisions to the design to ensure it meets your
                requirements and expectations.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
