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

  return (
    <>
      <div style={{ paddingBottom: "90px" }}>
        <Navbar />
      </div>

      <header className='header-bg'>
        <div className='header'>
          <div className='content'>
            <h1>How SMO builds your brand awareness?</h1>

            <p>
              Social Media Marketing is a cost-effective way to maximize <br />
              brand awareness and witness tangible results as your message{" "}
              <br /> resonates across social channels.
            </p>
            <Link to='/'>
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
          Maximize your online presence with our SEO services for visibility{" "}
          <br /> and success.
        </p>
        <div className='contents'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff} alt='image' className='fram' />
                    <h4 className='card-title'>Content Creation</h4> <br />
                    <p className='card-text'>
                      Our content creation specialist will craft compelling and
                      shareable content that captivates your audience's
                      attention. From posts to visually engaging graphics.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff1} alt='image' />
                    <h4 className='card-title'>
                      Social Media Advertising
                    </h4>{" "}
                    <br />
                    <p className='card-text'>
                      Amplify your reach through targeted social media
                      advertising campaigns. We pinpoint your ideal audience,
                      maximizing your ROI and driving meaningful engagement.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff2} alt='image' />
                    <h4 className='card-title'>Influencer Marketing</h4> <br />
                    <p className='card-text'>
                      Leverage the influence of thought leaders in your industry
                      to boost brand visibility. Our influencer partnerships
                      amplify your message and connect you with a wider
                      audience.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff3} alt='image' />
                    <h4 className='card-title'>Handle each platform</h4> <br />
                    <p className='card-text'>
                      Tailor your content for each platform's unique audience
                      and style. Whether it's Facebook, Instagram, Twitter, or
                      LinkedIn, we curate content that speaks to your audience's
                      preferences.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff4} alt='image' />
                    <h4 className='card-title'>
                      Social Media Contest and Giveaways
                    </h4>{" "}
                    <br />
                    <p className='card-text'>
                      Engage and excite your audience with captivating contests
                      and giveaways. Our strategies drive participation, boost
                      interaction, and ultimately, nurture brand loyalty.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff5} alt='image' />
                    <h4 className='card-title'>
                      Instant replies and user engagement
                    </h4>{" "}
                    <br />
                    <p className='card-text'>
                      Create meaningful connections by promptly responding to
                      user queries and comments. Our proactive approach to
                      engagement fosters a positive brand image and fosters
                      customer trust.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff6} alt='image' />
                    <h4 className='card-title'>Analytics and Reporting</h4>{" "}
                    <br />
                    <p className='card-text'>
                      Access real-time insights into your social media
                      performance. Our detailed analytics and reporting provide
                      a clear view of your strategy's impact, enabling informed
                      decision-making and continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center whyseo p-5'>
        <div className='container'>
          <h2>Why you need Social Media Marketing?</h2>
          <p>
            Social media marketing service is essential in expanding your brand
            reach, engagement, <br /> and driving conversions.
          </p>
          <br />
          <div className='row'>
            <div className='col-md-3'>
              <h1>65%</h1>
              <p>of online experiences begin with a search engine</p>
            </div>
            <div className='col-md-3'>
              <h1>78%</h1>
              <p>
                of consumers are willing to buy from brands after a positive
                social media experience.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>91%</h1>
              <p>
                of executives will increase social media marketing budgets in
                the next 3 years
              </p>
            </div>
            <div className='col-md-3'>
              <h1>72.2%</h1>
              <p>
                of companies use social media data to inform business decisions
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3>Why Choose Amorserv SM Services?</h3>

            <p>
              Unlock a journey to online success with SEO expertise that
              delivers exceptional results
            </p>
            <div className='row pt-5'>
              <div className='col-md-4'>
                <img src={ff7} alt='image' />
                <h3>Data Driven</h3>
                <p>
                  At Amorserv Consulting, we propel your success through
                  strategies meticulously crafted from data analysis. Every move
                  we make is rooted in insights, ensuring your campaigns
                  outperform and drive remarkable growth.
                </p>{" "}
                <br /> <br /> <br />
              </div>
              <div className='col-md-4'>
                <img src={ff8} alt='image' />
                <h3>Dedicated SM Professionals</h3>
                <p>
                  We boasts of a team of devoted social media experts,
                  tirelessly working to elevate your brand's online presence.
                  With unwavering dedication, we bring your vision to life in
                  the digital space, ensuring your message resonates with your
                  target audience.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff9} alt='image' />
                <h3>Certified Experts</h3>
                <p>
                  Place your trust in our industry-certified SM professionals.
                  Our team's extensive qualifications and expertise empower
                  campaigns with specialized skills, providing you with a
                  competitive edge that's backed by knowledge.
                </p>
              </div>

              <div className='col-md-4'>
                <img src={ff10} alt='image' />
                <h3>Industry Insights</h3>
                <p>
                  Navigate the digital landscape with unwavering confidence. We
                  equip you with insights garnered from years of experience.
                  These insights give your brand an edge, propelling it beyond
                  competition and into a realm of sustained success.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff11} alt='image' />
                <h3>Team Support</h3>
                <p>
                  Collaboration lies at the heart of our approach. With a
                  passionate and dedicated SM team by your side, you're not just
                  another client – you're a partner on a journey toward growth.
                  Your goals are our goals, and we're committed to your brand's
                  ascent.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff12} alt='image' />
                <h3>Transparent Reporting</h3>
                <p>
                  We prioritize transparency. Our reporting is more than
                  numbers; it's a detailed map guiding your brand's journey.
                  Witness the impact of your campaigns as we lay out the
                  metrics, ensuring you're informed and empowered every step of
                  the way.
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
            <Link className='btn mt-4 btn-real' to='/contact-us'>
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />

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
                  height: "6rem",
                  flexShrink: "0",
                  backgroundColor: primaryBackgroundColor,
                }}
                onClick={() => handleButtonClick(1)}
              >
                What is social media marketing?{" "}
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
          <br /> <br /> <br />
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
                  height: "6rem",
                  flexShrink: "0",
                  backgroundColor: primaryBackgroundColor,
                }}
                onClick={() => handleButtonClick(2)}
              >
                What are the 5 ways of social media marketing?{" "}
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
          <br /> <br /> <br />
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
                  height: "6rem",
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
          <br /> <br /> <br />
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
                  height: "6rem",
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
