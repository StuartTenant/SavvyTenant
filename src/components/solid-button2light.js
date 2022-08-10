import React from 'react'

import PropTypes from 'prop-types'

import './solid-button2light.css'

function SolidButton2Light(props) {

  return (
    <div className={`solid-button2light-container ${props.rootClassName} `}>
      <button disabled={false} onClick={() => { props.next(); }} className="solid-button2light-button">{props.button}</button>
    </div >
  )


}

SolidButton2Light.defaultProps = {
  rootClassName: '',
  button: 'Button',
  next: () => { },
}

SolidButton2Light.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  next: PropTypes.func
}

export default SolidButton2Light
