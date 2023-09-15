/** @format */

import Logo from "../../Assets/Logo.png";
import { Link } from "react-router-dom";
import seoIcon from "../../Assets/seoIcon.png";
import em from "../../Assets/em.png";
import smm from '../../Assets/smm.png'


function Navbar() {
  return (
    <section>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-lg d-flex justify-content-between align-items-center'>
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
                  to='/seo'
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
                  to='/smm'
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src={smm} width='20' height='20' alt='...' />
                  <div style={{ marginLeft: "10px" }}>
                    <h6 className='mb-0' style={{ whiteSpace: "nowrap" }}>
                    Social Media Management
                    </h6>
                    <p className='mb-0 opacity-75'>  Connect with your Audience</p>
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
                    <p className='mb-0 opacity-75'>Reach your Customers' Inboxes</p>
                  </div>
                </Link>







                <a
                  href='services/sem.html'
                  className='d-flex gap-3 py-2 dropdown-item'
                >
                  {/* <img src="images/sem.png" width="20" height="20" alt="..."> */}
                  <div className='d-flex gap-2 w-100 justify-content-between'>
                    <div>
                      <h6 className='mb-0'>Search Engine Marketing</h6>
                      <p className='mb-0 opacity-75'>Drive Traffic with Ads</p>
                    </div>
                  </div>
                </a>
              </div>
            </li>
            <li className='nav-item mx-3'>
              <Link className='nav-link' to='/about'>
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
              <Link className='nav-link' to='/contact'>
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
