/** @format */

// src/ContactForm.js

import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      position: "",
      companyName: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Define the API endpoint URL
    const apiUrl = "https://your-api-endpoint-url.com"; // Replace with your actual API endpoint URL

    // Create an object with the form data
    const formData = {
      name: this.state.name,
      surname: this.state.surname,
      position: this.state.position,
      companyName: this.state.companyName,
      message: this.state.message,
    };

    // Make a POST request to the API endpoint
    axios
      .post(apiUrl, formData)
      .then((response) => {
        // Handle the API response, e.g., show a success message to the user
        console.log(response.data);
        // You can also reset the form fields here
        this.setState({
          name: "",
          surname: "",
          position: "",
          companyName: "",
          message: "",
        });
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  render() {
    return (
      <section id='sec-6' style={{ background: "#eff3fd" }}>
        <div className='container'>
          <div className='content text-center'>
            <div className='col-12 text-center'>
              <h3 className='mb-4'>Let’s Grow your Business</h3>
            </div>
            <p>
              Empower your business with our unmatched expertise and reach new{" "}
              <br /> pinnacles of success.
            </p>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    className='form-control'
                    required
                    placeholder='Your Full Name'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    id='surname'
                    name='surname'
                    value={this.state.surname}
                    onChange={this.handleChange}
                    className='form-control'
                    required
                    placeholder='Company Name'
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
                    placeholder='Phone Number'
                  />
                </div>
              </form>
            </div>
            <div className='col-md-6'>
              <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    id='companyName'
                    name='email'
                    value={this.state.companyName}
                    onChange={this.handleChange}
                    className='form-control'
                    required
                    placeholder='Your Email Address'
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    id='companyName'
                    name='position'
                    value={this.state.companyName}
                    onChange={this.handleChange}
                    className='form-control'
                    required
                    placeholder='Your Position'
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    id='companyName'
                    name='companyName'
                    value={this.state.companyName}
                    onChange={this.handleChange}
                    className='form-control'
                    required
                    placeholder='Your Website'
                  />
                </div>
              </form>
            </div>
            <div className='col-md-12'>
              <div className='form-group'>
                <textarea
                  id='message'
                  name='message'
                  value={this.state.message}
                  onChange={this.handleChange}
                  className='form-control' // No col-12 class for the textarea
                  rows='6' // Increase the number of rows to fill more space
                  required
                  placeholder='Which subscription plan are you interested in?'
                ></textarea>
              </div>
            </div>
            <div className='form-group text-center'>
              <button type='submit' className='btn btn-real'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
