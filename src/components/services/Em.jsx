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

  return (
    <>
      <div style={{ paddingBottom: "90px" }}>
        <Navbar />
      </div>

      <header class='header-bg'>
        <div class='header'>
          <div class='content'>
            <h1>How does Email Marketing earn loyalty for your brand?</h1>
            <p style={{ opacity: "0.45" }}>
              Empower your business with our effective email marketing <br />
              strategies. Elevate engagement, drive conversions, and foster{" "}
              <br />
              lasting customer relationships.
            </p>

            <Link to='/contact-us'>
              <button>Schedule a Call</button>
            </Link>
          </div>
          <img src={em0} alt='header-image' />
        </div>
      </header>

      <section
        className='service-feat p-5'
        style={{ backgroundColor: "#eff3fd" }}
      >
        <h2>
          Our Success-driven Email marketing <br /> services
        </h2>
        <p className='text-center'>
          Your Path to Email Marketing Excellence Starts Here.
        </p>
        <div className='contents'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff1} alt='image' />
                    <h4 className='card-title'>Brand Story Emails</h4> <br />
                    <p className='card-text'>
                      Craft a captivating narrative around your brand with our
                      brand story emails. We'll infuse your unique identity into
                      every message, creating an emotional connection that
                      resonates with your audience and reinforces brand loyalty.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff2} alt='image' />
                    <h4 className='card-title'>Transactional Emails</h4> <br />
                    <p className='card-text'>
                      Seamlessly blend functionality and engagement with our
                      transactional emails. Elevate user experience while
                      strategically integrating personalized content,
                      transforming routine interactions into meaningful
                      touchpoints.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff3} alt='image' />
                    <h4 className='card-title'>Email Newsletters</h4> <br />
                    <p className='card-text'>
                      Engage and inform your subscribers with email newsletters
                      that provide valuable insights, updates, and highlights.
                      Our expertly designed newsletters establish your authority
                      while keeping your audience eagerly anticipating each
                      edition.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff4} alt='image' />
                    <h4 className='card-title'>Dedicated Emails</h4> <br />
                    <p className='card-text'>
                      When it's time to shine a spotlight on a specific offer,
                      event, or announcement, our dedicated emails deliver. We
                      create attention-grabbing content that ensures your
                      message takes center stage and drives immediate action.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff5} alt='image' />
                    <h4 className='card-title'>Lead Nurturing Emails</h4> <br />
                    <p className='card-text'>
                      Guide your leads along their journey to conversion with
                      our lead nurturing emails. Tailored to each stage, these
                      emails provide relevant content that nurtures prospects
                      into loyal customers, increasing your overall conversion
                      rates.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff6} alt='image' />
                    <h4 className='card-title'>Sponsorship Emails</h4> <br />
                    <p className='card-text'>
                      Enhance your partnerships and collaborations with
                      impactful sponsorship emails. We'll help you create
                      compelling content that resonates with both your audience
                      and your partners', fostering mutual success and
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className='text-center'
        style={{ backgroundColor: " #226666", height: "300px", color: "white" }}
      >
        <div className='container p-5'>
          <h2>Does Email Marketing Still Work?</h2>
          <p>
            Over the years, Email marketing stil remains effective in driving
            engagement <br /> and conversions.
          </p>
          <div className='row'>
            <div className='col-md-3'>
              <h2>$40</h2>
              <p>expected average ROI for every $1 spent on email marketing.</p>
            </div>
            <div className='col-md-3'>
              <h1>81%</h1>
              <p>
                of businesses still rely on email as their primary customer
                acquisition channel.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>5hrs</h1>
              <p>a day spent checking email (work+personal)</p>
            </div>
            <div className='col-md-3'>
              <h1>49%</h1>
              <p>
                of consumers like to receive promotional emails from their
                favorite brands.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3>Why you need email marketing services</h3>

            <p>
              Email marketing is essential for propelling your business forward.
              It's a dynamic tool that not only nurtures customer relationships
              but also drives conversions. Our email marketing services are
              meticulously designed to create personalized campaigns that
              resonate with your audience, leading to increased engagement and
              measurable results. At Amorserv Consulting, we're dedicated to
              helping you harness the true potential of email marketing to
              amplify your brand's reach and achieve your business goals.
            </p>
            <div className='row pt-5'>
              <div className='col-md-4'>
                <img src={ff7} alt='image' />
                <h3>Build Customer Loyalty</h3>
                <p>
                  Nurture lasting relationships with your customers through
                  targeted email campaigns. Our strategies ensure your audience
                  feels valued and engaged, fostering loyalty that translates
                  into repeat business and brand advocacy.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff8} alt='image' />
                <h3>Expand Your Business Reach</h3>
                <p>
                  Tap into a broader market by utilizing email marketing's wide
                  reach. We help you connect with potential customers beyond
                  borders, giving your brand a global presence and enabling
                  growth in new regions.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff9} alt='image' />
                <h3>Connect With Different Audiences</h3>
                <p>
                  Tailor your messages to resonate with diverse audience
                  segments. With our expertise, you can effectively communicate
                  with different demographics, ensuring each email resonates and
                  drives meaningful interactions.
                </p>
              </div>

              <div className='col-md-4'>
                <img src={ff10} alt='image' />
                <h3>Save Time and Effort</h3>
                <p>
                  Streamline your communication efforts with automated email
                  campaigns. We implement time-saving solutions that
                  consistently engage your audience, allowing you to focus on
                  other critical aspects of your business.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff11} alt='image' />
                <h3>Test Email Campaigns and Drive Strong Results</h3>
                <p>
                  Achieve optimal outcomes with well-tested email campaigns. We
                  meticulously analyze data and fine-tune strategies to ensure
                  every email delivers impactful results, driving higher open
                  rates, click-throughs, and conversions.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff12} alt='image' />
                <h3>Track Your Analytics</h3>
                <p>
                  Harness the power of data-driven decision-making. Our email
                  marketing services provide comprehensive analytics, enabling
                  you to monitor the effectiveness of your campaigns in
                  real-time, refine your strategies, and maximize your ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3>Benefits of using our email marketing services</h3>

            <p>
              Experience heightened customer engagement and amplified
              conversions with our data-driven email marketing expertise.
            </p>
            <div className='row pt-5'>
              <div className='col-md-4'>
                <img src={ff1} alt='image' />
                <h3>Personalized Campaigns</h3>
                <p>
                  Tailored content resonates deeply. Our email marketing
                  services deliver personalized campaigns that address each
                  recipient's preferences, leading to higher engagement and
                  conversion rates.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff2} alt='image' />
                <h3>Targeted Audience Engagement</h3>
                <p>
                  Reach the right people with the right message. Our strategies
                  ensure your emails land in the inboxes of your target
                  audience, maximizing the impact of your campaigns.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff6} alt='image' />
                <h3>Measurable ROI</h3>
                <p>
                  Every action is trackable. Our services provide comprehensive
                  analytics, giving you real-time insights into open rates,
                  click-throughs, and conversions, allowing you to fine-tune
                  your strategies for maximum ROI.
                </p>
              </div>

              <div className='col-md-4'>
                <img src={ff3} alt='image' />
                <h3>Real-Time Communication</h3>
                <p>
                  Stay current with your audience. Our email marketing allows
                  you to deliver timely updates, offers, and news directly to
                  your subscribers' inboxes, keeping your brand top-of-mind.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff4} alt='image' />
                <h3>Flexibility and Versatility</h3>
                <p>
                  Adapt to your audience's preferences. Whether it's promotional
                  content, educational resources, or personalized
                  recommendations, our services cater to various types of
                  messaging to suit your goals.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff5} alt='image' />
                <h3>Lead Nurturing and Conversion</h3>
                <p>
                  Guide leads through the sales funnel. Our services include
                  lead nurturing emails that provide valuable information,
                  paving the way for conversions and turning leads into loyal
                  customers.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <section id='sec-6' className='py-5'>
        <div className='container-lg my-4'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'>Email Marketing FAQs</h3>
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
          <br />
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
                  height: "6rem",
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
          <br />
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
                  height: "6rem",
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
          <br />
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
                  height: "6rem",
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
