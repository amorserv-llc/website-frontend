/** @format */

import React, { useRef } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import nike from "../Assets/nike.png";
import cola from "../Assets/cola.png";
import amzon from "../Assets/amzon.png";
import cvs from "../Assets/cvs.png";
import cisco from "../Assets/cisco.png";
import pp from "../Assets/pp.png";
import mascard from "../Assets/mascard.png";
import f1 from "../Assets/f1.png";
import f2 from "../Assets/f2.png";
import f3 from "../Assets/f3.png";
import f4 from "../Assets/f4.png";
import g1 from "../Assets/g1.png";
import digi from "../Assets/digi.png";
import paid from "../Assets/paid.png";
import social from "../Assets/social.png";
import website from "../Assets/website.png";
import webop from "../Assets/webop.png";
import searchop from "../Assets/searchop.png";
import email from "../Assets/email.png";
import branding from "../Assets/branding.png";
import threemob from "../Assets/threemob.png";
import threestep from "../Assets/threestep.png";
import t1 from "../Assets/t1.png";
import t2 from "../Assets/t2.png";
import t3 from "../Assets/t3.png";
import Form from "./layout/ContactForm";
import Navbar from "./layout/TopNavbar";
import { Link } from "react-router-dom";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import jsPDF from "jspdf";
import TestimonialCarousel from "./layout/TestimonialCarousel";
import SectionLogo from "./layout/SectionLogo";
import CarouselCard from "./layout/CarouselCard";
import ContactForm from "./layout/ContactForm";

