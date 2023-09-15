/** @format */

import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import smo from '../../Assets/smo.png'
import oneup from "../../Assets/oneup.png";
import twoup from "../../Assets/twoup.png";
import threeup from "../../Assets/threeup.png";
import ContactForm from "../layout/ContactForm";
import Footer from "../layout/Footer";

export default function Smm() {

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

      <header class="header-bg">
            <div class="header">
                <div class="content">
                    <h1>
                      How SMO builds your brand awareness?
                    </h1>

                    <p>Social Media Marketing is a cost-effective way to maximize brand awareness and witness tangible results as your message resonates across social channels.</p>

                    <a href="#"><button>Schedule a Call</button></a>
                </div>
                <div class="image">
                    <img src={smo} class="img-fluid" alt="header-image" />
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
                    {/* <FontAwesomeIcon icon={faFileLines} /> */}
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
         
            </div>
          </div>
        </div>
      </section>





      <div
        className='text-center'
        style={{ backgroundColor: " #226666", height: "300px", color: "white" }}
      >
        <div className='container'>
          <h2>Why you need Social Media Marketing?</h2>
          <p>
          Social media marketing service is essential in expanding your brand reach, engagement, <br /> and driving conversions.
          </p>
          <div className='row'>
            <div className='col-md-3'>
              <h2>65%</h2>
              <p>of online experiences begin with a search engine</p>
            </div>
            <div className='col-md-3'>
              <h1>78%</h1>
              <p>
              of consumers are willing to buy from brands after a positive social media experience.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>91%</h1>
              <p>
              of executives will increase social media marketing budgets in the next 3 years
              </p>
            </div>
            <div className='col-md-3'>
              <h1>72.2%</h1>
              <p>of companies use social media data to inform business decisions</p>
            </div>
          </div>
        </div>
      </div>





      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3>Why Choose Amorserv SM Services?</h3>

            <p>
            Unlock a journey to online success with SEO expertise that delivers exceptional results
            </p>
            <div className='row pt-5'>
              <div className='col-md-4'>
                <img src='' alt='image' />
                <h3>Data Driven</h3>
                <p>
                At Amorserv Consulting, we propel your success through strategies meticulously crafted from data analysis. Every move we make is rooted in insights, ensuring your campaigns outperform and drive remarkable growth.
                </p>
              </div>
              <div className='col-md-4'>
                <img src='' alt='image' />
                <h3>Dedicated SM Professionals</h3>
                <p>
                We boasts of a team of devoted  social media experts, tirelessly working to elevate your brand's online presence. With unwavering dedication, we bring your vision to life in the digital space, ensuring your message resonates with your target audience.
                </p>
              </div>
              <div className='col-md-4'>
                <img src='' alt='image' />
                <h3>Certified Experts</h3>
                <p>
                Place your trust in our industry-certified SM professionals. Our team's extensive qualifications and expertise empower campaigns with specialized skills, providing you with a competitive edge that's backed by knowledge.
                </p>
              </div>

              <div className='col-md-4'>
                <img src='' alt='image' />
                <h3>Industry Insights</h3>
                <p>
                Navigate the digital landscape with unwavering confidence. We equip you with insights garnered from years of experience. These insights give your brand an edge, propelling it beyond competition and into a realm of sustained success.
                </p>
              </div>
              <div className='col-md-4'>
                <img src='' alt='image' />
                <h3>Team Support</h3>
                <p>
                Collaboration lies at the heart of our approach. With a passionate and dedicated SM team by your side, you're not just another client – you're a partner on a journey toward growth. Your goals are our goals, and we're committed to your brand's ascent.
                </p>
              </div>
              <div className='col-md-4'>
                <img src='' alt='image' />
                <h3>Transparent Reporting</h3>
                <p>
                We prioritize transparency. Our reporting is more than numbers; it's a detailed map guiding your brand's journey. Witness the impact of your campaigns as we lay out the metrics, ensuring you're informed and empowered every step of the way.
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
          <p className='my-4 pt-5 text-center'>
          We adopt tailored strategies fuel captivating content. Meticulous monitoring to ensure growth, adapting to your brand journey.
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
                style={{ width: "100%", height: "60px" }}
                onClick={() => handleButtonClick(1)}
              >
                What is social media marketing?{" "}
              </button>
            </p>
            <div
              className={`collapse ${activeButton === 1 ? "show" : ""}`}
              id='collapseExample1'
            >
              <div className='card card-body'>
              Social media marketing is the strategic use of social platforms to connect with your audience, build brand awareness, engage users, and ultimately achieve business goals.{" "}
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
                What are the 5 ways of social media marketing?{" "}
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
