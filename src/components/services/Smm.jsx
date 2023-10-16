/** @format */

import React, { useState } from "react";
import Navbar from "../layout/TopNavbar";
import smo from "../../Assets/smo.png";
import oneup from "../../Assets/oneup.png";
import threemob from "../../Assets/threemob.png";
import threestep from "../../Assets/threestep.png";
import ContactForm from "../layout/ContactForm";
import Footer from "../layout/Footer";

import ff from "../../Assets/ff.png";

import ff1 from "../../Assets/ff1.png";
import ff2 from "../../Assets/ff2.png";
import ff3 from "../../Assets/ff3.png";
import ff4 from "../../Assets/ff4.png";
import ff5 from "../../Assets/ff5.png";
import ff6 from "../../Assets/ff6.png";
import ff7 from "../../Assets/ff7.png";
import ff8 from "../../Assets/ff8.png";
import ff9 from "../../Assets/ff9.png";
import ff10 from "../../Assets/ff10.png";
import ff11 from "../../Assets/ff11.png";
import ff12 from "../../Assets/ff12.png";
import { Link } from "react-router-dom";

export default function Smm() {
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

      <header className='header-bg' style={{ height: "93vh" }}>
        <div className='header'>
          <div className='content'>
            <h1>
              How SMO builds your <br />
              brand awareness?
            </h1>

            <p>
              Social Media Marketing is a cost-effective way to maximize <br />{" "}
              brand awareness and witness tangible results as your <br />{" "}
              message resonates across social channels.
            </p>
            <Link onClick={handleCallButtonClick}>
              <button>Schedule a Call</button>
            </Link>
          </div>
          <div className='image'>
            <img src={smo} className='img-fluid' alt='header-image' />
          </div>
        </div>
      </header>

      <section
        className='service-feat p-5'
        style={{ backgroundColor: "#eff3fd" }}
      >
        <h2>Our Comprehensive SEO Services </h2>
        <p className='text-center'>
          Explore our comprehensive social media marketing services list <br />{" "}
          compiled just for you.
        </p>
        <div className='contents'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff} alt='image' className='fram' />
                  <h4 className='card-title'>Content Creation</h4> <br />
                  <p className='card-text'>
                    Our content specialists create <br /> captivating and
                    shareable content, <br /> from posts to visually engaging{" "}
                    <br /> graphics
                  </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff1} alt='image' />
                  <h4 className='card-title'>Social Media Advertising</h4>{" "}
                  <br />
                  <p className='card-text'>
                    Amplify reach with targeted social <br /> media ads. We
                    pinpoint your ideal <br /> audience, maximizing engagement.
                  </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff2} alt='image' />
                  <h4 className='card-title'>Influencer Marketing</h4> <br />
                  <p className='card-text'>
                    Leverage industry thought leaders to <br /> boost
                    visibility. Our influencer <br /> partnerships amplify your
                    message <br /> to a wider audience.
                  </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff3} alt='image' />
                  <h4 className='card-title'>Handle each platform</h4> <br />
                  <p className='card-text'>
                    Tailor content for each platform's <br />
                    unique audience and style. From <br /> Facebook to LinkedIn,
                    we speak your <br />
                    audience's language.
                  </p>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff4} alt='image' />
                  <h4 className='card-title'>
                    Social Media Contest and Giveaways
                  </h4>{" "}
                  <br />
                  <p className='card-text'>
                    Excite your audience with engaging <br />
                    contests, nurturing brand loyalty <br /> through
                    interaction.
                  </p>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff5} alt='image' />
                  <h4 className='card-title'>
                    Instant replies and user engagement
                  </h4>{" "}
                  <br />
                  <p className='card-text'>
                    Build connections by promptly <br /> responding to user
                    queries. Our <br /> proactive engagement fosters trust{" "}
                    <br />
                    and a positive brand image.
                  </p>
                </div>
              </div>
              <div className='col-md-4 text-center p-5 center-content'>
                <div className='card-body lastcard'>
                  <img src={ff6} alt='image' />
                  <h4 className='card-title'>Analytics and Reporting</h4> <br />
                  <p className='card-text'>
                    Access real-time insights into your <br /> social media
                    performance with our <br /> detailed analytics and reporting
                    for <br /> informed decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center whyseo p-5'>
        <div className='container'>
          <h2 style={{ fontSize: "3rem" }}>
            Why you need Social Media <br /> Marketing?
          </h2>
          <p>
            Social media marketing service is essential in expanding your brand
            reach, <br /> engagement, and driving conversions.
          </p>
          <br />
          <div className='row'>
            <div className='col-md-3'>
              <h1>65%</h1>
              <p>
                of consumers learn about <br /> new brands on social <br />{" "}
                media.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>78%</h1>
              <p>
                of consumers are willing to buy <br /> from brands after a
                positive <br /> social media experience.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>91%</h1>
              <p>
                of executives will increase social <br />
                media marketing budgets in the <br /> next 3 years.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>72.2%</h1>
              <p>
                of companies use social <br /> media data to inform <br />
                business decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3 style={{ fontSize: "3rem" }}>
              Why Choose Amorserv SM Services?
            </h3>

            <p>
              Unlock a journey to online success with SEO expertise that
              delivers exceptional results
            </p>
            <div className='row pt-5'>
              <div className='col-md-4'>
                <img src={ff7} alt='image' />
                <h3>Data Driven</h3>
                <p>
                  At Amorserv Consulting, we propel <br /> success with
                  data-driven strategies <br /> for remarkable growth and
                  campaign <br /> performance.
                </p>{" "}
                <br /> <br /> <br />
              </div>
              <div className='col-md-4'>
                <img src={ff8} alt='image' />
                <h3>Dedicated SM Professionals</h3>
                <p>
                  We have a devoted team of social <br />
                  media experts elevating your brand's <br /> online presence
                  and bringing your <br /> vision to life for your target
                  audience
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff9} alt='image' />
                <h3>Certified Experts</h3>
                <p>
                  Trust our industry-certified SM <br /> professionals. Our
                  team's expertise <br /> provide a competitive edge backed{" "}
                  <br /> by knowledge.
                </p>
              </div>

              <div className='col-md-4'>
                <img src={ff10} alt='image' />
                <h3>Industry Insights</h3>
                <p>
                  Confidently navigate the digital <br />
                  landscape with insights from years of <br /> experience,
                  propelling your brand to <br /> sustained success.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff11} alt='image' />
                <h3>Team Support</h3>
                <p>
                  Collaboration is our core. With a <br /> dedicated SM team,
                  you're a partner <br /> on a growth journey. Your goals are{" "}
                  <br /> ours
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff12} alt='image' />
                <h3>Transparent Reporting</h3>
                <p>
                  Transparency is our priority. Our <br /> reporting is a
                  detailed map of your <br /> brand's journey, empowering you{" "}
                  <br /> every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='container-lg my-4'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'>Amorserv Agile SM Methodology</h3>
          </div>
          <p className='my-4 text-center' style={{ color: "#3D3D3D" }}>
            We adopt tailored strategies to fuel captivating content. Meticulous
            monitoring to <br />
            ensure growth, adapting to your brand journey.
          </p>
          <div className='centered-container' style={{ marginTop: "-160px" }}>
            <div className='threestep'>
              <img src={threestep} alt='3-Step' />
            </div>
            <div className='threemob'>
              <img src={threemob} alt='3-mobile' />
            </div>
          </div>
          {/* <div className='centered-container' style={{ marginTop: "-160px" }}>
            <div className='threestep'>
              <img src={threestep} alt='3-Step' />
            </div>
          </div> */}
          <div className='text-center' style={{ marginTop: "-170px" }}>
            <Link className='btn mt-4 btn-real' onClick={handleCallButtonClick}>
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className='p-5' id='sec-6' style={{ background: "#eff3fd" }}>
        <div className='container ' id='contact-form-section'>
          <div className='content text-center'>
            <div className='col-12 text-center'>
              <h3 className='mb-4'>Transform Your Business Today</h3>
            </div>
            <p>
              Let's discuss how our digital marketing expertise can boost your
              online <br /> presence and revenue.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='container-lg my-4'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'>Social Media Marketing FAQs</h3>
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
                {" "}
                <span className='faqspan'>
                  What is social media marketing?{" "}
                </span>
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
              <div
                className='card card-boo'
                style={{ color: "#010101", backgroundColor: "white" }}
              >
                Social media marketing is the strategic use of social platforms
                to connect with your audience, build brand awareness, engage
                users, and ultimately achieve business goals.{" "}
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
                <span className='faqspan'>
                  What are the 5 ways of social media marketing?{" "}
                </span>
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
                <span className='faqspan'>
                  What is the importance of social media optimization (SMO)?{" "}
                </span>
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
                aria-expanded={activeButton === 4 ? "true" : "false"}
                aria-controls='collapseExample1'
                style={{
                  width: "100%",
                  height: "8rem",
                  flexShrink: "0",
                  backgroundColor: primaryBackgroundColor,
                }}
                onClick={() => handleButtonClick(4)}
              >
                <span className='faqspan'>
                  How does social media marketing impact brand visibility?{" "}
                </span>
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