export default function Index() {
  const handleCallButtonClick = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Hello, this is your PDF!", 10, 10); // Add your content here
    doc.save("downloaded-file.pdf");
  };

  return (
    <>
      <div style={{ paddingBottom: "90px" }}>
        <Navbar />
      </div>
      <Header />
      <section id='sec-2' className='py-5'>
        <div className='container-lg my-4'>
          <div className='row mb-2'>
            <div className='col-12 text-center'>
              <h3 className='mb-4'>Some of our Clients</h3>
            </div>
          </div>
        </div>

        <div className='client-wrapper'>
          <div className='client-carousel'>
            <div className='sliding'>
              <Slide
                canSwipe={true}
                infinite={true}
                duration={2000}
                autoplay={true}
                cssClass='slide-show'
                defaultIndex={1}
                responsive={[
                  {
                    breakpoint: 900,

                    settings: {
                      slidesToShow: 5,

                      slidesToScroll: 2,
                    },
                  },

                  {
                    breakpoint: 700,

                    settings: {
                      slidesToShow: 4,

                      slidesToScroll: 1,
                    },
                  },

                  {
                    breakpoint: 500,

                    settings: {
                      slidesToShow: 3,

                      slidesToScroll: 1,
                    },
                  },

                  {
                    breakpoint: 300,

                    settings: {
                      slidesToShow: 2,

                      slidesToScroll: 1,
                    },
                  },
                ]}
              >
                <SectionLogo img={nike} />

                <SectionLogo img={cola} />

                <SectionLogo img={amzon} />

                <SectionLogo img={cvs} />

                <SectionLogo img={cisco} />

                <SectionLogo img={pp} />

                <SectionLogo img={mascard} />

                <SectionLogo img={nike} />

                <SectionLogo img={cola} />

                <SectionLogo img={amzon} />

                <SectionLogo img={cvs} />

                <SectionLogo img={cisco} />

                <SectionLogo img={pp} />

                <SectionLogo img={mascard} />
              </Slide>
            </div>
          </div>
        </div>
      </section>{" "}
      <br />
      <br />
      <section id='sec-3' className='py-4'>
        <div className='container-lg my-3'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'>Feeling overwhelmed by Digital Marketing?</h3>
          </div>
          <div className='row secview'>
            <div className='col-md-3 mb-5 hmd'>
              <div>
                <img
                  src={f1}
                  className='
                homeimg'
                />
              </div>
              <p>Struggling to navigate the complex digital world?</p>
            </div>
            <div className='col-md-3 mb-5 hmd'>
              <div className='d-flex'>
                <img src={f2} />
              </div>
              <p>Feeling frustrated with low online presence?</p>
            </div>
            <div className='col-md-3 mb-5 hmd'>
              <div>
                <img src={f3} />
              </div>
              <p>Feeling held back by digital marketing challenges?</p>
            </div>
            <div className='col-md-3 mb-5 hmd'>
              <div>
                <img src={f4} />
              </div>
              <p>
                Worried about missing opportunities to connect with your
                audience?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='sec-0' className='py-5'>
        <div className='container-lg my-4'>
          <div className='row'>
            <div className='col-lg-6 align-items-center d-flex justify-content-center'>
              <img src={g1} alt='...' />
            </div>
            <div
              className='col-lg-6 align-items-center col-lg-6 col-md-12'
              style={{ marginTop: "80px" }}
            >
              <h3 className='mb-4'>Take control of your online success.</h3>

              <span className='my-4'>
                We understand your struggles and are here to help. Let us be
                your guide and empower your brand with personalized,
                results-driven digital marketing strategies. <br /> <br /> As
                your trusted digital marketing guide, we offer personalized
                strategies that are results-driven, saving you time and effort.
              </span>

              <div
                onClick={handleCallButtonClick}
                style={{ marginTop: "50px" }}
              >
                <Link className='btn-real btn btn-danger mb-3 mobile-center-button'>
                  Get Free Proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='sec-5' className='py-5'>
        <div className='container-lg'>
          <div className='col-12'>
            <h3 className='mb-4'>
              Discover our range of services designed to <br /> boost your
              online presence
            </h3>
          </div>
          <div className='row justify-content-center my-5'>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img
                src={digi}
                width='25px'
                alt='...'
              />
              <span href='' className='px-2 serv-link'>
                Digital Marketing
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img
                src={paid}
                width='25px'
                alt='...'
              />
              <span href='' className='px-2 serv-link'>
                Paid Media
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img
                src={branding}
                width='25px'
                alt='...'
              />
              <span href='' className='px-2 serv-link'>
                Branding
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img
                src={social}
                width='25px'
                alt='...'
              />
              <span href='' className='px-2 serv-link'>
                Social Media
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={website} width='25px' alt='...' />
              <span href='' className='px-2 serv-link'>
                Website Development
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img src={webop} width='25px' alt='...' />
              <span href='' className='px-2 serv-link'>
                Website Optimization
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img
                src={searchop}
                width='25px'
                alt='...'
              />
              <span href='' className='px-2 serv-link'>
                Search Engine Optimazation
              </span>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <img
                src={email}
                width='25px'
                alt='...'
              />
              <span href='' className='px-2 serv-link'>
                Email Marketing
              </span>
            </button>
            <div className='text-center'>
              <h4 className='downt'>Get free marketing guide</h4>

              <Link
                onClick={generatePDF}
                className='btn mt-4 btn-real'
                to='/'
                style={{ color: "white", width: "200px" }}
              >
                Download Our Free Guide{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id='sec-6'>
        <div className='container-lg my-4'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'>Our Simplified 3-Step Process</h3>
          </div>
          <h5 className='my-4 text-center'>
            For Maximizing Your Digital Marketing Success{" "}
          </h5>

          <div className='centered-container' style={{ marginTop: "-160px" }}>
            <div className='threestep'>
              <img src={threestep} alt='3-Step' />
            </div>
            <div className='threemob'>
              <img src={threemob} alt='3-mobile' />
            </div>
          </div>

          <div className='text-center' style={{ marginTop: "-170px" }}>
            <p style={{ color: "#266", fontSize: "1.2rem" }}>
              it's Time to take controle of your online presence
            </p>
            <div onClick={handleCallButtonClick}>
              <Link className='btn mt-4 btn-real'>Get Free Proposal</Link>
            </div>
          </div>
        </div>
      </section>
      <section id='sec-6'>
        <div className='container-lg pt-5 mb-5'>
          <div className='col-12'>
            <h3 className='mb-4 fw-bold'>
              Trusted by Thousands of <br />
              Happy Customers
            </h3>
            <p className='text-center'>
              Proudly impacting industries with the best digital strategies.
              Hear <br />
              from our valued clients, not just us.
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
      <Footer />
    </>
  );
}
