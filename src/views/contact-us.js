import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import FormQuestion from '../components/form-question'
import SolidButton from '../components/solid-button'
import Footer from '../components/footer'
import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <Helmet>
        <title>Contact-Us - SavvyTenant</title>
        <meta property="og:title" content="Contact-Us - SavvyTenant" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name1"></NavBar>
      <FormQuestion
        text="We'll try our best to get back to you in 24 hours!"
        heading="Question?"
        fromGetStarted={false}
        rootClassName="form-question-root-class-name"
        textarea_placeholder="General Inquiries"
      ></FormQuestion>
      <div className="contact-us-container1">
        <div className="contact-us-container2">
          <img
            alt="image"
            src="/playground_assets/pexels-karolina-grabowska-4021879-200w.jpg"
            className="contact-us-image"
          />
          <h1 className="contact-us-text">Connect with us!</h1>
          <span className="contact-us-text1">
            <span>
              We&apos;d love to hear from you! Leave your name and email, and
              we&apos;ll get back to you ASAP with our best answers to your
              questions.
            </span>
            <span></span>
          </span>
          <div className="contact-us-btn-group">
            <Link to="/get-started" className="contact-us-navlink">
              <SolidButton
                button="Get Started"
                rootClassName="solid-button-root-class-name2"
                className="contact-us-component2"
              ></SolidButton>
            </Link>
            <Link to="/howit-works" className="contact-us-navlink1">
              <SolidButton
                button="How it Works"
                rootClassName="solid-button-root-class-name1"
                className="contact-us-component3"
              ></SolidButton>
            </Link>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default ContactUs
