/** @format */

import React from "react";
import Navbar from "./layout/TopNavbar";
import blogpage from "../Assets/blogpage.png";

import b1 from "../Assets/b1.png";
import b2 from "../Assets/b2.png";
import b3 from "../Assets/b3.png";
import b4 from "../Assets/b4.png";
import Footer from "./layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareAlt,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Padding } from "@mui/icons-material";

export default function () {
  return (
    <>
      <Navbar />

      <div className='header-bg'>
        <div className='header'>
          <div className='content'>
            <h1>Explore our blog for more information!</h1>
            <p>
              Stay up-to-date on the latest developments in the world of digital
              marketing.
            </p>
            <a href='#'>
              <button>Learn More</button>
            </a>
          </div>
          <div className='image'>
            <img src={blogpage} className='img-fluid' alt='header-image' />
          </div>
        </div>
      </div>

      <section className='container-lg'>
        <div className='row g-5 '>
          <div className='col-md-4 d-none d-md-block'>
            <div className='position-sticky blog-side' style={{ top: "2rem" }}>
              <div className='mb-3 rounded searchh'>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control py-3'
                    placeholder='Search'
                  />
                  <span className='input-group-text' id='basic-addon1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='16'
                      viewBox='0 0 16 16'
                    >
                      <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'></path>
                    </svg>
                  </span>
                </div>
              </div>

              <div className='p-4 rounded-4 blog-sidebar'>
                <h4 className='pb-3'>Categories</h4>
                <ol className='list-unstyled'>
                  <li className='pb-3'>
                    <a href='#'>Social media tips</a>
                  </li>
                  <li className='pb-3'>
                    <a href='#'>Digital marketing tip</a>
                  </li>
                  <li className='pb-3'>
                    <a href='#'>Digital marketing tip</a>
                  </li>
                  <li className='pb-3'>
                    <a href='#'>SEO Gist</a>
                  </li>
                  <li className='pb-3'>
                    <a href='#'>Top online media</a>
                  </li>
                  <li className='pb-3'>
                    <a href='#'>Trending patterns</a>
                  </li>
                </ol>
              </div>

              <div className='p-4 mt-5 rounded-4 blog-sidebar'>
                <h4 className='pb-3'>Top Posts</h4>
                <ol className='list-unstyled'>
                  <li className='pb-3'>
                    <a href='#'>Lorem ipsum dolor sit amet</a>
                    <p className='fw-light'>Business talk - 7th April 2023</p>
                  </li>
                  <li className='pb-3'>
                    <a href='#'>Lorem ipsum dolor sit amet</a>
                    <p className='fw-light'>Business talk - 7th April 2023</p>
                  </li>
                  <li className='pb-3'>
                    <a href='#'>Lorem ipsum dolor sit amet</a>
                    <p className='fw-light'>Business talk - 7th April 2023</p>
                  </li>
                  <li className='pb-3'>
                    <a href='#'>Lorem ipsum dolor sit amet</a>
                    <p className='fw-light'>Business talk - 7th April 2023</p>
                  </li>
                  <li className='pb-3'>
                    <a href='#'>Lorem ipsum dolor sit amet</a>
                    <p className='fw-light'>Business talk - 7th April 2023</p>
                  </li>
                  <li className='pb-3'>
                    <a href='#'>Lorem ipsum dolor sit amet</a>
                    <p className='fw-light'>Business talk - 7th April 2023</p>
                  </li>
                </ol>
              </div>

              <div className='p-4'>
                <h4 className=''>Elsewhere</h4>
                <div className='d-flex row gap-2 mb-3'>
                  <a href='#' className='btn mt-1 btn-sidebar w-auto rounded-4'>
                    Popular Tag
                  </a>
                  <a href='#' className='btn mt-1 btn-sidebar w-auto rounded-4'>
                    Popular Tag
                  </a>
                  <a href='#' className='btn mt-1 btn-sidebar w-auto rounded-4'>
                    Popular Tag
                  </a>
                  <a href='#' className='btn mt-1 btn-sidebar w-auto rounded-4'>
                    Popular Tag
                  </a>
                </div>
                <ol className='list-unstyled my-4'>
                  <FontAwesomeIcon
                    icon={faInstagram }
                    style={{ marginRight: "10px", fontSize: "22px" }}
                  />
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ marginRight: "10px", fontSize: "22px" }}
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ marginRight: " 10px", fontSize: "22px" }}
                  />
                  <FontAwesomeIcon icon={faShareAlt} 
                  style={{ marginRight: " 10px", fontSize: "22px" }}
                  />
                </ol>
              </div>
            </div>
          </div>

          <div className='col-md-8 row pt-5'>
            <div className='col-md-5 mx-1'>
              <div className='border rounded overflow-hidden mb-4 shadow-sm'>
                <div className='col p-3 d-flex flex-column position-static'>
                  <img src={b1} className='pb-3' alt='...' />

                  <p className='card-text mb-auto'>
                    Lorem ipsum dolor sit amet consectetur. Lacus enim ipsum
                    orci a nisl sapien in. Justo eu bibendum sagittis
                    condimentum volutpat faucibus pulvinar nunc. Pellentesque
                    scelerisque mollis tellus molestie nec. Tellus commodo
                    malesuada etiam mauris integer tincidunt magna. Id morbi vel
                    ultricies quisque. Aliquam orci id commodo etiam cras
                    facilisi. Elit arcu vulputate sed proin quam lorem eleifend.
                    Lacinia nunc nunc.
                  </p>
                  <a href='/blog/blog-sing.html' className='mb-3'>
                    Continue reading
                  </a>
                  <div>
                    <div className='d-flex row justify-content-between'>
                      <div className='text-muted col-6'>Nov 12 2021</div>
                      <ol className='list-unstyled col-6 justify-content-end'>
                        <FontAwesomeIcon icon={faHeart}
                         style={{ marginRight: " 10px", fontSize: "15px" }}
                          />
                        <FontAwesomeIcon icon={faShareAlt}
                         style={{ marginRight: " 10px", fontSize: "15px" }}
                          />
                        <FontAwesomeIcon icon={faComment} 
                         style={{ marginRight: " 10px", fontSize: "15px" }}
                         />
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-5 mx-1'>
              <div className='border rounded overflow-hidden mb-4 shadow-sm'>
                <div className='col p-3 d-flex flex-column position-static'>
                  <img src={b2} className='pb-3' alt='...' />

                  <p className='card-text mb-auto'>
                    Lorem ipsum dolor sit amet consectetur. Lacus enim ipsum
                    orci a nisl sapien in. Justo eu bibendum sagittis
                    condimentum volutpat faucibus pulvinar nunc. Pellentesque
                    scelerisque mollis tellus molestie nec. Tellus commodo
                    malesuada etiam mauris integer tincidunt magna. Id morbi vel
                    ultricies quisque. Aliquam orci id commodo etiam cras
                    facilisi. Elit arcu vulputate sed proin quam lorem eleifend.
                    Lacinia nunc nunc.
                  </p>
                  <a href='#' className='mb-3'>
                    Continue reading
                  </a>
                  <div>
                    <div className='d-flex row justify-content-between'>
                      <div className='text-muted col-6'>Nov 12 2021</div>
                      <ol className='list-unstyled col-6 justify-content-end'>
                        <FontAwesomeIcon icon={faHeart}
                         style={{ marginRight: " 10px", fontSize: "15px" }}
                          />
                        <FontAwesomeIcon icon={faShareAlt}
                         style={{ marginRight: " 10px", fontSize: "15px" }}
                          />
                        <FontAwesomeIcon icon={faComment} 
                         style={{ marginRight: " 10px", fontSize: "15px" }}
                         />
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-5 mx-1'>
              <div className='border rounded overflow-hidden mb-4 shadow-sm'>
                <div className='col p-3 d-flex flex-column position-static'>
                  <img src={b3} className='pb-3' alt='...' />

                  <p className='card-text mb-auto'>
                    Lorem ipsum dolor sit amet consectetur. Lacus enim ipsum
                    orci a nisl sapien in. Justo eu bibendum sagittis
                    condimentum volutpat faucibus pulvinar nunc. Pellentesque
                    scelerisque mollis tellus molestie nec. Tellus commodo
                    malesuada etiam mauris integer tincidunt magna. Id morbi vel
                    ultricies quisque. Aliquam orci id commodo etiam cras
                    facilisi. Elit arcu vulputate sed proin quam lorem eleifend.
                    Lacinia nunc nunc.
                  </p>
                  <a href='#' className='mb-3'>
                    Continue reading
                  </a>
                  <div>
                    <div className='d-flex row justify-content-between'>
                      <div className='text-muted col-6'>Nov 12 2021</div>
                      <ol className='list-unstyled col-6 justify-content-end'>
                        <FontAwesomeIcon icon={faHeart}
                         style={{ marginRight: " 10px", fontSize: "15px" }}
                          />
                        <FontAwesomeIcon icon={faShareAlt}
                         style={{ marginRight: " 10px", fontSize: "15px" }}
                          />
                        <FontAwesomeIcon icon={faComment} 
                         style={{ marginRight: " 10px", fontSize: "15px" }}
                         />
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-5 mx-1'>
              <div className='border rounded overflow-hidden mb-4 shadow-sm'>
                <div className='col p-3 d-flex flex-column position-static'>
                  <img src={b4} className='pb-3' alt='...' />

                  <p className='card-text mb-auto'>
                    Lorem ipsum dolor sit amet consectetur. Lacus enim ipsum
                    orci a nisl sapien in. Justo eu bibendum sagittis
                    condimentum volutpat faucibus pulvinar nunc. Pellentesque
                    scelerisque mollis tellus molestie nec. Tellus commodo
                    malesuada etiam mauris integer tincidunt magna. Id morbi vel
                    ultricies quisque. Aliquam orci id commodo etiam cras
                    facilisi. Elit arcu vulputate sed proin quam lorem eleifend.
                    Lacinia nunc nunc.
                  </p>
                  <a href='#' className='mb-3'>
                    Continue reading
                  </a>
                  <div>
                    <div className='d-flex row justify-content-between'>
                      <div className='text-muted col-6'>Nov 12 2021</div>
                      <ol className='list-unstyled col-6 justify-content-end'>
                        <FontAwesomeIcon icon={faHeart}
                         style={{ marginRight: " 10px", fontSize: "15px" }}
                          />
                        <FontAwesomeIcon icon={faShareAlt}
                         style={{ marginRight: " 10px", fontSize: "15px" }}
                          />
                        <FontAwesomeIcon icon={faComment} 
                         style={{ marginRight: " 10px", fontSize: "15px" }}
                         />
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav className='blog-pagination pb-5 mb-5 text-center'>
              <a className='btn btn-outline-success' href='#'>
                1
              </a>
              <a className='btn btn-outline-secondary disabled'>2</a>
              <a className='btn btn-outline-secondary disabled'>3</a>
              <a className='btn btn-outline-secondary disabled'>4</a>
            </nav>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
