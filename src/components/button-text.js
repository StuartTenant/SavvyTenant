import React from 'react'

import PropTypes from 'prop-types'

import './button-text.css'
import { Component } from 'react/cjs/react.production.min'

class ButtonText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  render() {
    return (
      <div className={`button-text-container ${this.props.rootClassName} `}>
        <div className="button-text-container1">
          <input onChange={() => { this.props.checked(this.state.checked); }} onClick={() => { this.setState({ checked: !this.state.checked }); }} type="checkbox" checked={this.state.checked} className="" />
          <span className="button-text-text content">{this.props.text}</span>
        </div>
      </div>
    );
  }


}

ButtonText.defaultProps = {
  text: 'description',
  rootClassName: '',
}

ButtonText.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ButtonText
