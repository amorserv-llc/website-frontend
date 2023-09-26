/** @format */

import React from "react";
import Navbar from "./layout/TopNavbar";
import terms from "../Assets/terms.png";
import Footer from "./layout/Footer";

export default function () {
  return (
    <>
      <div style={{ paddingBottom: "90px" }}>
        <Navbar />
      </div>

      <div className='header-bg'>
        <div className='header'>
          <div className='content'>
            <h1>Terms & Conditions</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis est tempus a
              risus quam sed urna mauris id.
            </p>
            <a href='#' className='btn mt-4 btn-real me-auto w-auto'>
              Schedule a Call
            </a>
          </div>
          <div>
            <img src={terms} alt='header-image' />
          </div>
        </div>
      </div>

      <section
        id='terms'
        className='container-lg  pt-5'
        style={{ marginTop: "200px" }}
      >
        <p>
          These terms and conditions ("Terms") govern your use of the Amorserv
          Consulting website and services. By accessing our website or engaging
          our services, you agree to comply with these Terms. Please read them
          carefully. <br />
          1. Services: Amorserv Consulting provides digital marketing services
          as described on our website. The scope, timeline, and deliverables of
          each service will be outlined in a separate agreement. <br />
          2. Payment: Payment for services will be based on the terms agreed
          upon in the service agreement. Invoices are to be settled within the
          specified timeframe. <br />
          3. Confidentiality: Both parties agree to maintain the confidentiality
          of any sensitive information shared during the course of our
          engagement. <br />
          4. Intellectual Property: All materials, including but not limited to
          content, designs, and strategies developed by Amorserv Consulting
          remain the intellectual property of Amorserv Consulting. <br />
          5. Client Responsibilities: Clients are responsible for providing
          accurate information, timely feedback, and any necessary access to
          their systems for the successful execution of services. <br />
          6. Limitation of Liability: Amorserv Consulting shall not be liable
          for any direct, indirect, or consequential damages arising from the
          use of our services or website. <br />
          7. Termination: Either party may terminate services at any time by
          providing written notice. Termination terms will be outlined in the
          service agreement. <br />
          8. Governing Law: These Terms shall be governed by and construed in
          accordance with the laws of [Your Jurisdiction], without regard to its
          conflict of law principles. <br />
          9. Changes to Terms: Amorserv Consulting reserves the right to update
          or modify these Terms at any time without prior notice. <br />
          10. Contact Us: For any questions or concerns regarding these Terms,
          please contact us. By using our website or services, you acknowledge
          that you have read, understood, and agreed to these Terms and
          Conditions. <br />
        </p>
      </section>

      <Footer />
    </>
  );
}
