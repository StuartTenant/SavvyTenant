import React from 'react'

import PropTypes from 'prop-types'

import './light-logo.css'

const LightLogo = (props) => {
  return (
    <div className={`light-logo-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt2}
        src="/playground_assets/white%20logo-1500w.png"
        className="light-logo-image"
      />
      <h1 className="light-logo-logo">{props.Logo}</h1>
    </div>
  )
}

LightLogo.defaultProps = {
  rootClassName: '',
  Logo: 'Savvy Tenant',
  image_alt2: 'image',
  image_src2: 'ad1f0c2c-1c41-4fe6-98d9-51e4636b658e',
}

LightLogo.propTypes = {
  rootClassName: PropTypes.string,
  Logo: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
}

export default LightLogo
