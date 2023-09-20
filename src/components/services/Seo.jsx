/** @format */

import React, { useState } from "react";
import Navbar from "../layout/TopNavbar";
import seo from "../../Assets/seo.png";
import oneup from "../../Assets/oneup.png";
import twoup from "../../Assets/twoup.png";
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

export default function () {
  const [activeButton, setActiveButton] = useState(null);
  const buttonClass = (buttonId) => {
    return `btn btn-light ${activeButton === buttonId ? "active-button" : ""}`;
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
      <Navbar />

      <header className='header-bg'>
        <div className='header'>
          <div className='content'>
            <h1>Turbocharge Your Online Success with Expert SEO Services</h1>
            <p>
              SEO is the Definitive Path to Securing Your Place at the Peak of
              Online Success.
            </p>
            <a href='#'>
              <button>Learn More</button>
            </a>
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
        <h2>
          Our Comprehensive <br /> SEO Services{" "}
        </h2>
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
                    <img src={ff} alt='image' />
                    <h4 className='card-title'>
                      Keyword Research & Strategy
                    </h4>{" "}
                    <br />
                    <p className='card-text'>
                      Uncover your online potential with our expert keyword
                      research and strategy. Our analysis of search trends,
                      competition, and audience intent informs a strategic
                      keyword plan to drive traffic and boost your digital
                      success.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff1} alt='image' />
                    <h4 className='card-title'>Link Building</h4> <br />
                    <p className='card-text'>
                      Enhance your website's authority and credibility through
                      strategic link-building techniques, driving organic
                      traffic and improving your search engine rankings
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff2} alt='image' />
                    <h4 className='card-title'>Technical SEO</h4> <br />
                    <p className='card-text'>
                      Elevate your website's performance and user experience
                      with meticulous technical optimizations that ensure search
                      engines can crawl, index, and understand your content
                      effectively.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff3} alt='image' />
                    <h4 className='card-title'>Franchise SEO</h4> <br />
                    <p className='card-text'>
                      Tailored strategies that leverage the unique needs of
                      franchise businesses ensuring a consistent online presence
                      across multiple locations and maximizing local search
                      visibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff4} alt='image' />
                    <h4 className='card-title'>Amazon SEO</h4> <br />
                    <p className='card-text'>
                      Stand out in the competitive Amazon marketplace with
                      Amazon-specific SEO tactics that drive your products to
                      the top of search results, increasing visibility and
                      sales.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff5} alt='image' />
                    <h4 className='card-title'>Shopify SEO</h4> <br />
                    <p className='card-text'>
                      Elevate your Shopify store's visibility and rankings with
                      specialized SEO strategies designed to optimize product
                      pages, collections, and overall website performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff6} alt='image' />
                    <h4 className='card-title'>eCommerce SEO</h4> <br />
                    <p className='card-text'>
                      Transform your online store into a powerhouse with
                      comprehensive SEO strategies tailored to ecommerce
                      platforms, driving higher traffic and boosting sales.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff7} alt='image' />
                    <h4 className='card-title'>
                      Conversion Rate Optimization (CRO)
                    </h4>{" "}
                    <br />
                    <p className='card-text'>
                      Unlock your website's full potential with strategic
                      optimizations that enhance user experience, streamline
                      customer journeys, and ultimately drive higher conversion
                      rates.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff8} alt='image' />
                    <h4 className='card-title'>Content Writing</h4> <br />
                    <p className='card-text'>
                      Fuel your digital journey with captivating, SEO-optimized
                      content that resonates with your audience, increases
                      engagement, and establishes your brand as an industry
                      leader.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff9} alt='image' />
                    <h4 className='card-title'>Local SEO</h4> <br />
                    <p className='card-text'>
                      Dominate your local market with targeted optimizations
                      that put your business on the map, making it easier for
                      nearby customers to find you online.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff10} alt='image' />
                    <h4 className='card-title'>Off-Page SEO</h4> <br />
                    <p className='card-text'>
                      Expand your digital footprint beyond your website through
                      off-page strategies like content outreach and social media
                      engagement, boosting your brand's online authority.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card custom-card'>
                  <div className='card-body'>
                    <img src={ff11} alt='image' />
                    <h4 className='card-title'>On-Page SEO</h4> <br />
                    <p className='card-text'>
                      Craft compelling web pages optimized for search engines
                      and users alike, utilizing strategic keyword placement,
                      meta tags, and content enhancements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className='text-center p-5'
        style={{
          backgroundColor: " #226666",
          height: "30.375rem",
          color: "white",
        }}
      >
        <div className='container'>
          <h2>Why you need SEO?</h2>
          <p>
            Enhance Your Brand's Visibility and Success with Our Unmatched SEO
            Expertise.
          </p>{" "}
          <br />
          <div className='row'>
            <div className='col-md-3'>
              <h2>70%</h2>
              <p>of online experiences begin with a search engine</p>
            </div>
            <div className='col-md-3'>
              <h1>90%</h1>
              <p>
                of global traffic comes from Google search, Google Images, and
                Google Maps.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>53.5%</h1>
              <p>
                of global traffic comes from Google search, Google Images, and
                Google Maps.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>0.78%</h1>
              <p>of Google searchers click on results from the 2nd page.</p>
            </div>
          </div>
        </div>
      </div>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3>Why Choose Amorserv SEO Services?</h3>

            <p>
              Our SEO experts have in-depth knowledge of SEO best practices and
              are eager to help you out.
            </p>
            <div className='row pt-5'>
              <div className='col-md-4'>
                <img src={ff12} alt='image' />
                <h3>Experience Matters</h3>
                <p>
                  With years of hands-on experience in the dynamics of SEO, we
                  bring a wealth of insights and strategies that have stood the
                  test of evolving algorithms and industry shifts.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff13} alt='image' />
                <h3>Dedicated SEO Professionals</h3>
                <p>
                  Our team is composed of passionate SEO specialists who are
                  fully dedicated to crafting personalized strategies tailored
                  to your brand's unique goals and challenges.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff14} alt='image' />
                <h3>Relationships & Results</h3>
                <p>
                  We don't just deliver results; we build lasting partnerships.
                  Your success is our success, and our commitment to achieving
                  remarkable outcomes goes hand in hand with fostering strong
                  client relationships.
                </p>
              </div>

              <div className='col-md-4'>
                <img src={ff15} alt='image' />
                <h3>We’re Always Getting Better</h3>
                <p>
                  In the ever-changing landscape of digital marketing, we stay
                  ahead of the curve. We continuously refine our skills and stay
                  up-to-date with the latest trends, ensuring your strategies
                  are always at the cutting edge.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff7} alt='image' />
                <h3>We Play Fair</h3>
                <p>
                  Ethics are at our core. Our approach to SEO in Canada and
                  beyond adheres to industry best practices, ensuring that your
                  brand's online reputation remains untarnished and your success
                  is built on solid foundations.
                </p>
              </div>
              <div className='col-md-4'>
                <img src={ff2} alt='image' />
                <h3>Transparent Reporting</h3>
                <p>
                  Open communication is key. Our reporting provides clear
                  insights into your SEO campaigns' progress, giving you a
                  transparent view of how our strategies are driving tangible
                  results for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='container-lg my-4'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'>Amorserv Agile SEO Methodology</h3>
          </div>
          <p className='my-4 pt-5 text-center'>
            We adopt tailored strategies to fuel captivating content. Meticulous
            monitoring to ensure growth, adapting to your brand journey.
          </p>

          <section id='sec-6' className='py-5'>
            <div className='container-lg my-4'>
              {/* <div className='col-12 text-center'>
                <h3 className='mb-4'>Our Simplified 3-Step Process</h3>
              </div> */}
              {/* <h5 className='my-4 text-center'>
                For Maximizing Your Digital Marketing Success
              </h5> */}

              <div
                className='centered-container'
                style={{ marginTop: "-160px" }}
              >
                <div className='threestep'>
                  <img src={threestep} alt='3-Step' />
                </div>
              </div>
            </div>
          </section>
          <div className='text-center' style={{ marginTop: "-160px" }}>
            <a href='#' className='btn mt-4 btn-real'>
              Get Started
            </a>
          </div>
        </div>
      </section>

      <ContactForm />
      <section id='sec-6' className='py-5'>
        <div className='container-lg my-4'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'>Search Engine Optimization FAQs</h3>
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
                style={{ width: "100%", height: "6rem", flexShrink: "0" }}
                onClick={() => handleButtonClick(1)}
              >
                What is SEO and why is it important?{" "}
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
              <div className='card card-body'>
                SEO, or Search Engine Optimization, is the practice of
                optimizing your website to rank higher on search engine results
                pages (SERPs). It's crucial because higher rankings mean
                increased visibility, more organic traffic, and a better chance
                of reaching your target audience.{" "}
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
                style={{ width: "100%", height: "6rem", flexShrink: "0" }}
                onClick={() => handleButtonClick(2)}
              >
                How long does it take to see SEO results?{" "}
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
              <div className='card card-body'>
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
