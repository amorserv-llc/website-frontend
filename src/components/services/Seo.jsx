/** @format */

import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import seo from "../../Assets/seo.png";
import oneup from "../../Assets/oneup.png";
import twoup from "../../Assets/twoup.png";
import threeup from "../../Assets/threeup.png";
import ContactForm from "../layout/ContactForm";
import Footer from "../layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

export default function () {
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle button click and set the active button
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
  };

  // Define a CSS class to make the active button green
  const buttonClass = (buttonId) => {
    return `btn btn-light ${activeButton === buttonId ? "active-button" : ""}`;
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
                    {/* <img src={save} alt='image' className="fram" /> */}
                    <FontAwesomeIcon icon={faFileLines} />
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
                    <img src='' alt='image' />
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
                    <img src='' alt='image' />
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
                    <img src='' alt='image' />
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
                    <img src='' alt='image' />
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
                    <img src='' alt='image' />
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
                    <img src='' alt='image' />
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
                    <img src='' alt='image' />
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
                    <img src='' alt='image' />
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
                    <img src='' alt='image' />
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
                    <img src='' alt='image' />
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
                    <img src='' alt='image' />
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
        className='text-center'
        style={{ backgroundColor: " #226666", height: "300px", color: "white" }}
      >
        <div className='container'>
          <h2>Why you need SEO?</h2>
          <p>
            Enhance Your Brand's Visibility and Success with Our Unmatched SEO
            Expertise.
          </p>
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
                <img src='' alt='image' />
                <h3>Experience Matters</h3>
                <p>
                  With years of hands-on experience in the dynamics of SEO, we
                  bring a wealth of insights and strategies that have stood the
                  test of evolving algorithms and industry shifts.
                </p>
              </div>
              <div className='col-md-4'>
                <img src='' alt='image' />
                <h3>Dedicated SEO Professionals</h3>
                <p>
                  Our team is composed of passionate SEO specialists who are
                  fully dedicated to crafting personalized strategies tailored
                  to your brand's unique goals and challenges.
                </p>
              </div>
              <div className='col-md-4'>
                <img src='' alt='image' />
                <h3>Relationships & Results</h3>
                <p>
                  We don't just deliver results; we build lasting partnerships.
                  Your success is our success, and our commitment to achieving
                  remarkable outcomes goes hand in hand with fostering strong
                  client relationships.
                </p>
              </div>

              <div className='col-md-4'>
                <img src='' alt='image' />
                <h3>We’re Always Getting Better</h3>
                <p>
                  In the ever-changing landscape of digital marketing, we stay
                  ahead of the curve. We continuously refine our skills and stay
                  up-to-date with the latest trends, ensuring your strategies
                  are always at the cutting edge.
                </p>
              </div>
              <div className='col-md-4'>
                <img src='' alt='image' />
                <h3>We Play Fair</h3>
                <p>
                  Ethics are at our core. Our approach to SEO in Canada and
                  beyond adheres to industry best practices, ensuring that your
                  brand's online reputation remains untarnished and your success
                  is built on solid foundations.
                </p>
              </div>
              <div className='col-md-4'>
                <img src='' alt='image' />
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

          <div className='frame container'>
            <div className='group'>
              <div className='div'>
                <p className='plan-we-understand'>
                  <span className='text-wrapper'>
                    Plan
                    <br />
                  </span>
                  <span className='span'>
                    We understand your <br />
                    goals and audience.
                  </span>
                </p>
                <div className='img-wrapper'>
                  <img
                    className='architecture-plan'
                    alt='Architecture plan'
                    src={oneup}
                  />
                </div>
              </div>
              <div className='text-wrapper-2'>1</div>
            </div>
            <div className='group-2'>
              <div className='text-wrapper-2'>2</div>
              <div className='group-3'>
                <p className='p'>
                  <span className='text-wrapper-3'>
                    Plan
                    <br />
                  </span>
                  <span className='text-wrapper-4'>
                    We develop tailored <br />
                    marketing campaigns.
                  </span>
                </p>
                <div className='img-wrapper'>
                  <img
                    className='edit-note-icon'
                    alt='Edit note icon'
                    src={twoup}
                  />
                </div>
              </div>
            </div>
            <div className='group-4'>
              <div className='text-wrapper-2'>3</div>
              <div className='group-5'>
                <p className='p'>
                  <span className='text-wrapper-5'>
                    Grow
                    <br />
                  </span>
                  <span className='text-wrapper-4'>
                    We track progress and <br />
                    optimize for success.
                  </span>
                </p>
                <div className='img-wrapper'>
                  <img
                    className='grow-money-icon'
                    alt='Grow money icon'
                    src={threeup}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='text-center'>
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
                style={{ width: "100%", height: "60px" }}
                onClick={() => handleButtonClick(1)}
              >
                What is SEO and why is it important?{" "}
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

          <div className='container'>
            <p>
              <button
                className={buttonClass(2)}
                type='button'
                data-toggle='collapse'
                data-target='#collapseExample2'
                aria-expanded={activeButton === 2 ? "true" : "false"}
                aria-controls='collapseExample2'
                style={{ width: "100%", height: "60px" }}
                onClick={() => handleButtonClick(2)}
              >
                How long does it take to see SEO results?{" "}
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
