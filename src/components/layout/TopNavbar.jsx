
import React, { useState, useEffect } from "react";
import Logo from "../../Assets/Logo.png";
import { Link } from "react-router-dom";
import seoIcon from "../../Assets/seoIcon.png";
import em from "../../Assets/em.png";
import smm from "../../Assets/smm.png";
import sem from "../../Assets/sem.png";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeDropdown = (event) => {
      if (!event.target.closest(".navItem")) {
        setToggle(false);
      }
    };
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <section className="navBarContainer">
      <nav className="navDy">
        <Link className="navbarLogo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler first-button"
          onClick={toggleMenu}
          type="button"
        >
          <div className={`animated-icon1 ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navlinks" id="nav-links">
            <li className="navItem dropdown" onClick={() => setToggle((prev) => !prev)}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              {toggle && (
                <div className='dropIn'>
                  <Link
                    className='nav-link hoverable-link'
                    to='/search-engine-optimization'
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src={seoIcon} width='20' height='20' alt='...' />
                    <div style={{ marginLeft: "10px" }}>
                      <h6 className='mb-0'>Search Engine Optimization</h6>
                      <p className='opacity-75'>Get Found Online</p>
                    </div>
                  </Link>

                  <Link
                    className='nav-link hoverable-link'
                    to='/social-media-marketing'
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src={smm} width='20' height='20' alt='...' />
                    <div style={{ marginLeft: "10px" }}>
                      <h6 className='mb-0'>Social Media Management</h6>
                      <p className='mb-0 opacity-75'>
                        {" "}
                        Connect with your Audience
                      </p>
                    </div>
                  </Link>

                  <Link
                    className='nav-link hoverable-link'
                    to='/email-marketing'
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src={em} width='20' height='20' alt='...' />
                    <div style={{ marginLeft: "10px" }}>
                      <h6 className='mb-0'>Email Marketing</h6>
                      <p className='mb-0 opacity-75'>
                        Reach your Customers' Inboxes
                      </p>
                    </div>
                  </Link>

                  <Link
                    className='nav-link hoverable-link'
                    to='/search-engine-marketing'
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src={sem} width='20' height='20' alt='...' />
                    <div style={{ marginLeft: "10px" }}>
                      <h6 className='mb-0'>Search Engine Marketing</h6>
                      <p className='mb-0 opacity-75'>Drive Traffic with Ads</p>
                    </div>
                  </Link>
                </div>
              )}
            </li>
            <li className="navItem">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="navItem">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            {/* <li className="navItem">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li> */}
            <li className="navItem">
              <button className="btn btn-real">
               <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link> 
              </button>
              
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
