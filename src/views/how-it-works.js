import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import SolidButton2Light from '../components/solid-button2light'
import Footer from '../components/footer'
import './how-it-works.css'

const HowItWorks = (props) => {
  return (
    <div className="how-it-works-container">
      <Helmet>
        <title>How-it-Works - SavvyTenant</title>
        <meta property="og:title" content="How-it-Works - SavvyTenant" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name2"></NavBar>
      <div className="how-it-works-hero">
        <h1 className="how-it-works-text">HOW IT WORKS</h1>
        <div className="how-it-works-container01">
          <h1 className="how-it-works-text01 heading">
            <span className="how-it-works-text02">
              Why is our service free?
            </span>
          </h1>
          <span className="how-it-works-text03">
            <span>
              Landlords often pay to list their available units. When this
              happens, they agree to pay a finder’s
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              fee to the tenant’s agent (us). As your agent, we represent your
              interests, not the landlord’s.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              When you sign a lease on an apartment we’ve found you- we get paid
              this fee by the landlord,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>at no cost to you.</span>
          </span>
          <span className="how-it-works-text08">Questions?</span>
          <div className="how-it-works-container02">
            <Link to="/get-started" className="how-it-works-navlink">
              <SolidButton2Light
                button="Get Started"
                rootClassName="solid-button2light-root-class-name2"
                className="how-it-works-component1"
              ></SolidButton2Light>
            </Link>
          </div>
          <div className="how-it-works-container03"></div>
        </div>
        <div className="how-it-works-steps">
          <h1 className="how-it-works-text09 heading">
            <span>Discover Our Process</span>
          </h1>
          <span className="how-it-works-text11">
            <span>
              We are the only real estate agency in Ontario specializing in
              residential leasing. Our team of real estate professionals help
              our clients through every stage of the rental process, helping
              them find their dream apartment faster.
            </span>
          </span>
          <div className="how-it-works-container04">
            <div className="how-it-works-step">
              <div className="how-it-works-container05">
                <div className="how-it-works-line"></div>
                <div className="how-it-works-container06">
                  <svg viewBox="0 0 1024 1024" className="how-it-works-icon">
                    <path d="M864 0c88.364 0 160 71.634 160 160 0 36.020-11.91 69.258-32 96l-64 64-224-224 64-64c26.742-20.090 59.978-32 96-32zM64 736l-64 288 288-64 592-592-224-224-592 592zM715.578 363.578l-448 448-55.156-55.156 448-448 55.156 55.156z"></path>
                  </svg>
                </div>
                <div className="how-it-works-line1"></div>
              </div>
              <div className="how-it-works-container07">
                <Link to="/get-started" className="how-it-works-navlink1">
                  <h1 className="how-it-works-text13">Sign Up</h1>
                </Link>
                <span className="how-it-works-text14 normalText">
                  <span>
                    Once you sign up, one of our agents will reach out to learn
                    more about you.
                  </span>
                </span>
              </div>
            </div>
            <div className="how-it-works-step1">
              <div className="how-it-works-container08">
                <div className="how-it-works-line2"></div>
                <div className="how-it-works-container09">
                  <svg viewBox="0 0 1024 1024" className="how-it-works-icon2">
                    <path d="M854 656q18 0 30 12t12 30v148q0 50-42 50-298 0-512-214t-214-512q0-42 50-42h148q18 0 30 12t12 30q0 78 24 150 8 26-10 44l-82 72q92 192 294 290l66-84q12-12 30-12 10 0 14 2 72 24 150 24z"></path>
                  </svg>
                </div>
                <div className="how-it-works-line3"></div>
              </div>
              <div className="how-it-works-container10">
                <h1 className="how-it-works-text16">
                  <span>Agent Consultation</span>
                </h1>
                <span className="how-it-works-text18 normalText">
                  <span>
                    We will get back to you within 24 hours to walk you through
                    the next steps in your apartment
                  </span>
                  <br></br>
                  <span>search.</span>
                </span>
              </div>
            </div>
            <div className="how-it-works-step2">
              <div className="how-it-works-container11">
                <div className="how-it-works-line4"></div>
                <div className="how-it-works-container12">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="how-it-works-icon4"
                  >
                    <path d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"></path>
                  </svg>
                </div>
                <div className="how-it-works-line5"></div>
              </div>
              <div className="how-it-works-container13">
                <h1 className="how-it-works-text21">Showing Schedule</h1>
                <span className="how-it-works-text22 normalText">
                  <span>
                    Next, we arrange showings of the apartments you’re
                    interested in renting. We’ll come with you
                  </span>
                  <br></br>
                  <span>
                    on your tours, providing our insights and answering any
                    questions you may have.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="how-it-works-step3">
              <div className="how-it-works-container14">
                <div className="how-it-works-line6"></div>
                <div className="how-it-works-container15">
                  <svg viewBox="0 0 1024 1024" className="how-it-works-icon6">
                    <path d="M1024 608l-192-192v-288h-128v160l-192-192-512 512v32h128v320h320v-192h128v192h320v-320h128z"></path>
                  </svg>
                </div>
                <div className="how-it-works-line7"></div>
              </div>
              <div className="how-it-works-container16">
                <h1 className="how-it-works-text26">
                  <span>Sign Lease!</span>
                </h1>
                <span className="how-it-works-text28 normalText">
                  <span>
                    Once you decide on the place you love, we’ll put your rental
                    application together, ensuring it
                  </span>
                  <br></br>
                  <span>
                    stands out and you secure a lease on the apartment you want!
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="how-it-works-container17"></div>
        </div>
        <div className="how-it-works-steps1">
          <h1 className="how-it-works-text31 heading">
            <span>Our Story</span>
          </h1>
          <span className="how-it-works-text33">
            <span className="how-it-works-text34">
              Savvy Tennant was founded on the idea that every renter in Canada
              deserves access to high quality real estate services. For far too
              long, professional services in real estate have only served
              buyers, sellers, and landlords, leaving tenants without
              representation and adequate advice. Leasing an apartment is a big
              decision, it’s a legal contract with implications for your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="how-it-works-text35">
              financial, personal, and professional life. Many renters don’t
              have the time or know how to accurately consider all the relevant
              factors. In today’s rental market, having a professional
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="how-it-works-text36">
              represent your interests allows you to remain competitive, getting
              the best deal on a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="how-it-works-text37">home you love</span>
            <span className="how-it-works-text38">!</span>
          </span>
          <div className="how-it-works-container18">
            <Link to="/get-started" className="how-it-works-navlink2">
              <SolidButton2Light
                button="Get Started"
                rootClassName="solid-button2light-root-class-name6"
                className="how-it-works-component2"
              ></SolidButton2Light>
            </Link>
          </div>
          <img
            alt="image"
            src="/playground_assets/walldesign-500h.jpg"
            className="how-it-works-image"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default HowItWorks
