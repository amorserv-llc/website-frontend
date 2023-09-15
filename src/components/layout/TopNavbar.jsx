/** @format */

import Logo from "../../Assets/Logo.png";
import { Link } from "react-router-dom";
import seoIcon from "../../Assets/seoIcon.png";
import em from "../../Assets/em.png";
import smm from "../../Assets/smm.png";
import sem from "../../Assets/sem.png";

function Navbar() {
  const navStyle = {
    background: '#FFF',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    height: '7.45494rem',
   
  };
  return (
    <section>
      <nav className='navbar navbar-expand-lg navbar-light'  style={navStyle}>
        <div className=' container-lg d-flex justify-content-between align-items-center'>
          <Link className='navbar-brand' to='/'>
            <img src={Logo} alt='Logo' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <ul className='navbar-nav d-flex flex-row'>
            <li className='nav-item mx-3 dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Services
              </a>
              <div className='dropdown-menu'>
                <Link
                  className='nav-link'
                  to='/search-engine-optimization'
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src={seoIcon} width='20' height='20' alt='...' />
                  <div style={{ marginLeft: "10px" }}>
                    <h6 className='mb-0' style={{ whiteSpace: "nowrap" }}>
                      Search Engine Optimization
                    </h6>
                    <p className='mb-0 opacity-75'>Get Found Online</p>
                  </div>
                </Link>

                <Link
                  className='nav-link'
                  to='/social-media-marketing'
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src={smm} width='20' height='20' alt='...' />
                  <div style={{ marginLeft: "10px" }}>
                    <h6 className='mb-0' style={{ whiteSpace: "nowrap" }}>
                      Social Media Management
                    </h6>
                    <p className='mb-0 opacity-75'>
                      {" "}
                      Connect with your Audience
                    </p>
                  </div>
                </Link>

                <Link
                  className='nav-link'
                  to='/email-marketing'
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src={em} width='20' height='20' alt='...' />
                  <div style={{ marginLeft: "10px" }}>
                    <h6 className='mb-0' style={{ whiteSpace: "nowrap" }}>
                      Email Marketing
                    </h6>
                    <p className='mb-0 opacity-75'>
                      Reach your Customers' Inboxes
                    </p>
                  </div>
                </Link>

                <Link
                  className='nav-link'
                  to='/search-engine-marketing'
                  style={{ display: "flex",  alignItems: "center" }}
                >
                  <img src={sem} width='20' height='20' alt='...' />
                  <div style={{ marginLeft: "10px" }}>
                    <h6 className='mb-0' style={{ whiteSpace: "nowrap" }}>
                      Search Engine Marketing
                    </h6>
                    <p className='mb-0 opacity-75'>Drive Traffic with Ads</p>
                  </div>
                </Link>
              </div>
            </li>
            <li className='nav-item mx-3'>
              <Link className='nav-link' to='/about-us'>
                About Us
              </Link>
            </li>
            <li className='nav-item mx-3'>
              <Link className='nav-link' to='/portfolio'>
                Portfolio
              </Link>
            </li>
            <li className='nav-item mx-3'>
              <Link className='nav-link' to='/blog'>
                Blog
              </Link>
            </li>
            <li className='nav-item mx-3'>
              <Link className='nav-link' to='/contact-us'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
