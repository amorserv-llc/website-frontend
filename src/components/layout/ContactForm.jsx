/** @format */

import React, { Component } from "react";
import axios from "axios";
import Spinner from "./Spinner"; // Make sure to import your Spinner component

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
      loading: false, // Add loading property to track form submission loading state
      showAlert: false, // Add showAlert property to manage alert visibility
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateEmail = () => {
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@\.com$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const { email } = this.state;
    if (!emailRegex.test(email)) {
      console.log("Invalid email format");
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.validateEmail()) {
      return;
    }

    this.setState({ loading: true }); // Set loading state to true when form is being submitted

    const apiUrl = "http://127.0.0.1:8000/api/v1/consulting/contacts";
    const formData = {
      full_name: this.state.full_name,
      position: this.state.position,
      company_name: this.state.company_name,
      email: this.state.email,
      phone: this.state.phone,
      user_website: this.state.user_website,
      message: this.state.message,
      website_id: this.state.website_id,
    };

    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log(response.data);
        this.setState({
          full_name: "",
          position: "",
          company_name: "",
          email: "",
          phone: "",
          user_website: "",
          message: "",
          website_id: 1,
          loading: false, // Reset loading state to false after successful submission
        });
        this.setState({ showAlert: true }); // Show the alert
        setTimeout(() => {
          this.setState({ showAlert: false }); // Hide the alert after 3 seconds
        }, 30000); // 3000 milliseconds (3 seconds)
      })
      .catch((error) => {
        console.error(error);

        this.setState({ loading: false }); // Reset loading state to false if there's an error
      });
  };

  render() {
    const { loading, showAlert } = this.state;

    return (
      // <section className='p-5' id='sec-6' style={{ background: "#eff3fd" }}>
      //   <div className='container ' id='contact-form-section'>
      //     <div className='content text-center'>
      //       <div className='col-12 text-center'>
      //         <h3 className='mb-4'>Let’s Grow your Business</h3>
      //       </div>
      //       <p>
      //         Empower your business with our unmatched expertise and reach new{" "}
      //         <br /> pinnacles of success.
      //       </p>
      //     </div>

          <div className='container d-flex justify-content-center align-items-center'>
            <div
              className='form-container'
              style={{ width: "62.5625rem", borderRadius: "0.5rem" }}
            >
              <div className='row forminput'>
                <div className='col-md-6'>
                  {showAlert && (
                    <div className='fade-out-alert'>
                      Thanks for contacting us!
                    </div>
                  )}
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
                        placeholder='Work Email'
                      />
                      {/* Display validation error */}
                      {this.state.email && !this.validateEmail() && (
                        <div className='error-message'>
                          Invalid email format
                        </div>
                      )}
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
                        placeholder='Message'
                      ></textarea>
                    </div>

                    {/* Include a hidden input for website_id */}
                    <input
                      type='hidden'
                      name='website_id'
                      value={this.state.website_id}
                    />

                    {/* <div className='text-center ' >
                      <button
                        className='btn-real'
                        type='submit'
                        disabled={loading}
                      >
                        {loading && <Spinner />}{" "}
                        {loading ? "Submitting..." : "Get Started"}
                      </button>
                    </div> */}
                    <div className='text-center'>
                      <button style={{ textAlign:'center' }}
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
  }
}

export default ContactForm;
