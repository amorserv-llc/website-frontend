/** @format */

import React from "react";
import TopNavbar from "../../components/layout/TopNavbar";

import braimage from "../../Assets/braimage.png";
export default function Branding() {
  return (
    <>
      <div style={{ paddingBottom: "90px" }}>
        <Navbar />
      </div>

      <header className='header-bg'>
        <div className='header'>
          <div className='content'>
            <h1>Ignite Your Brand's Essence through Expert Branding</h1>
            <p className='rapp'>
              Crafting Authentic, Memorable Brands for Lasting Impressions{" "}
              <br /> and Business Growth.
            </p>
            <a href=''>
              <button>Schedule a Call</button>
            </a>
          </div>
          <div className=''>
            <img
              src={braimage}
              className='img-fluid'
              alt='header-image'
              style={{}}
            />
          </div>
        </div>
      </header>

      <section id='sec-5' className='py-5'>
        <div className='container-lg'>
          <div className='col-12 text-center'>
            <h3 className='mb-4'>
              Discover Our Comprehensive Branding Services
            </h3>
            <p>
              From Identity to Storytelling, Our Branding Services Shape
              Remarkable Business Journeys.
            </p>
          </div>
          <div className='row justify-content-center my-5'>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <a href='' className='px-2 serv-link'>
                Brand Guidelines Creation{" "}
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <a href='' className='px-2 serv-link'>
                Visual Branding
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <a href='' className='px-2 serv-link'>
                Brand Strategy
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <a href='' className='px-2 serv-link'>
                Brand Identity Development
              </a>
            </button>

            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <a href='' className='px-2 serv-link'>
                Marketing Collateral Design{" "}
              </a>
            </button>
            <button
              type='button'
              className='btn btn-serv col-lg-4 col-md-aut py-3 mb-3 mx-3'
            >
              <a href='' className='px-2 serv-link'>
                Logo Design{" "}
              </a>
            </button>
          </div>
        </div>
      </section>

      <div class='container'>
        <div class='row'>
          <div class='col-md-6'>
            <img src={braimage} class='img-fluid' alt='header-image' />
          </div>
          <div class='col-md-6'>
            <ul>
              <li>Text 1</li>
              <li>Text 2</li>
              <li>Text 3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
