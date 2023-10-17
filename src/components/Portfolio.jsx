/** @format */

import React from "react";
import portfolio from "../Assets/portfolio.png";

import port1 from "../Assets/port1.png";
import port2 from "../Assets/port2.png";
import port3 from "../Assets/port3.png";
import port4 from "../Assets/port4.png";
import port5 from "../Assets/port5.png";
import port6 from "../Assets/port6.png";
import Footer from "./layout/Footer";
import t1 from "../Assets/t1.png";
import t2 from "../Assets/t2.png";
import t3 from "../Assets/t3.png";

import Navbar from "./layout/TopNavbar";
import { Link } from "react-router-dom";
import TestimonialCarousel from "./layout/TestimonialCarousel";
import CarouselCard from "./layout/CarouselCard";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


export default function Portfolio() {
  return (
    <>
      <div style={{ paddingBottom: "90px" }}>
        <Navbar />
      </div>

      <header className='header-bg'>
        <div className='header'>
          <div className='content'>
            <h1>
              Explore our Portfolio for <br /> More Insight.
            </h1>

            <p className='rapp' style={{ width: '100%' }}>
            Dive into our portfolio for a closer look at our dynamic <br /> projects. Witness how our strategies have transformed <br /> businesses. Our work is a testament to our expertise, <br />innovation, and commitment to driving success.
            </p>
            <div className="pbtn">
              <Link to='/about-us'>
              <button  style={{ width: '30%' }}>Free Consultation</button>
            </Link> 
            </div>
           
          </div>
          <div className='image'>
            <img src={portfolio} className='img-fluid' alt='header-image' />
          </div>
        </div>
      </header>

      <section id='port-1' className='py-5 '>
        <div className='container-lg my-4 portfolio'>
          <div className='row gx-md-5'>
            <div className='col-md-6 my-4'>
              <div className='card'>
                <img className='card-img-top' src={port1} alt='...' />
                <div className='py-3 px-4'>
                  <a href='' className='card-title'>
                    TechNova Solutions
                  </a>
                  <p>
                    TechNova Solutions, a dynamic player in the IT sector,
                    partnered with Amorserv Consulting to boost their online
                    visibility and reach. Through meticulous keyword research,
                    on-page optimization, and strategic content creation, we
                    propelled TechNova's website to the forefront of search
                    engine results.
                  </p>
                  <p className='lh-md'>
                    The result? A staggering 150% increase in organic traffic,
                    with a marked uptick in qualified leads and conversions. Our
                    tailored content not only educated their audience but also
                    positioned TechNova as a thought leader in their field,
                    solidifying their industry authority.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card'>
                <img className='card-img-top' src={port2} alt='...' />
                <div className='py-3 px-4'>
                  <a href='' className='card-title'>
                    FreshBite Restaurants
                  </a>
                  <p>
                    FreshBite Restaurants, a bustling culinary establishment,
                    entrusted Amorserv Consulting to enhance their social media
                    presence and engage their hungry audience. Leveraging
                    data-driven insights, we crafted compelling social media
                    campaigns that resonated with their target demographic.
                  </p>
                  <p className='lh-md'>
                    By curating visually appealing content and implementing
                    strategic posting schedules, we managed to double their
                    follower count within a mere quarter. Moreover, our
                    innovative campaigns spurred a 30% increase in restaurant
                    reservations, translating online buzz into real-world foot
                    traffic.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card'>
                <img className='card-img-top' src={port3} alt='...' />
                <div className='py-3 px-4'>
                  <a href='' className='card-title'>
                    Blossom Beauty
                  </a>
                  <p>
                    Blossom Beauty, a wellness brand dedicated to self-care,
                    collaborated with Amorserv Consulting to cultivate an
                    authoritative digital voice. Our expert content creators
                    designed a series of informative and engaging blog posts
                    that not only educated Blossom Beauty's audience but also
                    resonated with their values.
                  </p>
                  <p className='lh-md'>
                    This strategy led to a remarkable 40% surge in website
                    traffic, solidifying their position as a reliable source of
                    beauty insights. Through consistent, value-driven content,
                    Blossom Beauty established itself as an industry thought
                    leader, fostering customer trust and loyalty.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card'>
                <img className='card-img-top' src={port4} alt='...' />
                <div className='py-3 px-4'>
                  <a href='' className='card-title'>
                    Quantum Electronics
                  </a>
                  <p>
                    Quantum Electronics, a leading player in electronics
                    manufacturing, joined forces with Amorserv Consulting to
                    amplify their digital reach through targeted PPC
                    advertising. Employing a data-driven approach, we
                    meticulously selected keywords aligned with Quantum's
                    offerings, crafting compelling ad copies that resonated with
                    their audience.
                  </p>
                  <p className='lh-md'>
                    The result was a remarkable 25% increase in online leads
                    within the first quarter. Our strategic bid management and
                    ad optimization not only drove rapid results but also
                    positioned Quantum as a prominent industry player, expanding
                    their customer base and boosting ROI.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card'>
                <img className='card-img-top' src={port5} alt='...' />
                <div className='py-3 px-4'>
                  <a href='' className='card-title'>
                    StyleSphere Boutique
                  </a>
                  <p>
                    StyleSphere Boutique, an emerging fashion brand, harnessed
                    the power of Amorserv Consulting's email marketing expertise
                    to nurture customer relationships and drive sales growth.
                    Through personalized email campaigns, we delivered tailored
                    content that resonated with StyleSphere's fashion-conscious
                    audience.
                  </p>
                  <p className='lh-md'>
                    This approach resulted in a remarkable 20% increase in
                    sales, as subscribers eagerly embraced exclusive offers and
                    curated content. By fostering a direct line of communication
                    with their customers, StyleSphere not only boosted revenue
                    but also solidified its brand loyalty, making each email a
                    gateway to fashion inspiration.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 my-3'>
              <div className='card'>
                <img className='card-img-top' src={port6} alt='...' />
                <div className='py-3 px-4'>
                  <a href='' className='card-title'>
                    ST
                  </a>
                  <p>
                    ST, a B2B IT service provider, collaborated with Amorserv
                    Consulting to turbocharge their lead generation efforts.
                    Employing a strategic mix of data analysis, targeted
                    outreach, and value-driven content, we ignited their sales
                    pipeline, resulting in a substantial 50% growth within a
                    short span.
                  </p>
                  <p className='lh-md'>
                    By identifying and engaging qualified prospects, we fostered
                    valuable client relationships, driving not only immediate
                    conversions but also cultivating long-term partnerships.
                    ST's growth story showcases our dedication to delivering
                    tangible results and propelling businesses toward sustained
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <button className='btn-real'>
            <Link to='/contact-us' style={{ color: "white" }}>
              Schedule a Call
            </Link>
          </button>
        </div>
      </section>
      <section id='sec-6'>
        <div className='container-lg pt-5'>
          <div className='col-12 text-center'>
            <h3 className='mb-4 fw-bold'>
              Trusted by Thousands of <br />
              Happy Customer
            </h3>
            <p>
              Discover the voices of success through the <br /> words of our
              satisfied clients.{" "}
            </p>
          </div>
        </div>
        {/* <TestimonialCarousel /> */}




        <Slide
          duration={15000}
          indicators={true}
          autoplay={true}
          cssClass='carousel-cards'
          responsive={[
            {
              breakpoint: 1200,

              settings: {
                slidesToShow: 3,

                slidesToScroll: 1,
              },
            },

            {
              breakpoint: 1000,

              settings: {
                slidesToShow: 3,

                slidesToScroll: 1,
              },
            },

            {
              breakpoint: 850,

              settings: {
                slidesToShow: 3,

                slidesToScroll: 1,
              },
            },

            // {
            //   breakpoint: 800,

            //   settings: {
            //     slidesToShow: 3,

            //     slidesToScroll: 1,
            //   },
            // },

            // {
            //   breakpoint: 700,

            //   settings: {
            //     slidesToShow: 2,

            //     slidesToScroll: 1,
            //   },
            // },

            // {
            //   breakpoint: 400,

            //   settings: {
            //     slidesToShow: 1,

            //     slidesToScroll: 1,
            //   },
            // },
          ]}
        >
          {/* <CarouselCard
            img={t3}
            name='Lizzy '
            position='CEO Bread talks'
            desc="“ Amorserv's dynamic digital strategies triggered an unprecedented surge in our sales revenue. Their insightful approach reshaped our marketing landscape ”"
            rating='5'
          /> */}

          <CarouselCard
            img={t1}
            name='Lesley Bradley'
            position='CEO Stripe'
            desc="“With Amorserv's digital tactics, our website witnessed a transformation. Visitor traffic soared twofold, with engagement metrics hitting all-time highs”"
            rating='5'
          />

          <CarouselCard
            img={t2}
            name='John Addams'
            position='CEO Teeno'
            desc="“With Amorserv's digital tactics, our website witnessed a transformation. Visitor traffic soared twofold, with engagement metrics hitting all-time highs”"
            rating='5'
          />

          <CarouselCard
            img={t3}
            name='Viezh Robert'
            position='CEO TASK'
            desc="“Amorserv's dynamic digital strategies triggered an unprecedented surge in our sales revenue. Their insightful approach reshaped our marketing landscape”"
            rating='5'
          />


          {/* <CarouselCard
            img={t2}
            name='Tega Ovri'
            position='CMO Oblivion'
            desc="“With Amorserv's digital tactics, our website witnessed a transformation. Visitor traffic soared twofold, with engagement metrics hitting all-time highs”"
            rating='5'
          />

          <CarouselCard
            img={t1}
            name='Katherina Owens'
            position='Manager, Semetrics'
            desc="“With Amorserv's digital tactics, our website witnessed a transformation. Visitor traffic soared twofold, with engagement metrics hitting all-time highs”"
            rating='5'
          /> */}
        </Slide>
      </section>
      <Footer />
    </>
  );
}
