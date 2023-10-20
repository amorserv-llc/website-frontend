/** @format */

import React, { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    position: "",
    company_name: "",
    email: "",
    phone: "",
    user_website: "",
    message: "",
    website_id: 1,
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      setEmailError(false); // Reset email error when user starts typing again
    }
  };
const validataeEmail = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@company\.com$/; // Change 'company.com' to your desired domain
  return emailRegex.test(formData.email);
};
  const handleSubmit = (e) => {
    e.preventDefault();

     
    const apiUrl = "https://api.amorservtech.net/api/v1/consulting/contacts";

  
    setLoading(true);
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
          full_name: "",
          position: "",
          company_name: "",
          email: "",
          phone: "",
          user_website: "",
          message: "",
          website_id: 1,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
    if (handleSubmit) {
      navigate("/thankyou");
    }
  };

  return (
    <div className='container d-flex justify-content-center align-items-center pt-5'>
      <div
        className='form-container'
        style={{ width: "62.5625rem", borderRadius: "0.5rem" }}
      >
        <div className='row forminput'>
          <div className='col-md-6'>
            {/* {showAlert && (
              <div className='fade-out-alert'>Thanks for contacting us!</div>
            )} */}
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  id='name'
                  name='full_name'
                  value={formData.full_name}
                  onChange={handleChange}
                  className='form-control'
                  required
                  placeholder='Your Full Name'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  id='company_name'
                  name='company_name'
                  value={formData.company_name}
                  onChange={handleChange}
                  className='form-control'
                  required
                  placeholder='Company Name'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='form-control'
                  required
                  placeholder='Phone Number'
                />
              </div>
            </form>
          </div>

          <div className='col-md-6'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='form-control'
                  required
                  placeholder='Work Email'
                />
                {/* Display validation error */}
                {/* {emailError && (
            <div className="error-message">
              Invalid email format. Please use @company.com domain.
            </div>
          )} */}
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  id='position'
                  name='position'
                  value={formData.position}
                  onChange={handleChange}
                  className='form-control'
                  required
                  placeholder='Position'
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  id='user_website'
                  name='user_website'
                  value={formData.user_website}
                  onChange={handleChange}
                  className='form-control'
                  required
                  placeholder='Your Website'
                />
              </div>
            </form>
          </div>

          <div className='col-md-12'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='form-control'
                  rows='6'
                  required
                  placeholder='Message'
                ></textarea>
              </div>

              {/* Include a hidden input for website_id */}
              <input
                type='hidden'
                name='website_id'
                value={formData.website_id}
              />

             
              <div className='text-center'>
                <button
                  style={{ textAlign: "center" }}
                  className='btn-real'
                  type='submit'
                  disabled={loading}
                >
                  {loading && <Spinner />}{" "}
                  {loading ? "Submitting..." : "Get Started"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </section>
  );
};

export default ContactForm;
