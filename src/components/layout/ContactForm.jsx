/** @format */

// src/ContactForm.js

import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      position: "",
      company_name: "",
      email: "",
      phone: "",
      user_website: "",
      message: "",
      website_id: 1,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Define the API endpoint URL
    const apiUrl = "http://127.0.0.1:8000/api/consulting/contacts"; // Update with your actual API endpoint URL

    // Create an object with the form data
    const formData = {
      full_name: this.state.full_name,
      position: this.state.position,
      company_name: this.state.company_name,
      email: this.state.email,
      phone: this.state.phone,
      user_website: this.state.user_website,
      message: this.state.message,
      website_id: this.state.website_id, // Include website_id
    };

    // Make a POST request to the API endpoint
    axios
      .post(apiUrl, formData)
      .then((response) => {
        // Handle the API response, e.g., show a success message to the user
        console.log(response.data);
        // You can also reset the form fields here
        this.setState({
          full_name: "",
          position: "",
          company_name: "",
          email: "",
          phone: "",
          user_website: "",
          message: "",
          website_id: "",
        });
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  render() {
    return (
      <section className="p-5" id='sec-6' style={{ background: "#eff3fd" }}>
        <div className='container '>
          <div className='content text-center'>
            <div className='col-12 text-center'>
              <h3 className='mb-4'>Let’s Grow your Business</h3>
            </div>
            <p>
              Empower your business with our unmatched expertise and reach new{" "}
              <br /> pinnacles of success.
            </p>
          </div>

          <div className='container d-flex justify-content-center align-items-center'>
            <div
              className='form-container'
              style={{ width: "62.5625rem", borderRadius: "0.5rem" }}
            >
              <div className='row forminput'>
                <div className='col-md-6'>
                  <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='full_name'
                        value={this.state.full_name}
                        onChange={this.handleChange}
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
                        value={this.state.company_name}
                        onChange={this.handleChange}
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
                        value={this.state.phone}
                        onChange={this.handleChange}
                        className='form-control'
                        required
                        placeholder='Phone Number'
                      />
                    </div>
                  </form>
                </div>

                <div className='col-md-6'>
                  <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        className='form-control'
                        required
                        placeholder='Email Address'
                      />
                    </div>

                    <div className='form-group'>
                      <input
                        type='text'
                        id='position'
                        name='position'
                        value={this.state.position}
                        onChange={this.handleChange}
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
                        value={this.state.user_website}
                        onChange={this.handleChange}
                        className='form-control'
                        required
                        placeholder='Your Website'
                      />
                    </div>
                  </form>
                </div>

                <div className='col-md-12'>
                  <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                      <textarea
                        id='message'
                        name='message'
                        value={this.state.message}
                        onChange={this.handleChange}
                        className='form-control'
                        rows='6'
                        required
                        placeholder='Which subscription plan are you interested in?'
                      ></textarea>
                    </div>

                    {/* Include a hidden input for website_id */}
                    <input
                      type='hidden'
                      name='website_id'
                      value={this.state.website_id}
                    />

                    <div className='text-right pb-5'>
                      <button type='submit' className='btn btn-real'>
                        Get Started
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
