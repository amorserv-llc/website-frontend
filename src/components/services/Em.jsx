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
import QuestionAnswer from "../molecules/quest-answer";
import HeroBg from "../organism/hero-bg";

export default function Em() {
  const [activeButton, setActiveButton] = useState(null);
  const primaryBackgroundColor = "#D3DCE7";

  const buttonClass = (buttonId) => {
    return `btn primaryBackgroundColor ${
      activeButton === buttonId ? "active-button" : ""
    }`;
  };
  const handleButtonClick = (buttonId) => {
    setActiveButton(activeButton === buttonId ? null : buttonId);
  };

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
      <div>
        <Navbar />
      </div>
      <HeroBg
        title={" How does Email Marketing  earn loyalty for your brand?".toUpperCase()}
        desc=' Empower your business with our effective email marketing 
        strategies. Elevate engagement, drive conversions, and foster
                lasting customer relationships..'
        link=''
        linkTitle='Schedule a Call'
        img={em0}
      />

      <section
        className='service-feat p-5'
        style={{ backgroundColor: "#eff3fd" }}
      >
        <h2 style={{ fontSize: "3rem", lineHeight: "3.5rem" }}>
          Our Success-Driven Email <br /> Marketing Services{" "}
        </h2>
        <p className='text-center pt-4' style={{ fontSize: "1.5rem" }}>
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
                    Craft a captivating brand narrative <br /> with our story
                    emails, infusing your <br />
                    identity for emotional connection  <br /> andloyalty
                  </p>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff2} alt='image' />
                  <h4 className='card-title'>Transactional Emails</h4> <br />
                  <p className='card-text'>
                    Blend functionality and<br /> engagement  with transactional
                 <br />    emails. Elevate user experience, <br />integrating 
                    personalized content <br />for meaningful  interactions.
                  </p>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff3} alt='image' />
                  <h4 className='card-title'>Email Newsletters</h4> <br />
                  <p className='card-text'>
                    Engage and inform subscribers with <br /> insightful email
                    newsletters. Our <br /> expertly designed content
                     <br />establishes authority and <br />anticipation.
                  </p>
                </div>
              </div>

              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff4} alt='image' />
                  <h4 className='card-title'>Dedicated Emails</h4> <br />
                  <p className='card-text'>
                    Spotlight offers, events, and <br /> announcements with
                    dedicated <br />
                    emails. Our attention-grabbing <br /> content drives
                    immediate action.
                  </p>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff5} alt='image' />
                  <h4 className='card-title'>Lead Nurturing Emails</h4> <br />
                  <p className='card-text'>
                    Nurture leads with tailored emails, <br /> converting
                    prospects into loyal <br /> customers, boosting conversion{" "}
                    <br /> rates.
                  </p>
                </div>
              </div>
              <div className='col-md-4 text-center p-5'>
                <div className='card-body'>
                  <img src={ff6} alt='image' />
                  <h4 className='card-title'>Sponsorship Emails</h4> <br />
                  <p className='card-text'>
                    Enhance partnerships with <br />impactful 
                    sponsorship emails. <br />Create  compelling content
                   <br />  fostering mutual success and <br />engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center whyseo pt-5 pb-5'>
        <div className='container'>
          <h2 style={{ fontSize: "3rem" }}>
            Does Email Marketing Still <br /> Work?
          </h2>
          <p>
            Over the years, Email marketing stil remains effective in driving
            engagement <br /> and conversions.
          </p>
          <br />
          <div className='row'>
            <div className='col-md-3'>
              <h1>$40</h1>
              <p>
                expected average ROI for <br />
                every $1 spent on email <br /> marketing.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>81%</h1>
              <p>
                of businesses still rely on email <br />
                as their primary customer
                <br />
                acquisition channel.
              </p>
            </div>
            <div className='col-md-3'>
              <h1>5hrs</h1>
              <p>
                a day spent checking email <br /> (work+personal)
              </p>
            </div>
            <div className='col-md-3'>
              <h1>49%</h1>
              <p>
                of consumers like to receive <br /> promotional emails <br />{" "}
                from their favorite brands.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3 style={{ fontSize: "3rem" }}>
              Why you need email marketing <br /> services
            </h3>

            <p style={{ fontSize: "1.5rem", lineHeight:'2rem'}}>
              Email marketing is essential for propelling your business forward.
              It's a dynamic tool that not only nurtures customer <br />{" "}
              relationships but also drives conversions. Our email marketing
              services are meticulously designed to create <br /> personalized
              campaigns that resonate with your audience, leading to increased
              engagement and measurable results.
            </p>
            <div className='row pt-5 emp'>
              <div className='col-md-4 pt-5'>
                <img src={ff7} alt='image' />
                <h3 className='pt-4'>Build Customer Loyalty</h3>
                <p>
                  Nurture customer relationships with <br /> targeted email
                  campaigns. Our <br /> strategies foster loyalty, repeat <br />{" "}
                  business, and brand advocacy.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff8} alt='image' />
                <h3 className='pt-4'>Expand Your Business Reach</h3>
                <p>
                  Expand your market reach with global <br /> email marketing.
                  Connect with <br /> potential customers worldwide, <br />{" "}
                  fostering growth.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff9} alt='image' />
                <h3 className='pt-4'>Connect With Different Audiences</h3>
                <p>
                  Tailor messages for diverse <br />
                  audiences, driving meaningful <br /> interactions with
                  effective <br /> communication.
                </p>
              </div>

              <div className='col-md-4 pt-5'>
                <img src={ff10} alt='image' />
                <h3 className='pt-4'>Save Time and Effort</h3>
                <p>
                  Streamline communication with <br /> automated email
                  campaigns, freeing <br />
                  your time for critical business <br /> aspects.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff11} alt='image' />
                <h3 className='pt-4'>
                  Test Email Campaigns and Drive Strong Results
                </h3>
                <p>
                  Optimize outcomes with well-tested <br />
                  email campaigns. Meticulous data <br /> analysis ensures
                  higher open rates, <br /> click-throughs, conversions.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff12} alt='image' />
                <h3 className='pt-4'>Track Your Analytics</h3>
                <p>
                  Harness data-driven decision-making <br /> with our email
                  marketing. Real-time
                  <br /> analytics refine strategies, maximize <br /> ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='text-center service-feat pt-5'>
          <div className='container-lg my-4'>
            <h3 style={{ fontSize: "3rem" }}>
              Benefits of using our email marketing services
            </h3>

            <p style={{ fontSize: "1.5rem", lineHeight: '2rem' }}>
              Experience heightened customer engagement and amplified
              conversions with our data-driven email <br /> marketing expertise.
            </p>
            <div className='row pt-5'>
              <div className='col-md-4 pt-5'>
                <img src={ff1} alt='image' />
                <h3 h3 className='pt-4'>
                  Personalized Campaigns
                </h3>
                <p>
                  Tailored content resonates. Our email <br /> marketing
                  delivers personalized <br /> campaigns, boosting engagement{" "}
                  <br /> and conversion rates.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff2} alt='image' />
                <h3 h3 className='pt-4'>
                  Targeted Audience Engagement
                </h3>
                <p>
                  Reach the right audience with <br /> precision. Our strategies
                  ensure <br /> emails maximize campaign impact.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff6} alt='image' />
                <h3 h3 className='pt-4'>
                  Measurable ROI
                </h3>
                <p>
                  Track every action with <br /> comprehensive analytics.
                  Real-time <br /> insights into open rates, click- <br />
                  throughs, and conversions optimize <br />
                  ROI
                </p>
              </div>

              <div className='col-md-4 pt-5'>
                <img src={ff3} alt='image' />
                <h3 h3 className='pt-4'>
                  Real-Time Communication
                </h3>
                <p>
                  Stay current with your audience. Email <br /> marketing
                  delivers timely updates to <br /> subscribers' inboxes,
                  keeping your brand <br /> top-of-mind.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff4} alt='image' />
                <h3 h3 className='pt-4'>
                  Flexibility and Versatility
                </h3>
                <p>
                  Our services offer promotional <br /> content, educational
                  resources, and <br />
                  personalized recommendations to <br /> suit your goals.
                </p>
              </div>
              <div className='col-md-4 pt-5'>
                <img src={ff5} alt='image' />
                <h3 h3 className='pt-4'>
                  Lead Nurturing and Conversion
                </h3>
                <p>
                  Guide leads through the funnel with <br />
                  nurturing emails. Provide valuable <br /> information for
                  conversions and loyal <br />
                  customers.
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
              <h3 className='mb-4' style={{ fontSize: "3rem" }}>Supercharge Your ROI Now</h3>
            </div>
            <p>
              Contact us for a free consultation and discover the Email
              marketing <br />
              strategies that can skyrocket your return on investment
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <section id='sec-6' className='py-5'>
        <div className='container-lg my-4'>
          <div className='col-12 text-center'>
            <h3 style={{ fontSize: "3rem" }}>Email Marketing FAQs</h3>
          </div>
        </div>
      </section>

      <div className='faq-container'>
        <div className='faq-section-one'>
          <div className='faqs'>
            <QuestionAnswer
              question='What is the significance of email marketing for businesses?'
              answer='Email marketing is a powerful tool that helps businesses engage their audience, nurture leads, and drive conversions. It enables personalized communication, boosts brand loyalty, and delivers measurable ROI.'
            />

            <QuestionAnswer
              question='How can personalized email campaigns benefit my brand?  '
              answer='Personalized email campaigns resonate with recipients on an individual level, increasing open rates and engagement. By tailoring content based on recipient behavior and preferences, brands can foster deeper connections and drive higher conversions.'
            />

            <QuestionAnswer
              question='What role do analytics play in email marketing?'
              answer='Analytics provide crucial insights into campaign performance. They track metrics such as open rates, click-through rates, and conversions, allowing brands to refine strategies for optimal results and higher ROI.'
            />

            <QuestionAnswer
              question='Can email marketing help with lead generation?'
              answer='Absolutely. Email marketing is an effective lead generation tool. Through compelling content and strategically placed CTAs, brands can entice recipients to take desired actions, moving them through the sales funnel.'
            />
            <QuestionAnswer
              question='How can automated email campaigns save time and improve efficiency?'
              answer='Automated email campaigns streamline communication by sending relevant messages at predetermined intervals or triggered by user actions. This saves time, maintains consistent engagement, and nurtures leads without constant manual intervention.'
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
