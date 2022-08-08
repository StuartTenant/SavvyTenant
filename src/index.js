import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LandingPage from './views/landing-page'
import Blog from './views/blog'
import GetStarted from './views/get-started'
import ContactUs from './views/contact-us'
import HowItWorks from './views/how-it-works'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={LandingPage} path="/" />
        <Route exact component={Blog} path="/blog" />
        <Route exact component={GetStarted} path="/get-started" />
        <Route exact component={ContactUs} path="/contact-us" />
        <Route exact component={HowItWorks} path="/how-it-works" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
