import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import SolidButton2Light from '../components/solid-button2light'
import SolidButton from '../components/solid-button'
import Footer from '../components/footer'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>SavvyTenant</title>
        <meta property="og:title" content="SavvyTenant" />
      </Helmet>
      <div className="landing-page-top-container">
        <NavBar rootClassName="nav-bar-root-class-name4"></NavBar>
        <div className="landing-page-container1">
          <div className="landing-page-landing-tile-1">
            <div className="landing-page-content-container">
              <h1 className="landing-page-text heading">
                <span>
                  The perfect apartment,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="landing-page-text02">faster</span>
                <span> than ever.</span>
              </h1>
              <span className="landing-page-text04 normalText">
                <span>
                  A personalized rental search, with experts supporting every
                  step of your journey, all for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>free</span>
                <span>!</span>
              </span>
              <div className="landing-page-container2">
                <Link to="/get-started" className="landing-page-navlink">
                  <SolidButton2Light
                    button="Get Started"
                    rootClassName="solid-button2light-root-class-name9"
                    className="landing-page-component1"
                  ></SolidButton2Light>
                </Link>
              </div>
              <img
                alt="image"
                src="/playground_assets/decor1-500h.png"
                className="landing-page-image"
              />
            </div>
            <img
              alt="image"
              src="/playground_assets/pexels-mustafa-hussein-12826233-300w.jpg"
              loading="eager"
              className="landing-page-image1"
            />
          </div>
        </div>
      </div>
      <div id="main-section" className="landing-page-landing-tile-2">
        <h1 className="landing-page-text08 heading">
          <span>Let us look for an apartment with you, for</span>
          <span className="landing-page-text10">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="landing-page-text11">free</span>
          <span>.</span>
        </h1>
        <span className="landing-page-text13 normalText">
          We are the only real estate brokerage in Ontario specializing in
          residential leasing. Our team of professionals will help you through
          every stage of the rental process, so you can find your dream
          apartment faster.
        </span>
        <div className="landing-page-container3">
          <Link to="/get-started" className="landing-page-navlink1">
            <SolidButton
              button="Get Started"
              rootClassName="solid-button-root-class-name5"
              className="landing-page-component2"
            ></SolidButton>
          </Link>
          <Link to="/howit-works" className="landing-page-navlink2">
            <SolidButton
              button="How it Works"
              rootClassName="solid-button-root-class-name6"
              className="landing-page-component3"
            ></SolidButton>
          </Link>
        </div>
        <img
          alt="image"
          src="/playground_assets/pexels-pixabay-5099221-1500h.jpg"
          className="landing-page-image2"
        />
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default LandingPage
