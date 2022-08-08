import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import FormQuestion from '../components/form-question'
import BlogPostCard from '../components/blog-post-card'
import Footer from '../components/footer'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - SavvyTenant</title>
        <meta property="og:title" content="Blog - SavvyTenant" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name3"></NavBar>
      <div className="blog-container1">
        <h1 className="blog-text">More resources coming soon...</h1>
        <FormQuestion
          text="Ideas for the blog? Questions not answered in the FAQ?"
          heading="Any questions you want answered? Let us know!"
          rootClassName="form-question-root-class-name1"
          textarea_placeholder="Let us know!"
        ></FormQuestion>
      </div>
      <BlogPostCard
        title="How to get to your application together?"
        author="by Hannah Nissenbaum 5 hours ago"
        rootClassName="blog-post-card-root-class-name"
      ></BlogPostCard>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Blog
