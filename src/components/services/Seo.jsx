/** @format */

import React, { useState } from "react";
import Navbar from "../layout/TopNavbar";
import seo from "../../Assets/seo.png";
import seomobi from "../../Assets/seomobi.png";
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
import ff13 from "../../Assets/ff13.png";
import ff14 from "../../Assets/ff14.png";
import ff15 from "../../Assets/ff15.png";
import { Link } from "react-router-dom";

export default function () {
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

      <header className='header-bg' style={{ height: '80.8vh' }}>
        <div className='header'>
          <div className='content'>
            <h1>Turbocharge Your Online Success with Expert SEO Services</h1>

            <p>
              SEO is the Definitive Path to Securing Your Place at the Peak of
              Online Success.{" "}
            </p>
            <Link onClick={handleCallButtonClick}>
              <button>Learn More</button>
            </Link>
          </div>
          <div className='image'>
            <img src={seo} className='img-fluid' alt='header-image' />
          </div>
        </div>
      </header>

      <section
        className='service-feat p-5'
        style={{ backgroundColor: "#eff3fd" }}
      >
        <h2 className="pb-4">
          Our Comprehensive SEO Services{" "}
        </h2>
        <p className='text-center'>
          Maximize your online presence with our SEO services for <br />visibility
          and success.
        </p>
        <div className='contents'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff} alt='image' />
                    <h4 className='card-title'>
                      Keyword Research & Strategy
                    </h4>{" "}
                    <br />
                    <p className='card-text'>
                    Uncover your online potential with our <br /> expert keyword research and strategy <br /> to boost your digital success.
                    </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff1} alt='image' />
                    <h4 className='card-title'>Link Building</h4> <br />
                    <p className='card-text'>
                    Enhance your website's authority <br /> through strategic link-building <br /> techniques to aid search engine <br /> rankings.
                    </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff2} alt='image' />
                    <h4 className='card-title'>Technical SEO</h4> <br />
                    <p className='card-text'>
                    Enhance website performance and <br /> user experience with technical <br /> optimizations for effective search <br /> engine visibility.
                    </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff9} alt='image' />
                    <h4 className='card-title'>Local SEO</h4> <br />
                    <p className='card-text'>
                    Dominate your local market with <br /> targeted optimizations that put your <br /> business on the map, making it easier <br /> for nearby customers to find you <br /> online. 
                    </p>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff11} alt='image' />
                    <h4 className='card-title'>On-Page SEO</h4> <br />
                    <p className='card-text'>
                    Craft compelling web pages <br /> optimized for search engines and <br />users alike, utilizing strategic keyword <br /> placement, meta tags, and content <br /> enhancements.
                    </p>
                  </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff10} alt='image' />
                    <h4 className='card-title'>Off-Page SEO</h4> <br />
                    <p className='card-text'>
                    Expand your digital footprint through <br />off-page strategies like content <br /> outreach and social media <br /> engagement, enhancing online <br /> authority.
                    </p>
                  </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff3} alt='image' />
                    <h4 className='card-title'>Franchise SEO</h4> <br />
                    <p className='card-text'>
                    Tailored strategies support franchise <br /> businesses, ensuring consistent <br /> online presence across multiple <br />locations, maximizing local visibility.
                    </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff5} alt='image' />
                    <h4 className='card-title'>Shopify SEO</h4> <br />
                    <p className='card-text'>
                    Boost Shopify store visibility and <br /> rankings using specialized SEO for <br /> product pages, collections, and site <br /> performance.
                    </p>
                  </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff4} alt='image' />
                    <h4 className='card-title'>Amazon SEO</h4> <br />
                    <p className='card-text'>
                    Stand out in the competitive Amazon <br /> marketplace with Amazon-specific <br /> SEO tactics that drive your products <br />to the top of search results, <br /> increasing visibility and sales.
                    </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff6} alt='image' />
                    <h4 className='card-title'>eCommerce SEO</h4> <br />
                    <p className='card-text'>
                    Transform your online store into a <br />powerhouse with comprehensive SEO <br /> strategies tailored to ecommerce <br /> platforms, driving higher traffic and <br /> boosting sales.
                    </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff8} alt='image' />
                    <h4 className='card-title'>Content Writing</h4> <br />
                    <p className='card-text'>
                    Ignite your digital journey with SEO- <br />optimized content that resonates, <br /> boosts engagement, and establishes <br />industry leadership
                    </p>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                  <div className='card-body'>
                    <img src={ff7} alt='image' />
                    <h4 className='card-title'>
                      Conversion Rate <br /> Optimization (CRO)
                    </h4>{" "}
                    <br />
                    <p className='card-text'>
                    Stand out in the competitive Amazon <br /> marketplace with Amazon-specific <br />SEO tactics that drive your products <br />to the top of search results, <br /> increasing visibility and sales.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center whyseo p-5'>
        <div className='container'>
          <h2 className="pb-3" style={{ fontSize: '3rem' }}>Why you need SEO?</h2>
          <p>
            Enhance Your Brand's Visibility and Success with Our Unmatched SEO
            Expertise.
          </p>{" "}
          <br />
          <div className='row'>
            <div className='col-md-3'>
              <h1>70%</h1>
              <p>of online experiences  begin <br /> with a search engine</p>
            </div>
            <div className='col-md-3'>
              <h1>90%</h1>
              <p>
                of global traffic comes from <br /> Google search, Google Images, <br />and
                Google Maps.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>53.5%</h1>
              <p>
                of global traffic comes from <br />Google search, Google <br />Images, and
                Google Maps.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>0.78%</h1>
              <p>of Google searchers click on <br />results from the 2nd page.</p>
            </div>
          </div>
        </div>
      </div>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3 className="pb-4" style={{ fontSize: '3rem' }}>Why Choose Amorserv SEO Services?</h3>

            <p>
              Our SEO experts have in-depth knowledge of SEO best practices and
              are eager to help you out.
            </p>
            <div className='row pt-5'>
              <div className='col-md-4 pt-5'>
                <img src={ff12} alt='image' />
                <h3 className="pt-4">Experience Matters</h3>
                <p>
                Years of SEO expertise bring valuable <br />insights and strategies that adapt to <br />evolving algorithms and industry <br />changes
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff13} alt='image' />
                <h3 className="pt-4">Dedicated SEO Professionals</h3>
                <p>
                Our passionate SEO specialists craft <br /> tailored strategies dedicated to your <br /> brand's unique goals and challenges.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff14} alt='image' />
                <h3 className="pt-4">Relationships & Results</h3>
                <p>
                We build lasting partnerships, your <br /> success is ours, delivering remarkable <br /> outcomes.
                </p>
              </div>

              <div className='col-md-4 pt-5'>
                <img src={ff15} alt='image' />
                <h3 className="pt-4">We’re Always Getting Better</h3>
                <p>
                In the dynamic digital landscape, we <br />lead. Continuously refining skills,<br /> staying current with trends, ensuring <br /> cutting-edge strategies
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff7} alt='image' />
                <h3 className="pt-4">We Play Fair</h3>
                <p>
                Ethics are core. Our SEO follows best <br /> practices, safeguarding your online <br /> reputation and ensuring success
                </p>
              </div>
              <div className='col-md-4 pt-5 '>
                <img src={ff2} alt='image' />
                <h3 className="pt-4">Transparent Reporting</h3>
                <p>
                Open communication is key. Our <br />reporting offers clear insights into <br />your SEO progress, showcasing <br />tangible results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='container-lg'>
          <div className='col-12 text-center'>
            <h3 className='mb-4' style={{ fontSize: '3rem' }}>Amorserv Agile SEO Methodology</h3>
          </div>
          <p
            className='text-center'
            style={{
              color: "#3D3D3D",
              fontWeight: "400",
              paddingBottom: "30px",
            }}
          >
            We adopt tailored strategies to fuel captivating content. Meticulous
            monitoring to <br /> ensure growth, adapting to your brand journey.
          </p>

          <section id='sec-6'>
            <div className='centered-container' style={{ marginTop: "-160px" }}>
              <div className='threestep'>
                <img src={threestep} alt='3-Step' />
              </div>
              <div className='threemob'>
                <img src={threemob} alt='3-mobile' />
              </div>
            </div>
          </section>

          <div
            className='text-center'
            style={{ marginTop: "-160px", marginBottom: "80px" }}
          >
            <Link className='btn mt-4 btn-real'>Get Started</Link>
          </div>
        </div>
      </section>

      <section className='p-5' id='sec-6' style={{ background: "#eff3fd" }}>
        <div className='container ' id='contact-form-section'>
          <div className='content text-center'>
            <div className='col-12 text-center'>
              <h3 className='mb-4'>Let’s Grow your Business</h3>
            </div>
            <p>
            Fuel your brand's growth with our best SEO strategies that drive <br /> success.
            </p>
          </div>
      <ContactForm />


          </div>
          </section>


      <section id='sec-6' className='py-5'>
        <div className='container-lg my-4'>
          <div className='col-12'>
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
                What is SEO and why is it important?
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
                SEO, or Search Engine Optimization, is the practice of
                optimizing your website to rank higher on search engine results
                pages (SERPs). It's crucial because higher rankings mean
                increased visibility, more organic traffic, and a better chance
                of reaching your target audience.
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
                How long does it take to see SEO results?
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
                SEO results vary based on factors like website age, competition,
                and the effectiveness of your strategies. Typically, noticeable
                improvements might take a few months.
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
                What are keywords and how do they impact SEO?{" "}
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
                Keywords are search terms users type into search engines.
                Properly using keywords in your content, titles, and meta
                descriptions helps search engines understand your content's
                relevance, boosting your chances of ranking higher for those
                terms.
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
                Is local SEO important for businesses?{" "}
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
                Yes, local SEO is vital for businesses targeting a local
                audience. It helps your business appear in local searches,
                improves visibility on Google, and connects you with nearby
                customers searching for your products or services.
              </div>
            </div>
          </div>
          <br /> 
          <div className='container'>
            <p>
              <button
                className={buttonClass(5)}
                type='button'
                data-toggle='collapse'
                data-target='#collapseExample1'
                aria-expanded={activeButton === 5 ? "true" : "false"}
                aria-controls='collapseExample1'
                style={{
                  width: "100%",
                  height: "8rem",
                  flexShrink: "0",
                  backgroundColor: primaryBackgroundColor,
                }}
                onClick={() => handleButtonClick(5)}
              >
                What is the difference between on-page and off-page SEO?{" "}
                <span style={{ float: "right" }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='45'
                    height='24'
                    viewBox='0 0 45 24'
                    fill='none'
                    style={{
                      transform: `rotate(${
                        getArrowDirection(5) === "down" ? 0 : 180
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
              className={`collapse ${activeButton === 5 ? "show" : ""}`}
              id='collapseExample2'
            >
              <div className='card card-boo'>
              On-page SEO involves optimizing elements within your website, like content and HTML tags. Off-page SEO focuses on external factors, primarily building quality backlinks from reputable sources to increase your site's authority. 
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
