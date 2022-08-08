import React from 'react'

import PropTypes from 'prop-types'

import './solid-button2light.css'
import { Component } from 'react/cjs/react.production.min';

class SolidButton2Light extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`solid-button2light-container ${this.props.rootClassName} `}>
        <button disabled={false} onClick={() => { this.props.next(); }} className="solid-button2light-button">{this.props.button}</button>
      </div >
    )
  }

}

SolidButton2Light.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

SolidButton2Light.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default SolidButton2Light
