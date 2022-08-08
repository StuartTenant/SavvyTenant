import React from 'react'

import PropTypes from 'prop-types'

import './logo.css'

const Logo = (props) => {
  return (
    <div className={`logo-container ${props.rootClassName} `}>
      <img
        alt="image"
        src="/playground_assets/savvy-1500w.png"
        className="logo-image"
      />
      <h1 className="logo-logo">{props.Logo}</h1>
    </div>
  )
}

Logo.defaultProps = {
  Logo: 'Savvy Tenant',
  rootClassName: '',
  image_src: '6765fe16-ffd2-42d9-a07a-f05dcd44f484',
  image_alt: 'image',
}

Logo.propTypes = {
  Logo: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Logo
