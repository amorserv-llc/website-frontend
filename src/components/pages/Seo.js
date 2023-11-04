/** @format */

import React from "react";
import ContactForm from "../layouts/ContactForm";
import HeroBg from "../organism/hero-bg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import QuestionAnswer from "../molecules/quest-answer";

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
import seo from "../../Assets/seo.png";
import threemob from "../../Assets/threemob.png";
import threestep from "../../Assets/threestep.png";
import ff from "../../Assets/ff.png";

export default function Seo() {
  const handleCallButtonClick = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>SEO - Amorserv Consulting</title>
        <meta name='description' content='Amorserv Consulting SEO Page' />
      </Helmet>
   
      <HeroBg
        title={"Turbocharge Your Online Success with Expert SEO Services".toUpperCase()}
        desc='   SEO is the Definitive Path to Securing Your Place at the Peak of
        Online Success.'
        link=''
        linkTitle='Schedule a Call'
        img={seo}
      />
      <section
        className='service-feat p-5'
        style={{ backgroundColor: "#eff3fd" }}
      >
        <h2 className='pb-4' style={{ fontSize: "3rem" }}>
          Our Comprehensive SEO Services{" "}
        </h2>
        <p className='text-center' style={{ fontSize: "1.5rem" }}>
          Maximize your online presence with our SEO services for <br />
          visibility and success.
        </p>
        <div className='contents'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff} alt='ff' />
                  <h4 className='card-title'>
                    Keyword Research & Strategy
                  </h4>{" "}
                  <br />
                  <p className='card-text'>
                    Uncover your online potential with <br />
                    our expert keyword research and <br />
                    strategy to boost your digital <br /> success.
                  </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff1} alt='seo' />
                  <h4 className='card-title'>Link Building</h4> <br />
                  <p className='card-text'>
                    Enhance your website's authority <br /> through strategic
                    link-building <br /> techniques to aid search engine <br />{" "}
                    rankings.
                  </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff2} alt='ff2' />
                  <h4 className='card-title'>Technical SEO</h4> <br />
                  <p className='card-text'>
                    Enhance website performance and <br /> user experience with
                    technical <br /> optimizations for effective search <br />{" "}
                    engine visibility.
                  </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff9} alt='ff9' />
                  <h4 className='card-title'>Local SEO</h4> <br />
                  <p className='card-text'>
                    Dominate your local market with <br /> targeted
                    optimizations that put <br /> your business on the map,
                    making <br />
                    it easier for nearby customers to <br /> find you online.
                  </p>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff11} alt='seo' />
                  <h4 className='card-title'>On-Page SEO</h4> <br />
                  <p className='card-text'>
                    Craft compelling web pages <br /> optimized for search
                    engines and <br />
                    users alike, utilizing strategic <br /> keyword placement,
                    meta tags,
                    <br /> and content enhancements.
                  </p>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff10} alt='seo' />
                  <h4 className='card-title'>Off-Page SEO</h4> <br />
                  <p className='card-text'>
                    Expand your digital footprint <br />
                    through off-page strategies like <br />
                    content outreach and social media <br /> engagement,
                    enhancing online <br /> authority.
                  </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff3} alt='seo' />
                  <h4 className='card-title'>Franchise SEO</h4> <br />
                  <p className='card-text'>
                    Tailored strategies support <br />
                    franchise businesses, ensuring <br />
                    consistent online presence across <br />
                    multiple locations, maximizing <br /> local visibility.
                  </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff5} alt='seo' />
                  <h4 className='card-title'>Shopify SEO</h4> <br />
                  <p className='card-text'>
                    Boost Shopify store visibility and <br /> rankings using
                    specialized SEO for <br /> product pages, collections, and
                    site <br /> performance.
                  </p>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff4} alt='seo' />
                  <h4 className='card-title'>Amazon SEO</h4> <br />
                  <p className='card-text'>
                    Stand out in the competitive <br />
                    Amazon marketplace with Amazon
                    <br />
                    -specific SEO tactics that drive your <br /> products to the
                    top of search <br />
                    results, increasing visibility
                    <br /> and sales.
                  </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff6} alt='seo' />
                  <h4 className='card-title'>eCommerce SEO</h4> <br />
                  <p className='card-text'>
                    Transform your online store into a <br />
                    powerhouse with comprehensive
                    <br /> SEO strategies tailored to <br /> ecommerce
                    platforms, driving <br />
                    higher traffic and boosting sales.
                  </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff8} alt='seo' />
                  <h4 className='card-title'>Content Writing</h4> <br />
                  <p className='card-text'>
                    Ignite your digital journey with SEO- <br />
                    optimized content that resonates, <br /> boosts engagement,
                    and <br /> establishes industry leadership
                  </p>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff7} alt='seo' />
                  <h4 className='card-title'>
                    Conversion Rate <br /> Optimization (CRO)
                  </h4>{" "}
                  <br />
                  <p className='card-text '>
                    Stand out in the competitive <br />
                    Amazon marketplace with Amazon
                    <br />
                    -specific SEO tactics that drive your <br />
                    products to the top of search
                    <br /> results, increasing visibility and <br />
                    sales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center whyseo p-5'>
        <div className='container'>
          <h2 className='pb-3' style={{ fontSize: "3rem" }}>
            Why you need SEO?
          </h2>
          <p>
            Enhance Your Brand's Visibility and Success with Our Unmatched SEO
            Expertise.
          </p>{" "}
          <br />
          <div className='row'>
            <div className='col-md-3'>
              <h1>70%</h1>
              <p>
                of online experiences begin <br /> with a search engine
              </p>
            </div>
            <div className='col-md-3'>
              <h1>90%</h1>
              <p>
                of global traffic comes from <br /> Google search, Google
                Images, <br />
                and Google Maps.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>53.5%</h1>
              <p>
                of global traffic comes from <br />
                Google search, Google <br />
                Images, and Google Maps.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>0.78%</h1>
              <p>
                of Google searchers click on <br />
                results from the 2nd page.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3 className='pb-4' style={{ fontSize: "3rem" }}>
              Why Choose Amorserv SEO Services?
            </h3>

            <p>
              Our SEO experts have in-depth knowledge of SEO best practices and
              are eager to help you out.
            </p>
            <div className='row pt-5'>
              <div className='col-md-4 pt-5'>
                <img src={ff12} alt='seo' />
                <h3 className='pt-4'>Experience Matters</h3>
                <p>
                  Years of SEO expertise bring valuable <br />
                  insights and strategies that adapt to <br />
                  evolving algorithms and industry <br />
                  changes
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff13} alt='seo' />
                <h3 className='pt-4'>Dedicated SEO Professionals</h3>
                <p>
                  Our passionate SEO specialists craft <br /> tailored
                  strategies dedicated to your <br /> brand's unique goals and
                  challenges.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff14} alt='seo' />
                <h3 className='pt-4'>Relationships & Results</h3>
                <p>
                  We build lasting partnerships, your <br /> success is ours,
                  delivering remarkable <br /> outcomes.
                </p>
              </div>

              <div className='col-md-4 pt-5'>
                <img src={ff15} alt='seo' />
                <h3 className='pt-4'>We’re Always Getting Better</h3>
                <p>
                  In the dynamic digital landscape, we <br />
                  lead. Continuously refining skills,
                  <br /> staying current with trends, ensuring <br />{" "}
                  cutting-edge strategies
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff7} alt='seo' />
                <h3 className='pt-4'>We Play Fair</h3>
                <p>
                  Ethics are core. Our SEO follows best <br /> practices,
                  safeguarding your online <br /> reputation and ensuring
                  success
                </p>
              </div>
              <div className='col-md-4 pt-5 '>
                <img src={ff2} alt='seo' />
                <h3 className='pt-4'>Transparent Reporting</h3>
                <p>
                  Open communication is key. Our <br />
                  reporting offers clear insights into <br />
                  your SEO progress, showcasing <br />
                  tangible results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='container-lg'>
          <div className='col-12 text-center'>
            <h3 className='mb-4' style={{ fontSize: "3rem" }}>
              Amorserv Agile SEO Methodology
            </h3>
          </div>
          <p className='seopage'>
            We adopt tailored strategies to fuel captivating content. Meticulous
            monitoring to ensure growth, adapting to your brand journey.
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
              <h3 className='mb-4' style={{ fontSize: "3rem" }}>
                Let’s Grow your Business
              </h3>
            </div>
            <p>
              Fuel your brand's growth with our best SEO strategies that drive{" "}
              <br /> success.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='container-lg my-4'>
          <div className='col-12'>
            <h3 className='mb-4' style={{ fontSize: "3rem" }}>
              Search Engine Optimization FAQs
            </h3>
          </div>
        </div>
      </section>

      <div className='faq-container'>
        <div className='faq-section-one'>
          <div className='faqs'>
            <QuestionAnswer
              question='What is SEO and why is it important?'
              answer="SEO, or Search Engine Optimization, is the practice of optimizing your website to rank higher on search engine results pages (SERPs). It's crucial because higher rankings mean increased visibility, more organic traffic, and a better chance of reaching your target audience."
            />

            <QuestionAnswer
              question='How long does it take to see SEO results?'
              answer='SEO results vary based on factors like website age, competition, and the effectiveness of your strategies. Typically, noticeable improvements might take a few months.'
            />

            <QuestionAnswer
              question='What are keywords and how do they impact SEO?'
              answer="Keywords are search terms users type into search engines. Properly using keywords in your content, titles, and meta descriptions helps search engines understand your content's relevance, boosting your chances of ranking higher for those terms."
            />

            <QuestionAnswer
              question='Is local SEO important for businesses? '
              answer='Yes, local SEO is vital for businesses targeting a local audience. It helps your business appear in local searches, improves visibility on Google, and connects you with nearby customers searching for your products or services.'
            />
            <QuestionAnswer
              question='What is the difference between on-page and off-page SEO?'
              answer="On-page SEO involves optimizing elements within your website, like content and HTML tags. Off-page SEO focuses on external factors, primarily building quality backlinks from reputable sources to increase your site's authority."
            />
          </div>
        </div>
      </div>

    </>
  );
}
