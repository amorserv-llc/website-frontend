/** @format */

import React from "react";
import Navbar from "./layout/TopNavbar";
import blogpage from "../Assets/blogpage.png";

import b1 from "../Assets/b1.png";
import b2 from "../Assets/b2.png";
import b3 from "../Assets/b3.png";
import b4 from "../Assets/b4.png";

import love from "../Assets/love.png";
import shear from "../Assets/shear.png";
import comment from "../Assets/comment.png";
import { Helmet } from "react-helmet";
import Footer from "./layout/Footer";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <Helmet>
        <title>Blog - Amorserv Consulting</title>
        <meta name='description' content='Amorserv Consulting Blog Page' />
      </Helmet>
      <div style={{ paddingBottom: "90px" }}>
        <Navbar />
      </div>

      <header className='header-bg'>
        <div className='header'>
          <div className='content'>
            <h1>Explore our blog for more information!</h1>

            <p className='rapp'>
              Stay up-to-date on the latest developments in the world of digital
              marketing.
            </p>
            <Link to='/'>
              <button>Learn More</button>
            </Link>
          </div>
          <div className='image'>
            <img src={blogpage} className='img-fluid' alt='header-image' />
          </div>
        </div>
      </header>
      
      <section className='container-lg pt-5 pb-5'>
        <div className='row g-5 '>
          <div className='col-md-4 d-none d-md-block'>
            <div className='position-sticey blog-side' style={{ top: "2rem" }}>
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
                <h4 className='tag'>Tags</h4>
                <div className='d-flex flex-column flex-md-row mb-3  gap-5'>
                  <div className='d-flex flex-column'>
                    <a
                      href='#'
                      className='btn mt-1 btn-sidebar  w-auto rounded-4'
                    >
                      Popular Tag
                    </a>

                    <br />
                    <a
                      href='#'
                      className='btn mt-1 btn-sidebar w-auto rounded-4'
                    >
                      Popular Tag
                    </a>
                  </div>
                  <div className='d-flex flex-column'>
                    <a
                      href='#'
                      className='btn mt-1 btn-sidebar w-auto rounded-4'
                    >
                      Popular Tag
                    </a>
                    <br />
                    <a
                      href='#'
                      className='btn mt-1 btn-sidebar w-auto rounded-4'
                    >
                      Popular Tag
                    </a>
                  </div>
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='201'
                  height='37'
                  viewBox='0 0 201 37'
                  fill='none'
                >
                  <path
                    d='M17.9117 1.19824C13.0425 1.19824 12.4357 1.22034 10.5301 1.29612C8.61662 1.38453 7.32233 1.66343 6.18032 2.08021C5.00248 2.51383 3.99929 3.08952 3.00843 4.02622C2.01084 4.95765 1.39281 5.90066 0.938244 7.00786C0.494873 8.08137 0.198173 9.29803 0.104125 11.0967C0.017914 12.889 0 13.4584 0 18.0356C0 22.6128 0.0235121 23.1832 0.104125 24.9745C0.198173 26.7679 0.494873 27.9898 0.938244 29.0634C1.39953 30.1705 2.01196 31.1136 3.00843 32.045C3.99929 32.9827 5.00248 33.5637 6.18032 33.991C7.32233 34.4025 8.62222 34.6867 10.5301 34.7751C12.4368 34.8561 13.0425 34.873 17.9117 34.873C22.781 34.873 23.3878 34.8509 25.2934 34.7751C27.2012 34.6867 28.5011 34.4015 29.6431 33.991C30.821 33.5574 31.8242 32.9817 32.815 32.045C33.8126 31.1136 34.4306 30.1758 34.8852 29.0634C35.323 27.9898 35.6253 26.7679 35.7193 24.9745C35.8055 23.1822 35.8235 22.6128 35.8235 18.0356C35.8235 13.4584 35.7999 12.888 35.7193 11.0967C35.6253 9.30329 35.3219 8.07506 34.8852 7.00786C34.4239 5.90066 33.8115 4.95765 32.815 4.02622C31.8242 3.08847 30.8266 2.50751 29.6431 2.08021C28.5011 1.66343 27.2012 1.38453 25.2934 1.29612C23.3867 1.21508 22.781 1.19824 17.9117 1.19824ZM17.9117 4.22935C22.6936 4.22935 23.2646 4.25145 25.1546 4.32723C26.8978 4.40406 27.8473 4.6777 28.4776 4.90924C29.3184 5.21551 29.9062 5.57756 30.5422 6.16904C31.1658 6.75527 31.551 7.31413 31.8768 8.10453C32.1231 8.69707 32.4142 9.58956 32.4959 11.2283C32.5765 13.0048 32.6001 13.5426 32.6001 18.0367C32.6001 22.5307 32.5766 23.0685 32.4892 24.8451C32.3952 26.4838 32.1041 27.3762 31.8589 27.9688C31.5196 28.7592 31.1412 29.3117 30.5164 29.9095C29.8861 30.4958 29.286 30.8578 28.4519 31.1641C27.8293 31.3956 26.8665 31.6693 25.1165 31.7461C23.2165 31.8219 22.6567 31.844 17.8625 31.844C13.0682 31.844 12.5095 31.8219 10.6073 31.7398C8.86406 31.6514 7.9023 31.3777 7.27195 31.1472C6.42104 30.8283 5.83771 30.4726 5.21297 29.8853C4.58262 29.2928 4.18179 28.7287 3.87278 27.9446C3.62198 27.3594 3.33536 26.4543 3.24243 24.8093C3.17861 23.0443 3.14838 22.497 3.14838 18.0114C3.14838 13.5279 3.17861 12.9796 3.24243 11.1925C3.33536 9.54746 3.62198 8.64444 3.87278 8.05717C4.18179 7.25624 4.58374 6.70896 5.21297 6.11642C5.8366 5.5302 6.42104 5.15131 7.27195 4.85451C7.9023 4.62402 8.84054 4.35038 10.5905 4.26829C12.4905 4.20409 13.0503 4.18093 17.8378 4.18093L17.9117 4.22935ZM17.9117 9.3938C12.8275 9.3938 8.71627 13.2637 8.71627 18.0377C8.71627 22.817 12.8331 26.6816 17.9117 26.6816C22.9959 26.6816 27.1072 22.8117 27.1072 18.0377C27.1072 13.2585 22.9903 9.3938 17.9117 9.3938ZM17.9117 23.6505C14.6111 23.6505 11.9408 21.1404 11.9408 18.0377C11.9408 14.935 14.6111 12.4249 17.9117 12.4249C21.2124 12.4249 23.8827 14.935 23.8827 18.0377C23.8827 21.1404 21.2124 23.6505 17.9117 23.6505ZM29.6275 9.04859C29.6275 10.1674 28.659 11.0704 27.4744 11.0704C26.2843 11.0704 25.3236 10.1663 25.3236 9.04859C25.3236 7.93613 26.291 7.03101 27.4744 7.03101C28.6579 7.03101 29.6275 7.93613 29.6275 9.04859Z'
                    fill='#FF0000'
                  />
                  <path
                    d='M90.6467 18.1381C90.6467 8.83655 82.6234 1.30078 72.735 1.30078C62.8399 1.30078 54.8232 8.83655 54.8232 18.1381C54.8232 26.54 61.3711 33.5064 69.9363 34.7682V23.0062H65.3878V18.1392H69.9363V14.4276C69.9363 10.2088 72.6062 7.87893 76.6991 7.87893C78.6593 7.87893 80.7113 8.20726 80.7113 8.20726V12.3503H78.4488C76.2278 12.3503 75.5337 13.6499 75.5337 14.9811V18.1381H80.5008L79.7026 23.0052H75.5337V34.7671C84.0921 33.5054 90.6467 26.5389 90.6467 18.1371V18.1381Z'
                    fill='#0B57A5'
                  />
                  <path
                    d='M145.402 7.61177C144.084 8.15478 142.673 8.52836 141.187 8.69778C142.704 7.84223 143.863 6.48893 144.417 4.87675C142.994 5.65548 141.42 6.21953 139.746 6.53839C138.412 5.19561 136.504 4.35059 134.387 4.35059C130.329 4.35059 127.04 7.44129 127.04 11.2507C127.04 11.799 127.11 12.3252 127.232 12.824C121.128 12.5556 115.716 9.79852 112.097 5.63338C111.461 6.64783 111.1 7.82645 111.1 9.10924C111.1 11.5096 112.399 13.6143 114.364 14.8518C113.163 14.8192 112.032 14.5067 111.041 13.9921V14.0752C111.041 17.4227 113.571 20.2135 116.93 20.8491C116.317 21.0017 115.664 21.0901 115 21.0901C114.529 21.0901 114.079 21.0469 113.63 20.9691C114.574 23.7093 117.279 25.7046 120.503 25.7646C117.997 27.6114 114.82 28.7121 111.396 28.7121C110.813 28.7121 110.231 28.6858 109.646 28.6195C112.912 30.5769 116.766 31.7218 120.93 31.7218C134.439 31.7218 141.82 21.2037 141.82 12.0947C141.82 11.8043 141.82 11.5086 141.797 11.2118C143.238 10.2468 144.485 9.02401 145.47 7.63808L145.402 7.61177Z'
                    fill='#35D5D5'
                  />
                  <path
                    d='M194.218 24.6502C193.287 24.6503 192.369 24.8517 191.534 25.2387C190.7 25.6257 189.971 26.1881 189.404 26.8822L176.299 19.8902C176.739 18.6891 176.739 17.384 176.299 16.183L189.404 9.19093C190.319 10.3066 191.641 11.0649 193.114 11.3198C194.588 11.5746 196.11 11.3082 197.387 10.5717C198.665 9.83511 199.607 8.68053 200.033 7.33008C200.46 5.97963 200.339 4.52873 199.696 3.25656C199.053 1.9844 197.931 0.980861 196.548 0.439052C195.165 -0.102756 193.617 -0.144552 192.203 0.321709C190.789 0.787969 189.609 1.72934 188.889 2.96468C188.169 4.20002 187.96 5.64204 188.303 7.01327L174.974 14.1245C174.14 13.2905 173.059 12.7112 171.87 12.4619C170.682 12.2127 169.441 12.3048 168.309 12.7265C167.177 13.1482 166.205 13.8799 165.521 14.8267C164.837 15.7736 164.471 16.8919 164.471 18.0366C164.471 19.1813 164.837 20.2996 165.521 21.2464C166.205 22.1933 167.177 22.925 168.309 23.3467C169.441 23.7683 170.682 23.8605 171.87 23.6112C173.059 23.3619 174.14 22.7827 174.974 21.9487L188.303 29.06C188.016 30.2143 188.118 31.4241 188.595 32.5216C189.072 33.619 189.9 34.5497 190.965 35.1845C192.031 35.8193 193.28 36.1268 194.539 36.0643C195.798 36.0018 197.006 35.5724 197.994 34.8358C198.982 34.0991 199.702 33.0916 200.053 31.953C200.405 30.8145 200.371 29.6013 199.956 28.4818C199.541 27.3623 198.765 26.392 197.737 25.7054C196.709 25.0188 195.479 24.65 194.218 24.6502ZM194.218 2.40451C194.914 2.40451 195.594 2.59845 196.172 2.9618C196.751 3.32516 197.202 3.84161 197.468 4.44584C197.734 5.05008 197.804 5.71496 197.668 6.35642C197.532 6.99787 197.197 7.58708 196.705 8.04955C196.213 8.51201 195.587 8.82695 194.904 8.95454C194.222 9.08213 193.515 9.01665 192.872 8.76637C192.229 8.51608 191.68 8.09224 191.293 7.54845C190.906 7.00465 190.7 6.36532 190.7 5.7113C190.701 4.83458 191.072 3.99405 191.732 3.37412C192.391 2.75419 193.285 2.40549 194.218 2.40451ZM170.553 21.3434C169.857 21.3434 169.177 21.1494 168.598 20.7861C168.02 20.4227 167.569 19.9063 167.303 19.302C167.037 18.6978 166.967 18.0329 167.103 17.3915C167.238 16.75 167.573 16.1608 168.065 15.6983C168.557 15.2359 169.184 14.9209 169.867 14.7933C170.549 14.6657 171.256 14.7312 171.899 14.9815C172.542 15.2318 173.091 15.6556 173.478 16.1994C173.864 16.7432 174.071 17.3826 174.071 18.0366C174.07 18.9133 173.699 19.7538 173.039 20.3738C172.38 20.9937 171.486 21.3424 170.553 21.3434ZM194.218 33.6687C193.522 33.6687 192.842 33.4747 192.264 33.1114C191.685 32.748 191.234 32.2316 190.968 31.6273C190.702 31.0231 190.632 30.3582 190.768 29.7167C190.904 29.0753 191.239 28.4861 191.731 28.0236C192.222 27.5612 192.849 27.2462 193.532 27.1186C194.214 26.991 194.921 27.0565 195.564 27.3068C196.207 27.5571 196.756 27.9809 197.143 28.5247C197.529 29.0685 197.736 29.7078 197.736 30.3619C197.735 31.2386 197.364 32.0791 196.704 32.699C196.045 33.319 195.151 33.6677 194.218 33.6687Z'
                    fill='#555555'
                  />
                </svg>
             
              </div>
            </div>
          </div>

          <div className='col-md-8 row pt-5'>
            <div className='col-md-5 mx-1'>
              <div className='border rounded overflow-hidden mb-4 shadow-sm'>
                <div className='col p-3 d-flex flex-column position-static blog'>
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

                  <div>
                    <div className='d-flex row justify-content-between'>
                      <div className='text-muted col-6'>7th April 2023</div>
                      <ol className='list-unstyled col-6 justify-content-end'>
                        <div
                          style={{
                            padding: "4px",
                            position: "relative",
                            fill: "#555",
                          }}
                        >
                          <span>
                            <img
                              src={love}
                              alt='image1'
                              style={{ width: "20px", marginRight: "12px" }}
                            />
                          </span>
                          <span>
                            <img
                              src={shear}
                              alt='image2'
                              style={{ width: "20px", marginRight: "12px" }}
                            />
                          </span>
                          <span>
                            <img
                              src={comment}
                              alt='image3'
                              style={{ width: "20px", marginRight: "12px" }}
                            />
                          </span>
                        </div>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-5 mx-1'>
              <div className='border rounded overflow-hidden mb-4 shadow-sm'>
                <div className='col p-3 d-flex flex-column position-static blog'>
                  <img src={b2} className='pb-3' alt='...' />

                  <p className='card-text mb-auto'>
                    Lorem ipsum dolor sit amet consectetur. Lacus enim ipsum
                    orci a nisl sapien in. Justo eu bibendum sagittis
                    condimentum volutpat faucibus pulvinar nunc. Pellentesque
                    scelerisque mollis tellus molestie nec. Tellus commodo
                    malesuada etiam mauris integer tincidunt magna. Id morbi vel
                    ultricies quisque. Aliquam orci id commodo etiam cras
                    facilisi. Elit arcu vulputate sed proin quam lorem eleifend.
                    Lacinia nunc nunc.kk
                  </p>

                  <div>
                    <div className='d-flex row justify-content-between'>
                      <div className='text-muted col-6'>7th April 2023</div>
                      <ol className='list-unstyled col-6 justify-content-end'>
                        <div
                          style={{
                            padding: "4px",
                            position: "relative",
                            fill: "#555",
                          }}
                        >
                          <span>
                            <img
                              src={love}
                              alt='image1'
                              style={{ width: "20px", marginRight: "12px" }}
                            />
                          </span>
                          <span>
                            <img
                              src={shear}
                              alt='image2'
                              style={{ width: "20px", marginRight: "12px" }}
                            />
                          </span>
                          <span>
                            <img
                              src={comment}
                              alt='image3'
                              style={{ width: "20px", marginRight: "12px" }}
                            />
                          </span>
                        </div>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-5 mx-1'>
              <div className='border rounded overflow-hidden mb-4 shadow-sm'>
                <div className='col p-3 d-flex flex-column position-static blog'>
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

                  <div>
                    <div className='d-flex row justify-content-between'>
                      <div className='text-muted col-6'>7th April 2023</div>
                      <ol className='list-unstyled col-6 justify-content-end'>
                        <div
                          style={{
                            padding: "4px",
                            position: "relative",
                            fill: "#555",
                          }}
                        >
                          <span>
                            <img
                              src={love}
                              alt='image1'
                              style={{ width: "20px", marginRight: "12px" }}
                            />
                          </span>
                          <span>
                            <img
                              src={shear}
                              alt='image2'
                              style={{ width: "20px", marginRight: "12px" }}
                            />
                          </span>
                          <span>
                            <img
                              src={comment}
                              alt='image3'
                              style={{ width: "20px", marginRight: "12px" }}
                            />
                          </span>
                        </div>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-5 mx-1'>
              <div className='border rounded overflow-hidden mb-4 shadow-sm'>
                <div className='col p-3 d-flex flex-column position-static blog'>
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

                  <div>
                    <div className='d-flex row justify-content-between'>
                      <div className='text-muted col-6'>7th April 2023</div>
                      <ol className='list-unstyled col-6 justify-content-end'>
                        <div
                          style={{
                            padding: "4px",
                            position: "relative",
                            fill: "#555",
                          }}
                        >
                          <span>
                            <img
                              src={love}
                              alt='image1'
                              style={{ width: "20px", marginRight: "12px" }}
                            />
                          </span>
                          <span>
                            <img
                              src={shear}
                              alt='image2'
                              style={{ width: "20px", marginRight: "12px" }}
                            />
                          </span>
                          <span>
                            <img
                              src={comment}
                              alt='image3'
                              style={{ width: "20px", marginRight: "12px" }}
                            />
                          </span>
                        </div>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav className='blog-pagination pb-5 mb-5 text-center'>
              <a
                className='btn men btn-outline-success'
                href='#'
                style={{ borderRadius: "1.90625rem" }}
              >
                1
              </a>
              <a
                className='btn men btn-outline-secondary disabled'
                style={{ marginLeft: "10px", borderRadius: "1.90625rem" }}
              >
                2
              </a>
              <a
                className='btn men btn-outline-secondary disabled'
                style={{ marginLeft: "10px", borderRadius: "1.90625rem" }}
              >
                3
              </a>
              <a
                className='btn men btn-outline-secondary disabled'
                style={{ marginLeft: "10px", borderRadius: "1.90625rem" }}
              >
                4
              </a>
            </nav>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
