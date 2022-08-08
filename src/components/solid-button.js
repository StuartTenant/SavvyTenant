import React from 'react'

import PropTypes from 'prop-types'

import './solid-button.css'
import { Component } from 'react/cjs/react.production.min'

class SolidButton extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`solid-button-container ${this.props.rootClassName} `}>
        <button onClick={() => { this.props.submit(); }} className="solid-button-button">{this.props.button}</button>
      </div>
    )
  }

}

SolidButton.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

SolidButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SolidButton
