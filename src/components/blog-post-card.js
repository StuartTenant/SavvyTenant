import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card.css'

const BlogPostCard = (props) => {
  return (
    <div className={`blog-post-card-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card-image"
      />
      <div className="blog-post-card-container">
        <span className="blog-post-card-text">{props.label}</span>
        <h1 className="blog-post-card-text1">{props.title}</h1>
        <div className="blog-post-card-container1">
          <span className="blog-post-card-text2">{props.description}</span>
          <span className="blog-post-card-text3">Read More</span>
        </div>
        <span className="blog-post-card-text4">{props.author}</span>
      </div>
    </div>
  )
}

BlogPostCard.defaultProps = {
  label: 'ADVICE',
  author: 'by Jon Doe 5 hours ago',
  image_src: '/playground_assets/unsplash-image-1500w.jpeg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  rootClassName: '',
  title: 'Lorem ipsum dolor sit amet',
  image_alt: 'image',
}

BlogPostCard.propTypes = {
  label: PropTypes.string,
  author: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BlogPostCard
