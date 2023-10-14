/** @format */

import React, { useState } from "react";
import Navbar from "../layout/TopNavbar";
import em0 from "../../Assets/em0.png";
import ContactForm from "../layout/ContactForm";
import Footer from "../layout/Footer";

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

export default function Em() {
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
              How does Email Marketing <br />
              earn loyalty for your <br /> brand?
            </h1>

            <p style={{ width: '100%', fontSize: '1.85rem' }}>
              Empower your business with our effective email marketing <br />
              strategies. Elevate engagement, drive conversions, and foster{" "}
              <br />
              lasting customer relationships.
            </p>
            <Link onClick={handleCallButtonClick}>
              <button>Schedule a Call</button>
            </Link>
          </div>
          <div className='image'>
            <img src={em0} className='img-fluid' alt='header-image' />
          </div>
        </div>
      </header>

      <section
        className='service-feat p-5'
        style={{ backgroundColor: "#eff3fd" }}
      >
        <h2 style={{ fontSize: '3rem', lineHeight: '3.5rem'}}>
        Our Success-Driven Email <br /> Marketing Services        </h2>
        <p className='text-center pt-4'>
          Your Path to Email Marketing Excellence Starts Here.
        </p>
        <div className='contents'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 text-center p-5 '>
                  <div className='card-body'>
                    <img src={ff1} alt='image' />
                    <h4 className='card-title'>Brand Story Emails</h4> <br />
                    <p className='card-text'>
                    Craft a captivating brand narrative <br /> with our story emails, infusing your <br />identity for emotional connection and <br /> loyalty
                    </p>
                  </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff2} alt='image' />
                    <h4 className='card-title'>Transactional Emails</h4> <br />
                    <p className='card-text'>
                    Blend functionality and engagement <br /> with transactional emails. Elevate <br /> user experience, integrating <br /> personalized content for meaningful <br /> interactions.
                    </p>
                  </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff3} alt='image' />
                    <h4 className='card-title'>Email Newsletters</h4> <br />
                    <p className='card-text'>
                    Engage and inform subscribers with <br /> insightful email newsletters. Our <br /> expertly designed content establishes <br /> authority and anticipation.
                    </p>
                  </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff4} alt='image' />
                    <h4 className='card-title'>Dedicated Emails</h4> <br />
                    <p className='card-text'>
                    Spotlight offers, events, and <br /> announcements with dedicated <br />emails. Our attention-grabbing <br /> content drives immediate action.
                    </p>
                  </div>
                </div>
              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff5} alt='image' />
                    <h4 className='card-title'>Lead Nurturing Emails</h4> <br />
                    <p className='card-text'>
                    Nurture leads with tailored emails, <br /> converting prospects into loyal <br /> customers, boosting conversion <br /> rates.
                    </p>
                  </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff6} alt='image' />
                    <h4 className='card-title'>Sponsorship Emails</h4> <br />
                    <p className='card-text'>
                    Enhance partnerships with impactful <br />sponsorship emails. Create <br /> compelling content fostering mutual <br /> success and engagement.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center whyseo pt-5 pb-5'>
        <div className='container'>
          <h2 style={{ fontSize: '3rem' }}>Does Email Marketing Still <br /> Work?</h2>
          <p>
            Over the years, Email marketing stil remains effective in driving
            engagement <br /> and conversions.
          </p>
          <br />
          <div className='row'>
            <div className='col-md-3'>
              <h1>$40</h1>
              <p>expected average ROI for <br />every $1 spent on email <br /> marketing.</p>
            </div>
            <div className='col-md-3'>
              <h1>81%</h1>
              <p>
                of businesses still rely on email <br />as their primary customer
                <br />acquisition channel.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>5hrs</h1>
              <p>a day spent checking email <br /> (work+personal)</p>
            </div>
            <div className='col-md-3'>
              <h1>49%</h1>
              <p>
                of consumers like to receive <br /> promotional emails <br /> from their
                favorite brands.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3 style={{ fontSize: '3rem' }}>Why you need email marketing <br /> services</h3>

            <p>
            Email marketing is essential for propelling your business forward. It's a dynamic tool that not only nurtures customer <br /> relationships but also drives conversions. Our  email marketing services are meticulously designed to create <br /> personalized campaigns that resonate with your audience, leading to increased engagement and measurable results.
            </p>
            <div className='row pt-5'>
              <div className='col-md-4 pt-5'>
                <img src={ff7} alt='image' />
                <h3 className="pt-4">Build Customer Loyalty</h3>
                <p>
                Nurture customer relationships with <br /> targeted email campaigns. Our <br /> strategies foster loyalty, repeat <br /> business, and brand advocacy.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff8} alt='image' />
                <h3 className="pt-4">Expand Your Business Reach</h3>
                <p>
                Expand your market reach with global <br /> email marketing. Connect with <br /> potential customers worldwide, <br /> fostering growth.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff9} alt='image' />
                <h3 className="pt-4">Connect With Different Audiences</h3>
                <p>
                Tailor messages for diverse <br />audiences, driving meaningful <br /> interactions with effective <br /> communication.
                </p>
              </div>

              <div className='col-md-4 pt-5'>
                <img src={ff10} alt='image' />
                <h3 className="pt-4">Save Time and Effort</h3>
                <p>
                Streamline communication with <br /> automated email campaigns, freeing <br />your time for critical business <br /> aspects.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff11} alt='image' />
                <h3 className="pt-4">Test Email Campaigns <br /> and Drive Strong Results</h3>
                <p>
                Optimize outcomes with well-tested <br />email campaigns. Meticulous data <br /> analysis ensures higher open rates, <br /> click-throughs, conversions.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff12} alt='image' />
                <h3 className="pt-4">Track Your Analytics</h3>
                <p>
                Harness data-driven decision-making <br /> with our email marketing.  Real-time<br /> analytics refine strategies, maximize <br /> ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3 style={{ fontSize: '3rem' }}>Benefits of using our email marketing services</h3>

            <p>
            Experience heightened customer engagement and amplified conversions with our data-driven email <br /> marketing expertise.
            </p>
            <div className='row pt-5'>
              <div className='col-md-4 pt-5'>
                <img src={ff1} alt='image' />
                <h3 h3 className="pt-4">Personalized Campaigns</h3>
                <p>
                Tailored content resonates. Our email <br /> marketing delivers personalized <br /> campaigns, boosting engagement <br /> and conversion rates.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff2} alt='image' />
                <h3 h3 className="pt-4">Targeted Audience Engagement</h3>
                <p>
                Reach the right audience with <br /> precision. Our strategies ensure <br /> emails maximize campaign impact.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff6} alt='image' />
                <h3 h3 className="pt-4">Measurable ROI</h3>
                <p>
                Track every action with <br /> comprehensive analytics. Real-time <br /> insights into open rates, click- <br />throughs, and conversions optimize  <br />ROI
              </p>
              </div>

              <div className='col-md-4 pt-5'>
                <img src={ff3} alt='image' />
                <h3 h3 className="pt-4">Real-Time Communication</h3>
                <p>
                Stay current with your audience. Email <br /> marketing delivers timely updates to <br /> subscribers' inboxes, keeping your brand <br /> top-of-mind.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff4} alt='image' />
                <h3 h3 className="pt-4">Flexibility and Versatility</h3>
                <p>
                Our services offer promotional <br /> content, educational resources, and <br />personalized recommendations to <br /> suit your goals.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff5} alt='image' />
                <h3 h3 className="pt-4">Lead Nurturing and Conversion</h3>
                <p>
                Guide leads through the funnel with <br />nurturing emails. Provide valuable <br /> information for conversions and loyal <br />customers.
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
              <h3 className='mb-4'>Supercharge Your ROI Now</h3>
             </div>
            <p>
            Contact us for a free consultation and discover the Email marketing <br />strategies that can skyrocket your return on investment
             </p>
           </div>

      <ContactForm />


           </div>
           </section>

      <section id='sec-6' className='py-5'>
        <div className='container-lg my-4'>
          <div className='col-12 text-center'>
            <h3 className='mb-5' style={{ fontSize: '3rem' }}>Email Marketing FAQs</h3>
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
                What is the significance of email marketing for businesses?{" "}
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
                Email marketing is a powerful tool that helps businesses engage
                their audience, nurture leads, and drive conversions. It enables
                personalized communication, boosts brand loyalty, and delivers
                measurable ROI.{" "}
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
                How can personalized email campaigns benefit my brand?{" "}
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
                Can email marketing help with lead generation?{" "}
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
                How can automated email campaigns save time and improve
                efficiency?{" "}
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
